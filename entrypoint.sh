#!/bin/bash
set -e

# Configurar ServerName para suprimir warning de apache
echo "ServerName localhost" > /etc/apache2/conf-available/servername.conf
a2enconf servername > /dev/null 2>&1 || true

# Configurar Apache para ejecutarse con el UID/GID del host (evita problemas de permisos en /media/datos)
USER_ID=${APACHE_RUN_USER_ID:-33}
GROUP_ID=${APACHE_RUN_GROUP_ID:-33}

if [ "$USER_ID" != "33" ]; then
    usermod -u "$USER_ID" www-data 2>/dev/null || true
    groupmod -g "$GROUP_ID" www-data 2>/dev/null || true
fi

if [ ! -d "/var/www/html/vendor" ]; then
    cd /var/www/html && composer install --no-interaction
fi

exec "$@"
