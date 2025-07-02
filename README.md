📦 DigiAPI App
Una aplicación que consume la Digi-API para visualizar datos de Digimon en una interfaz interactiva. From: https://digi-api.com/

🚀 Tecnologías
Vite + Preact

TypeScript

TailwindCSS

Axios

Clip-paths y gradientes para estilos

Hooks custom (e.g. useMask)

Animaciones CSS

🎨 Funcionalidad implementada
✅ Layout dinámico

Cambia el fondo entre desktop y mobile aleatoriamente.

✅ Home

Muestra buscador de Digimon por nombre.

Botón de refresh para traer Digimon aleatorios.

Spinner de carga mientras se consultan datos.

Vista en 2 columnas (cards a la izquierda, card grande a la derecha).

✅ Card Rotating

Muestra lista de Digimon en forma de carrusel 3D.

Click sobre un Digimon para ver detalles.

✅ Card Digimon

Muestra detalle de un Digimon seleccionado:

Imagen

Nombre

ID

Level

Type

Attributes

Fields (con imágenes)

Descripción (expansible)

✅ Servicios API

getList: lista de Digimon aleatoria o filtrada por nombre.

getDigimon: consulta detalle de un Digimon por id o nombre.

getTypes, getFields, getAttributes: para obtener metadata del API.

✅ Hooks custom

useIsSmallScreen: detecta si estás en mobile para cambiar imágenes de fondo.

useMask: para aplicar efectos gráficos sobre imágenes de Digimon.

⚙️ Scripts
Script	Descripción
npm install	Instala dependencias
npm run dev	Corre servidor local
npm run build	Genera build producción
