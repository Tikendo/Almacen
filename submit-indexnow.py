import urllib.request
import urllib.error
import json
import xml.etree.ElementTree as ET
import sys

HOST = "automatizaciondealmacen.com"
KEY = "797a9333c51a49c0a7f849c4506dcb25"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

sitemaps = ["sitemap.xml"]
url_list = set()

for sitemap_file in sitemaps:
    try:
        tree = ET.parse(sitemap_file)
        root = tree.getroot()
        for elem in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
            if elem.text:
                url_list.add(elem.text.strip())
    except Exception as e:
        print(f"Error leyendo {sitemap_file}: {e}")

urls = sorted(list(url_list))
print(f"Total de URLs encontradas en los sitemaps: {len(urls)}")

if not urls:
    print("No se encontraron URLs para enviar.")
    sys.exit(1)

payload = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": urls
}

data = json.dumps(payload).encode("utf-8")
headers = {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": "IndexNow-AutoSubmit/1.0"
}

# Enviamos a IndexNow (Bing replica automáticamente a Yandex, DuckDuckGo, Seznam, etc.)
endpoint = "https://api.indexnow.org/indexnow"

print(f"Enviando {len(urls)} URLs a IndexNow ({endpoint})...")

req = urllib.request.Request(endpoint, data=data, headers=headers, method="POST")

try:
    with urllib.request.urlopen(req) as response:
        status_code = response.getcode()
        print(f"Respuesta recibida: Código HTTP {status_code}")
        if status_code in [200, 202]:
            print("¡Éxito! Las URLs fueron enviadas y aceptadas para indexación inmediata en Bing, DuckDuckGo, Yandex y Seznam.")
        else:
            print(f"Código {status_code}: Petición procesada.")
except urllib.error.HTTPError as e:
    print(f"Error HTTP {e.code}: {e.read().decode('utf-8')}")
    if e.code == 422:
        print("Nota: El código 422 suele ocurrir si el archivo de verificación aún no está accesible públicamente en el servidor.")
except Exception as e:
    print(f"Error de conexión: {e}")
