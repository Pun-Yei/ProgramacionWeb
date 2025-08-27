!>html:5
    head>title[React Hooks y Formularios]
    body>h1[Uso de Hooks en React]
        p[En este proyecto usamos principalmente dos hooks de React: useState y useEffect.]

        h2[useState]
        p[useState permite crear y manejar el estado de un componente funcional. Se usa para valores que cambian con la interacción del usuario.]
        pre>code[class="language-js"][
const [tareas, setTareas] = useState([...listaTareas]);
setTareas(nuevasTareas) // actualiza el estado y provoca un re-render
        ]

        h2[useEffect]
        p[useEffect permite ejecutar código cuando el componente se monta, se actualiza o se desmonta.]
        pre>code[class="language-js"][
useEffect(() => {
    setTareas([...listaTareas]);
}, [listaTareas]); // se ejecuta cuando cambia listaTareas
        ]

        h2[Resumen del flujo en GridTareas]
        ol>
            li[El estado 'tareas' se inicializa con la lista recibida por props.]
            li[useEffect sincroniza 'tareas' si cambia la lista original.]
            li[Funciones completarTarea y eliminarTarea actualizan el estado llamando a setTareas.]
            li[El render muestra las tareas con botones que disparan esas funciones.]

        h2[Flujo en Formularios (Categoría y Tarea)]
        ul>
            li[useState maneja visibilidad del formulario (showForm) y campos de entrada.]
            li[Al enviar el formulario, se crea el objeto correspondiente y se llama a onCrear... para actualizar la lista en el componente padre.]

        h2[Ver la aplicación en línea]
        p>
            a[href="https://d59womjx74fk6.cloudfront.net/index.html"] [Mi CDN - Aplicación React]
