# 🎭 Academlo Random Phrases

> **Primer entregable del Bootcamp de Academlo - Módulo React**

Una aplicación web interactiva que muestra frases aleatorias con diferentes autores, desarrollada como parte del bootcamp de desarrollo web de Academlo. El proyecto permite visualizar frases inspiradoras, cambiarlas dinámicamente y compartirlas en redes sociales.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## 🌟 Características

- **🎲 Frases Aleatorias**: Visualización de frases motivacionales e inspiradoras
- **🎨 Diseño Dinámico**: Cambio de colores aleatorios en cada nueva frase
- **📱 Responsive**: Diseño adaptable a diferentes dispositivos
- **📋 Copiar al Portapapeles**: Funcionalidad para copiar frases con un clic
- **🔗 Compartir en Redes Sociales**: Enlaces directos para compartir en:
  - LinkedIn
  - Facebook
  - Twitter
  - WhatsApp
  - Telegram
  - Reddit
- **⚡ Rendimiento Optimizado**: Construido con Vite para una carga rápida

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS** - Framework de CSS utilitario
- **React Icons** - Biblioteca de iconos para React
- **ESLint & Prettier** - Herramientas de linting y formateo de código

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ArtiyxDev/academlo-random-phrases.git
   cd academlo-random-phrases
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador en** `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── card/
│       ├── Card.tsx              # Componente contenedor principal
│       ├── CardAuthor.tsx        # Componente para mostrar el autor
│       ├── CardButton.tsx        # Componente de botón reutilizable
│       ├── CardPhrase.tsx        # Componente para mostrar la frase
│       └── CardSharedLink.tsx    # Componente para enlaces de compartir
├── data/
│   └── phrases.json              # Base de datos de frases
├── libs/
│   └── JsonDataMapper.ts         # Utilidad para mapear datos JSON
├── assets/                       # Recursos estáticos
├── App.tsx                       # Componente principal
├── main.tsx                      # Punto de entrada
└── index.css                     # Estilos globales
```

## 🎯 Funcionalidades Principales

### Gestión de Frases
- Carga de frases desde archivo JSON local
- Navegación circular entre frases
- Sistema de colores aleatorios para cada cambio

### Interacciones del Usuario
- Botón "Cambiar frase" para obtener una nueva frase aleatoria
- Funcionalidad de copiado con feedback visual
- Botones de compartir en múltiples plataformas sociales

### Componentes Reutilizables
- Arquitectura modular con componentes separados
- Props tipadas con TypeScript
- Estilos consistentes con TailwindCSS

## 🔧 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo

# Construcción
pnpm build        # Construye la aplicación para producción

# Linting
pnpm lint         # Ejecuta ESLint para verificar el código

# Vista previa
pnpm preview      # Vista previa de la construcción de producción
```

## 🎨 Personalización

### Agregar Nuevas Frases
Edita el archivo `src/data/phrases.json` siguiendo la estructura:

```json
{
  "phrase": "Tu nueva frase inspiradora aquí",
  "author": "Nombre del Autor"
}
```

### Modificar Colores
Los colores se definen en el array `outlineClasses` en `App.tsx`. Puedes agregar o modificar las clases de TailwindCSS.

## 📝 Aprendizajes del Proyecto

Este proyecto abarca conceptos fundamentales de React:

- **useState & useEffect**: Manejo del estado y efectos secundarios
- **Componentes Funcionales**: Arquitectura moderna de React
- **Props & TypeScript**: Tipado fuerte y comunicación entre componentes
- **Eventos**: Manejo de clicks y interacciones del usuario
- **Conditional Rendering**: Renderizado condicional basado en estado
- **Mapeo de Datos**: Transformación y visualización de datos JSON

## 👨‍💻 Desarrollador

**ArtiyxDev**
- GitHub: [@ArtiyxDev](https://github.com/ArtiyxDev)

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte del **Bootcamp de Desarrollo Web de Academlo**, específicamente como el primer entregable del módulo de React. El objetivo es demostrar competencias en:

- Fundamentos de React y TypeScript
- Gestión del estado y ciclo de vida de componentes
- Diseño responsive con TailwindCSS
- Buenas prácticas de desarrollo frontend
- Arquitectura de componentes reutilizables

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**¡Esperamos que disfrutes explorando este proyecto! 🚀**
