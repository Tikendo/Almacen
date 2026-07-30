#!/bin/bash
# docker-dev.sh - Script de desarrollo con Docker que funciona en cualquier rama

set -e

echo "🚀 Iniciando entorno de desarrollo Docker..."

# Detener contenedores existentes
docker-compose down 2>/dev/null || true

# Iniciar en segundo plano con rebuild si hay cambios en Dockerfile
docker-compose up -d --build

echo "✅ Contenedor iniciado en http://localhost:8080"
echo "📁 Tu código en $(pwd) está montado en /var/www/html"
echo "🔄 Los cambios se reflejan al instante (cambio de rama incluido)"
echo ""
echo "Comandos útiles:"
echo "  Ver logs:    docker-compose logs -f"
echo "  Parar:       docker-compose down"
echo "  Reiniciar:   docker-compose restart"