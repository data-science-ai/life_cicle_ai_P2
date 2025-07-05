# 🚀 Chat con IA Local

Una aplicación de escritorio desarrollada en Python que permite interactuar con modelos de IA locales a través de una interfaz gráfica intuitiva, compatible con Ollama en Docker.

## ✨ Características Principales

- 🖥️ Interfaz gráfica intuitiva desarrollada con Tkinter
- 🤖 Soporte para múltiples modelos de IA locales a través de Ollama
- ⚙️ Configuración personalizable mediante variables de entorno
- 💬 Intercambio de mensajes en tiempo real
- 🐳 Fácil despliegue con Docker
- 🔄 Historial de conversación
- 🎨 Tema oscuro/claro

## 📋 Requisitos del Sistema

### Mínimos
- Python 3.8 o superior
- Docker y Docker Compose
- 8GB de RAM (mínimo)
- 10GB de espacio en disco

### Recomendados
- 16GB+ de RAM
- GPU compatible con CUDA para mejor rendimiento
- Conexión a Internet para descargar modelos

## 🚀 Comenzando Rápidamente

### Con Docker (Recomendado)

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/ai_cicle_2.git
   cd ai_cicle_2
   ```

2. **Configurar variables de entorno**
   Copia el archivo de plantilla y edítalo según tus necesidades:
   ```bash
   cp .env.template .env
   ```

   Configuración básica del archivo `.env`:
   ```env
   # Configuración de Ollama
   BASE_URL=http://localhost:11434/api/generate
   
   # Modelo predeterminado (puedes cambiarlo por cualquier modelo soportado por Ollama)
   MODEL=llama3
   
   # Máximo de tokens por respuesta
   MAX_TOKENS=1000
   
   # Opcional: Configuración de proxy si es necesario
   # HTTP_PROXY=
   # HTTPS_PROXY=
   ```

3. **Iniciar los servicios**
   ```bash
   docker-compose up -d
   ```

4. **Descargar un modelo**
   ```bash
   # Descargar un modelo (ejemplo con llama3)
   docker exec ollama ollama pull llama3
   
   # Listar modelos disponibles
   # docker exec ollama ollama list
   ```

5. **Iniciar la aplicación**
   ```bash
   python app.py
   ```

### Instalación Manual

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/ai_cicle_2.git
   cd ai_cicle_2
   ```

2. **Crear y activar un entorno virtual (recomendado)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: .\venv\Scripts\activate
   ```

3. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar variables de entorno**
   Sigue los mismos pasos que en la sección de Docker para configurar el archivo `.env`.

5. **Iniciar la aplicación**
   ```bash
   python app.py
   ```

## 🛠️ Configuración de Ollama

Si no estás usando Docker, necesitarás instalar y ejecutar Ollama manualmente:

```bash
# En Linux/macOS
curl -fsSL https://ollama.com/install.sh | sh
ollama serve &

# O con Docker (si prefieres no usar el docker-compose proporcionado)
docker run -d -p 11434:11434 --name ollama ollama/ollama
```

## 📱 Uso de la Aplicación

1. **Iniciar la aplicación**
   ```bash
   python app.py
   ```

2. **Interfaz de usuario**
   - Escribe tu pregunta en el campo de texto inferior
   - Presiona Enter o haz clic en el botón "Enviar"
   - Las respuestas aparecerán en el área de chat principal
   - Usa el botón "Limpiar chat" para comenzar una nueva conversación

3. **Características adicionales**
   - Cambia entre tema claro/oscuro usando el botón en la esquina superior derecha
   - Las conversaciones se guardan automáticamente
   - Soporte para formato Markdown en las respuestas



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
