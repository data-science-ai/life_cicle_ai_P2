# 🤖 Proyecto AI con Ollama

Este proyecto proporciona una interfaz de usuario para interactuar con los modelos de lenguaje de Ollama.

## 📋 Requisitos Previos

- ⚙️ Node.js 20 o superior
- 🅰️ Angular CLI (instalar con `npm install -g @angular/cli`)
- 🐳 Docker (para ejecutar Ollama)

## 🚀 Configuración para Desarrollo Local (Sin Docker para el Frontend)

### 1️⃣ Instalar Node.js y Angular
- 📥 Instalar Node.js 20 o superior desde [nodejs.org](https://nodejs.org/)
- 🔧 Instalar Angular CLI globalmente:
  ```bash
  npm install -g @angular/cli
  ```

### 2️⃣ Configurar Ollama con Docker
1. 🐳 Iniciar el servicio de Ollama usando Docker Compose:
   ```bash
   docker-compose up -d
   ```

2. ⏳ Descargar los modelos requeridos (esto puede tomar tiempo):
   ```bash
   docker exec -it ollama ollama pull gemma3n:e4b
   docker exec -it ollama ollama pull phi4-mini-reasoning:3.8b
   ```

### 3️⃣ Configurar la Aplicación
- 🔄 El modelo predeterminado es `gemma3n:e4b`
- ⚙️ Para cambiar de modelo, modifica el parámetro `model` en:
  `src/app/core/services/ollama.service.ts` (alrededor de la línea 32)

### 4️⃣ Instalar Dependencias
```bash
npm install
```

### 5️⃣ Iniciar el Servidor de Desarrollo
```bash
ng serve
```

🌐 La aplicación estará disponible en `http://localhost:4200`

## 🔄 Cambiando entre Modelos
Para cambiar entre diferentes modelos:
1. 📂 Abre `src/app/core/services/ollama.service.ts`
2. 🔍 Localiza la configuración del modelo (alrededor de la línea 32)
3. 🔄 Cambia el nombre del modelo por uno de estos:
   - `gemma3n:e4b`
   - `phi4-mini-reasoning:3.8b`
4. 💾 Guarda el archivo y actualiza la aplicación

## ⚠️ Notas Importantes
- 🐳 Asegúrate de que Ollama esté ejecutándose en Docker antes de iniciar el frontend
- ⏱️ La primera vez que descargues los modelos, puede tomar varios minutos dependiendo de tu conexión a internet
- 💾 Asegúrate de tener suficiente espacio en disco para los modelos (varios GB)
- 🔄 Después de cambiar el modelo, asegúrate de guardar los cambios y reiniciar la aplicación si es necesario