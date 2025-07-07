# AI Chat Application with Ollama

A modern web-based chat application that integrates with Ollama for AI-powered conversations. This project uses Angular for the frontend and is containerized with Docker for easy deployment.

## Features

- Modern, responsive web interface built with Angular
- Integration with Ollama for AI-powered chat functionality
- Containerized with Docker for easy setup and deployment
- Scalable architecture using Docker Compose

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Node.js (for local development without Docker)
- npm or yarn (for local development without Docker)

## Getting Started

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai_cicle_2
   ```

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access the application:
   - Frontend: http://localhost
   - Ollama API: http://localhost:11434

### Local Development

For local development without Docker:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   ng serve
   ```

3. The application will be available at http://localhost:4200

## Project Structure

- `/frontend` - Angular application source code
- `docker-compose.yml` - Docker Compose configuration
- `Dockerfile` - Frontend Docker configuration

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm test` - Run tests
- `npm run lint` - Run linter

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.io/)
- [Ollama](https://ollama.ai/)
- [Docker](https://www.docker.com/)
