<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

// ==========================================================
// INICIALIZACIÓN DE RESPUESTA
// ==========================================================
$response = [
    'success' => false,
    'message' => '',
    'error' => ''
];

// ==========================================================
// CONFIGURACIÓN PRINCIPAL
// ==========================================================
$admin_email = "ventas@tikendo.mx";
$from_email = "automatizaciondealmacen@tikendo.mx";
$from_name = "TiKendo - Automatización de Almacenes";

// Dominios bloqueados (correos personales y temporales)
$blocked_domains = [
    'gmail.com',
    'googlemail.com',
    'yahoo.com',
    'yahoo.com.mx',
    'yahoo.es',
    'ymail.com',
    'hotmail.com',
    'hotmail.com.mx',
    'hotmail.es',
    'live.com',
    'live.com.mx',
    'outlook.com',
    'outlook.com.mx',
    'protonmail.com',
    'proton.me',
    'tutanota.com',
    'aol.com',
    'gmx.com',
    'gmx.net',
    'guerrillamail.com',
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'yopmail.com',
    'trashmail.com',
    'throwawaymail.com',
    'dispostable.com',
    'sharklasers.com',
    'maildrop.cc'
];

// ==========================================================
// LECTURA DE DATOS ENTRANTES
// ==========================================================
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    $response['error'] = "Error al recibir los datos.";
    echo json_encode($response);
    exit;
}

// ==========================================================
// EXTRACCIÓN Y SANITIZACIÓN DE DATOS
// ==========================================================
$nombre = trim($data['nombre'] ?? '');
$email = trim($data['email'] ?? '');
$telefono = trim($data['telefono'] ?? '');
$empresa = trim($data['empresa'] ?? '');
$comentarios = trim($data['comentarios'] ?? '');
$answers = $data['answers'] ?? [];

/**
 * Sanitiza una cadena para evitar XSS
 *
 * @param string $str
 * @return string
 */
function sanitize($str)
{
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

$nombre = sanitize($nombre);
$email = sanitize($email);
$telefono = sanitize($telefono);
$empresa = sanitize($empresa);
$comentarios = sanitize($comentarios);

// ==========================================================
// VALIDACIONES
// ==========================================================
if (strlen($nombre) < 3) {
    $response['error'] = "El nombre debe tener al menos 3 caracteres.";
} elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['error'] = "Ingresa un correo electrónico válido.";
} elseif (!is_business_email($email, $blocked_domains)) {
    $response['error'] = "Por favor, utiliza un correo electrónico empresarial. No se aceptan Gmail, Hotmail, Yahoo, temporales, etc.";
} elseif (empty($telefono) || !preg_match('/^\d{10}$/', $telefono)) {
    $response['error'] = "El número de teléfono debe contener exactamente 10 dígitos (ej: 5512345678).";
} elseif (empty($answers) || !is_array($answers)) {
    $response['error'] = "No se recibieron las respuestas del formulario.";
} else {
    // ==========================================================
    // CONSTRUCCIÓN DEL MENSAJE
    // ==========================================================
    $adminMessage = "Nueva cotización recibida desde automatizaciondealmacen.com\n\n";
    $adminMessage .= "=== DETALLES DE LA COTIZACIÓN ===\n\n";

    foreach ($answers as $q) {
        $ans = is_array($q['answer'] ?? null)
            ? implode(", ", $q['answer'])
            : ($q['answer'] ?? 'No respondido');

        $adminMessage .= "• " . ($q['text'] ?? 'Pregunta') . "\n  → " . $ans . "\n\n";
    }

    $adminMessage .= "=== DATOS DEL CLIENTE ===\n";
    $adminMessage .= "Nombre: $nombre\nCorreo: $email\nTeléfono: $telefono\n";

    if ($empresa) {
        $adminMessage .= "Empresa: $empresa\n";
    }
    if ($comentarios) {
        $adminMessage .= "Comentarios: $comentarios\n";
    }

    // ==========================================================
    // ENVÍO DE CORREO CON PHPMailer
    // ==========================================================
    $mail = new PHPMailer(true);

    try {
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = 'smtp.zoho.com';
        $mail->SMTPAuth = true;
        $mail->Username = $from_email;
        $mail->Password = 'Tikendo2024$';   // ⚠️ Cambiar por contraseña real
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom($from_email, $from_name);
        $mail->addAddress($admin_email);
        $mail->addReplyTo($email, $nombre);

        $mail->Subject = "Nueva Cotización - " . $nombre;
        $mail->Body = nl2br(htmlspecialchars($adminMessage));
        $mail->AltBody = $adminMessage;
        $mail->isHTML(true);

        $mail->send();

        $response['success'] = true;
        $response['message'] = "¡Cotización enviada correctamente! Nos pondremos en contacto pronto.";

    } catch (Exception $e) {
        $response['error'] = "Error al enviar el correo: " . $mail->ErrorInfo;
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
    }
}

// ==========================================================
// RESPUESTA FINAL
// ==========================================================
echo json_encode($response);
exit;

// ==========================================================
// FUNCIONES AUXILIARES
// ==========================================================

/**
 * Verifica si un correo pertenece a un dominio empresarial permitido
 *
 * @param string $email
 * @param array $blocked_domains
 * @return bool
 */
function is_business_email($email, $blocked_domains)
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    $parts = explode('@', strtolower($email));

    if (count($parts) !== 2) {
        return false;
    }

    return !in_array($parts[1], $blocked_domains);
}