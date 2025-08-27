# Uso de Hooks en React

En este proyecto usamos principalmente dos hooks de React: `useState` y `useEffect`.

## useState

`useState` permite crear y manejar el estado de un componente funcional. Se usa para valores que cambian con la interacción del usuario.

```js
const [tareas, setTareas] = useState([...listaTareas]);
setTareas(nuevasTareas); // actualiza el estado y provoca un re-render
````

## useEffect

`useEffect` permite ejecutar código cuando el componente se monta, se actualiza o se desmonta.

```js
useEffect(() => {
    setTareas([...listaTareas]);
}, [listaTareas]); // se ejecuta cuando cambia listaTareas
```

## Resumen del flujo en GridTareas

1. El estado `tareas` se inicializa con la lista recibida por `props`.
2. `useEffect` sincroniza `tareas` si cambia la lista original.
3. Funciones `completarTarea` y `eliminarTarea` actualizan el estado llamando a `setTareas`.
4. El render muestra las tareas con botones que disparan esas funciones.

## Flujo en Formularios (Categoría y Tarea)

* `useState` maneja visibilidad del formulario (`showForm`) y campos de entrada.
* Al enviar el formulario, se crea el objeto correspondiente y se llama a `onCrear...` para actualizar la lista en el componente padre.

## Ver la aplicación en línea

[Mi CDN - Aplicación React](https://d59womjx74fk6.cloudfront.net/index.html)
