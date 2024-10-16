# AR MiniCore UI

## Descripción
AR MiniCore UI es una aplicación web desarrollada con Next.js y React para proporcionar una interfaz de usuario moderna y eficiente para gestionar tareas relacionadas con empleados y proyectos. Utiliza Material-UI para el diseño y Axios para la comunicación con servicios backend. La aplicación sigue el enfoque de componentes para una mejor organización y reutilización del código.

## Instalación y Configuración Inicial
### Creación de un Proyecto Next.js
### Crea un nuevo proyecto Next.js:
![image](https://github.com/user-attachments/assets/ea82da18-dcf7-4154-ab17-78c840b26849)

bash
### Copiar código
npx create-next-app@latest ar_minicore_ui
cd ar_minicore_ui
## Instala las dependencias:

bash
### Copiar código
npm install
### Instala las dependencias adicionales:

bash
### Copiar código
npm install @mui/material @emotion/react @emotion/styled axios
npm install --save-dev typescript @types/node @types/react
## Inicializa un repositorio Git:

bash
### Copiar código
git init
### Crea un archivo .gitignore:

bash
### Copiar código
node_modules
.next
.env
### Crea un archivo de configuración para TypeScript:

bash
Copiar código
npx tsc --init
### Crea un archivo tsconfig.json con la configuración básica:

json
### Copiar código
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}


## Tecnologías y Librerías Utilizadas
- **Next.js**: Framework para React que permite la creación de aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
- **React**: Biblioteca para construir interfaces de usuario.
- **Material-UI**: Biblioteca de componentes React que proporciona una implementación de los principios de diseño de Material Design.
- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes a APIs.
- **@emotion/react** y **@emotion/styled**: Bibliotecas para el estilo en React.

## Estructura del Proyecto
El proyecto está organizado siguiendo una estructura de componentes:

### Componentes:
- **Componentes de UI**: Implementaciones visuales reutilizables usando Material-UI.
- **Páginas**: Archivos en la carpeta `pages/` que representan las rutas de la aplicación.
- **Hooks personalizados**: Funciones que encapsulan lógica reutilizable.
- **Servicios**: Encapsulan la lógica para la comunicación con APIs.

## Instalación
### Clona el repositorio:

git clone https://github.com/tu_usuario/ar_minicore_ui.git
### Navega al directorio del proyecto:
bash
### Copiar código

cd ar_minicore_ui
### Instala las dependencias:

bash
### Copiar código
npm install

## Ejecución del Proyecto
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

bash
### Copiar código
npm run dev
El servidor escuchará en el puerto 3000 por defecto. Puedes acceder a la aplicación en http://localhost:3000.

Para crear una versión de producción, ejecuta:

bash
### Copiar código
npm run build
Y para iniciar la aplicación en modo de producción:

bash
### Copiar código
npm run start
Contribuciones
Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus mejoras o correcciones.

Licencia
Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.

¡Eso es todo! Este README.md proporciona una visión general completa de la aplicación, incluyendo las tecnologías utilizadas, la estructura del proyecto y cómo ejecutarlo.
