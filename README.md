# cmfp2

<h1>[Personal] Proyecto "Centro Municipal de Formación Profesional N°2"</h1>
<h2>Sitio web: <a href="www.matiasal55.github.io/cmfp2" target="_blank">www.matiasal55.github.io/cmfp2</a></h2>
<p> Proyecto de rediseño del sitio web del Centro Municipal de Formación Profesional N°2 Manuel Belgrano de la localidad de Morón, Buenos Aires. En el establecimiento 
hice el curso de Redes Informáticas y Telefonía IP impartido por el profesor Alberto Lopez, con quien terminé mi relación momentanea en excelentes términos. 
El profesor además se encarga de organizar distintos aspectos del lugar, entre ellos su sitio web, cuyo diseño está hecho en base a sus conocimientos personales, 
los cuales son precarios</p>
<p>Esta nueva versión le otorga las bases del diseño actual, siendo más atractiva y con elementos utilizados al día de hoy.</p>
<p>Cabe aclarar que ni él ni nadie de la institución me solicitó el rediseño del sitio, sino que se trata de un proyecto personal para poder seguir sumando un proyecto
a mi portafolios. En caso que se concreten exitosamente todas las fases del sitio se lo ofrecerá a la escuela.</p>

<h3>Fases del proyecto</h3>
<ul>
  <li>Fase 1 Prototipo: Se diseñará el prototipo del sitio en versión web que servirá de guía. Hecho con Adobe XD. El mismo será subido a Behance.<b>ETAPA FINALIZADA</b></li>
  <li>Fase 2 Frontend: Finalizado el prototipo se desarrollará el frontend del sitio web. Herramientas utilizadas:
  <ul>
    <li>Gulp: automatización de tareas.</li>
    <li>Babel: transpilar código EcmaScript 6 a Vanilla Javascript</li>
    <li>Pug: compila y ayuda a modularizar las páginas HTML ahorrando código y tiempo.</li>
    <li>Sass: compila y modulariza los estilos CSS para no repetir código</li>
    <li>BrowserSync: cambios obervados tanto en la pc donde se desarrolla como en un celular u otro dispositivo conectado en la red</li></ul><b>EN DESARROLLO</b></li>
   <li>Fase 3 Backend: Se realizará el sistema de "Area de Alumnos" y de "Inscripción online". Herramientas a definir.</li>
   </ul>
  
  <p>04/08/2020 - 06/08/2020: Diseño de prototipo (wireframe) en Adobe XD.</p>
  <p>07/08/2020: Configuración de Gulp. Inicio de desarrollo en Pug y Sass. Home a terminar.</p>
  <p>10/08/2020: Estructura básica terminada, con estilos. Falta agregar más cursos con sus detalles y fotos.</p>
  <p>11/08/2020: Validación de formulario de contacto terminada. Se trató de hacer una validación más simple. A comparación de mi anterior proyecto donde validaba cada campo por separado, en esta ocasión se validaron los campos a través de forEach. Se creo un array booleano de estados. El formulario no está completo hasta que en el array no haya ningún estado false.</p>
  <p>11/08/2020: Se realizó el modal que confirma que se envió el mensaje correctamente. En esa parte falta el action que enviará el formulario. Después se hizo el efecto que el menú cambia de color en el scroll. Responsive terminado. Se hizo la página de Noticias pero no se profundizó más allá ya que faltan Noticias y considero que esa sección lleva otro tipo de desarrollo el cual por el momento no se. Queda por hacer: diseño y backend de Inscripción y Area de Alumnos, sección Noticias, envío de mensaje, más cursos.</p>
  <p>16/08/2020: Se había realizado un intento de loading page con el mensaje "Cargando" pero online no funcionaba. Así que se borró el efecto pero no los elementos, que permanecen ocultos. Hoy se instaló Webpack para trabajar con módulos en Javascript. Se modularizaron el menú responsive y se hizo un efecto fade en el contenido de las páginas. Y se crearon funciones reutilizables para ahorrar líneas de código. En el menú cuando se oscurece al acceder al menú de Cursos se expande (hay un pequeño problema ya que en esta acción el logo se mueve para arriba). Quedaría por solucionar: imagen de fondo de los cursos (los cursos tienen como imagen predefinida la de telefonía ip, cualquiera sea, y ya que esta se definió a través de un before en el css no encuentro manera de que pueda cambiar conforme al curso), intentar desarrollar la sección Noticias, y desde ya lo mencionado anteriormente (backend, más cursos, envío de mensaje de Contacto).</p>
