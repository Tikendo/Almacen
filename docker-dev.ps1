# docker-dev.ps1 - Script de desarrollo con Docker (Windows PowerShell)

Write-Host "🚀 Iniciando entorno de desarrollo Docker..." -ForegroundColor Green

# Detener contenedores existentes
docker-compose down 2>$null

# Iniciar en segundo plano con rebuild si hay cambios
docker-compose up -d --build

Write-Host "✅ Contenedor iniciado en http://localhost:8080" -ForegroundColor Green
Write-Host "📁 Tu código en $(Get-Location) está montado en /var/www/html" -ForegroundColor Cyan
Write-Host "🔄 Los cambios se reflejan al instante (incluye cambio de rama)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Comandos útiles:" -ForegroundColor Yellow
Write-Host "  Ver logs:    docker-compose logs -f" -ForegroundColor Gray
Write-Host "  Parar:       docker-compose down" -ForegroundColor Gray
Write-Host "  Reiniciar:   docker-compose restart" -ForegroundColor Gray