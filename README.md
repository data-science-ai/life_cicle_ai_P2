# 🚀 Chat con IA Local

Una aplicación de escritorio desarrollada en Python que permite interactuar con modelos de IA locales a través de una interfaz gráfica sencilla, compatible con Ollama en Docker.

## ✨ Características

- Interfaz gráfica intuitiva con Tkinter
- Conexión con modelos de IA locales a través de Ollama
- Configuración mediante variables de entorno
- Intercambio de mensajes en tiempo real
- Fácil despliegue con Docker

## 📋 Requisitos Previos

- Python 3.8 o superior
- Docker y Docker Compose
- Al menos 8GB de RAM recomendados para ejecutar los modelos

## 🐳 Configuración con Docker (Recomendado)

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ai_cicle_2.git
   cd ai_cicle_2
   ```

2. Crea un archivo `.env` con la configuración:
   ```env
   BASE_URL=http://localhost:11434/api/generate
   MODEL=llama3
   MAX_TOKENS=1000
   ```

3. Inicia los servicios con Docker Compose:
   ```bash
   docker-compose up -d
   ```

4. Descarga un modelo (ejemplo con llama3):
   ```bash
   docker exec ollama ollama pull llama3
   ```

## 💻 Instalación Manual

1. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

2. Asegúrate de tener Ollama en ejecución:
   ```bash
   # En Linux/macOS
   curl -fsSL https://ollama.com/install.sh | sh
   ollama serve &
   
   # O con Docker
   docker run -d -p 11434:11434 --name ollama ollama/ollama
   ```

## 🚀 Uso

1. Inicia la aplicación:
   ```bash
   python app.py
   ```

2. Interfaz de usuario:
   - Escribe tu pregunta en el campo de texto
   - Presiona Enter o haz clic en "Enviar"
   - La respuesta aparecerá en el área de chat

## 🔧 Configuración Avanzada

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con:
```env
BASE_URL=http://localhost:11434/api/generate
MODEL=llama3  # Modelo a utilizar
MAX_TOKENS=1000  # Máximo de tokens por respuesta
```

### Modelos Disponibles
Puedes usar cualquier modelo compatible con Ollama. Algunos populares:
- `llama3`
- `mistral`
- `llama2`
- `dolphin-mistral`

Para ver los modelos instalados:
```bash
docker exec ollama ollama list
```

## 🏗️ Estructura del Proyecto

```
.
├── app.py              # Aplicación principal
├── requirements.txt    # Dependencias de Python
├── docker-compose.yml  # Configuración de Docker
├── .env.example       # Plantilla de configuración
├── README.md          # Este archivo
└── .gitignore         # Archivos ignorados por Git
```

## 🔍 Solución de Problemas

- **Error de conexión**: Verifica que Ollama esté en ejecución y accesible en `http://localhost:11434`
- **Modelo no encontrado**: Asegúrate de haber descargado el modelo con `ollama pull <nombre-modelo>`
- **Problemas de memoria**: Algunos modelos requieren mucha RAM. Prueba con un modelo más pequeño si tienes problemas.

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
