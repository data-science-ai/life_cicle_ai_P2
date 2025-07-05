# Aplicación de Chat con IA Local

Una aplicación de escritorio desarrollada en Python que permite interactuar con un modelo de IA local a través de una interfaz gráfica amigable.

## Características

- Interfaz gráfica intuitiva con Tkinter
- Conexión con un modelo de IA local a través de API
- Intercambio de mensajes en tiempo real

## Requisitos Previos

- Python 3.8 o superior
- Servidor local de Ollama u otro modelo de IA compatible

## Instalación

1. Clona este repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd ai_cicle_2
   ```

2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

## Uso

1. Asegúrate de tener tu servidor de IA local en ejecución (por defecto en `http://localhost:11434`)
2. Ejecuta la aplicación:
   ```bash
   python app.py
   ```
3. Escribe tu pregunta en el campo de texto y presiona Enter o haz clic en "Enviar"

## Estructura del Proyecto

- `app.py`: Código principal de la aplicación
- `requirements.txt`: Dependencias del proyecto
- `.gitignore`: Archivos y carpetas ignorados por Git

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
