#!/bin/bash
# docker-dev.sh - Script de desarrollo con Docker

set -e

echo "🚀 Iniciando entorno de desarrollo Docker..."

# Iniciar en segundo plano con rebuild si hay cambios
docker compose up -d --build

echo "✅ Contenedor iniciado en http://localhost:3005"
echo "📁 Tu código en $(pwd) está montado en /var/www/html"
echo "🔄 Los cambios se reflejan al instante"
echo ""
echo "Comandos útiles:"
echo "  Ver logs:    docker compose logs -f"
echo "  Parar:       docker compose down"
echo "  Reiniciar:   docker compose restart"
