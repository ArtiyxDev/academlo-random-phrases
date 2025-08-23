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
- **🏗️ Arquitectura Modular**: Componentes reutilizables y hooks personalizados
- **🔒 Type Safety**: Tipado estricto con TypeScript en toda la aplicación
- **🎯 Separación de Responsabilidades**: Lógica organizada en módulos especializados

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
│   ├── card/
│   │   ├── Card.tsx              # Componente contenedor principal
│   │   ├── CardAuthor.tsx        # Componente para mostrar el autor
│   │   ├── CardButton.tsx        # Componente de botón reutilizable
│   │   ├── CardPhrase.tsx        # Componente para mostrar la frase
│   │   ├── CardSharedLink.tsx    # Componente para enlaces de compartir
│   │   ├── PhraseDisplay.tsx     # Componente de visualización de frases
│   │   ├── SocialShare.tsx       # Componente de redes sociales
│   │   └── CopyButton.tsx        # Componente de copiado al portapapeles
│   └── ui/
│       └── LoadingSpinner.tsx    # Componente de carga reutilizable
├── hooks/
│   ├── usePhrases.ts            # Hook personalizado para gestión de frases
│   └── index.ts                 # Exportaciones centralizadas de hooks
├── types/
│   ├── PhraseItem.ts            # Interfaces TypeScript
│   └── index.ts                 # Exportaciones centralizadas de tipos
├── constants/
│   ├── styles.ts                # Constantes de estilos y configuración
│   └── index.ts                 # Exportaciones centralizadas de constantes
├── utils/
│   ├── shareUtils.ts            # Utilidades para compartir y clipboard
│   └── index.ts                 # Exportaciones centralizadas de utilidades
├── data/
│   └── phrases.json             # Base de datos de frases
├── libs/
│   └── JsonDataMapper.ts        # Utilidad para mapear datos JSON
├── assets/                      # Recursos estáticos
├── App.tsx                      # Componente principal (refactorizado)
├── main.tsx                     # Punto de entrada
└── index.css                    # Estilos globales
```

## 🎯 Funcionalidades Principales

### Gestión de Frases
- Carga de frases desde archivo JSON local
- Navegación circular entre frases
- Sistema de colores aleatorios para cada cambio
- Hook personalizado `usePhrases` para gestión de estado

### Interacciones del Usuario
- Botón "Cambiar frase" para obtener una nueva frase aleatoria
- Funcionalidad de copiado con feedback visual y manejo de errores
- Botones de compartir en múltiples plataformas sociales
- Spinner de carga personalizable

### Arquitectura Modular
- **Componentes especializados**: Cada funcionalidad en su propio componente
- **Hooks personalizados**: Lógica de estado encapsulada y reutilizable
- **Utilidades centralizadas**: Funciones helper organizadas por propósito
- **Constantes organizadas**: Configuración centralizada
- **Types seguros**: Interfaces TypeScript para todo el proyecto
- **Props tipadas**: Comunicación robusta entre componentes
- **Estilos consistentes**: TailwindCSS con sistema de diseño unificado

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
Los colores se definen en `src/constants/styles.ts` en el array `outlineClasses`. Puedes agregar o modificar las clases de TailwindCSS:

```typescript
export const outlineClasses = [
  "outline-red-500 outline-2",
  "outline-blue-500 outline-2",
  // Agrega más colores aquí
];
```

### Personalizar Duraciones
Modifica las constantes de tiempo en `src/constants/styles.ts`:

```typescript
export const COPY_FEEDBACK_DURATION = 2500; // ms
export const OUTLINE_ANIMATION_DURATION = 200; // ms
```

## 🏗️ Arquitectura Técnica

### Patrón de Composición
El proyecto utiliza un patrón de composición avanzado donde el componente principal `App.tsx` actúa como orquestador:

```tsx
function App() {
  const { currentPhrase, outlineClass, isCopied, isLoading, handleNextPhrase, handleCopyPhrase } = usePhrases();

  return (
    <Card className={`transition-colors ${outlineClass}`}>
      <PhraseDisplay phrase={currentPhrase} />
      <CardButton onClick={handleNextPhrase}>Cambiar frase</CardButton>
      <section className="flex justify-center gap-0.5">
        <SocialShare phrase={currentPhrase} />
        <CopyButton isCopied={isCopied} onCopy={handleCopyPhrase} />
      </section>
    </Card>
  );
}
```

### Hook Personalizado `usePhrases`
Centraliza toda la lógica de estado y efectos:

```typescript
export const usePhrases = () => {
  // Estados
  const [phrases, setPhrases] = useState<PhraseItem[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [outlineClass, setOutlineClass] = useState(outlineClasses[0]);
  
  // Lógica de negocio
  const handleNextPhrase = useCallback(() => {
    setCurrentPhraseIndex(prevIndex => prevIndex === phrases.length - 1 ? 0 : prevIndex + 1);
    setOutlineClass(getRandomOutlineClass(outlineClasses));
  }, [phrases.length]);

  return { currentPhrase, outlineClass, handleNextPhrase, /* ... */ };
};
```

### Utilidades Especializadas
- **`generateShareUrls`**: Crea URLs dinámicas para redes sociales
- **`copyToClipboard`**: Maneja la copia al portapapeles con error handling
- **`getRandomOutlineClass`**: Selección aleatoria de estilos

### Beneficios de la Arquitectura
- ✅ **Testabilidad**: Cada módulo puede ser testeado independientemente
- ✅ **Reutilización**: Componentes y hooks reutilizables
- ✅ **Mantenibilidad**: Código organizado y fácil de modificar
- ✅ **Escalabilidad**: Fácil agregar nuevas funcionalidades
- ✅ **Type Safety**: TypeScript en todos los niveles

## 📝 Aprendizajes del Proyecto

Este proyecto abarca conceptos fundamentales de React y arquitectura de software:

### Conceptos de React
- **useState & useEffect**: Manejo del estado y efectos secundarios
- **Componentes Funcionales**: Arquitectura moderna de React
- **Props & TypeScript**: Tipado fuerte y comunicación entre componentes
- **Eventos**: Manejo de clicks y interacciones del usuario
- **Conditional Rendering**: Renderizado condicional basado en estado
- **Custom Hooks**: Encapsulación de lógica reutilizable

### Arquitectura y Organización
- **Separación de Responsabilidades**: Cada módulo tiene un propósito específico
- **Modularización**: División del código en componentes y utilidades reutilizables
- **Barrel Exports**: Uso de archivos index.ts para importaciones limpias
- **Constantes Centralizadas**: Configuración organizada y mantenible
- **Utility Functions**: Funciones helper especializadas y testeables

### Buenas Prácticas
- **TypeScript**: Tipado estricto para mayor robustez
- **Error Handling**: Manejo adecuado de errores en operaciones asíncronas
- **Performance**: Uso de useCallback para optimización
- **Accessibility**: Componentes con estructura semántica
- **Clean Code**: Código legible y bien organizado

## 👨‍💻 Desarrollador

**ArtiyxDev**
- GitHub: [@ArtiyxDev](https://github.com/ArtiyxDev)

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte del **Bootcamp de Desarrollo Web de Academlo**, específicamente como el primer entregable del módulo de React. El objetivo es demostrar competencias en:

### Fundamentos Técnicos
- Fundamentos de React y TypeScript
- Gestión del estado y ciclo de vida de componentes
- Diseño responsive con TailwindCSS
- Buenas prácticas de desarrollo frontend

### Arquitectura Avanzada
- Modularización y separación de responsabilidades
- Hooks personalizados para reutilización de lógica
- Organización escalable de código
- Implementación de patrones de diseño
- Tipado estricto con TypeScript

### Competencias Profesionales
- Desarrollo de aplicaciones robustas y mantenibles
- Implementación de features completas (compartir, copiar, etc.)
- Manejo de estado complejo con custom hooks
- Creación de componentes reutilizables
- Documentación técnica profesional

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**¡Esperamos que disfrutes explorando este proyecto! 🚀**
