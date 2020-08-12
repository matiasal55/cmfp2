# cmfp2

<h1>[Personal] Proyecto "Centro Municipal de Formación Profesional N°2"</h1>
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
  
  04/08/2020 - 06/08/2020: Diseño de prototipo (wireframe) en Adobe XD.
  07/08/2020: Configuración de Gulp. Inicio de desarrollo en Pug y Sass. Home a terminar.
  10/08/2020: Estructura básica terminada, con estilos. Falta agregar más cursos con sus detalles y fotos.
  11/08/2020: Validación de formulario de contacto terminada. Se trató de hacer una validación más simple. A comparación de mi anterior proyecto donde validaba cada campo por separado, en esta ocasión se validaron los campos a través de forEach. Se creo un array booleano de estados. El formulario no está completo hasta que en el array no haya ningún estado false.
  11/08/2020: Se realizó el modal que confirma que se envió el mensaje correctamente. En esa parte falta el action que enviará el formulario. Después se hizo el efecto que el menú cambia de color en el scroll. Responsive terminado. Se hizo la página de Noticias pero no se profundizó más allá ya que faltan Noticias y considero que esa sección lleva otro tipo de desarrollo el cual por el momento no se. Queda por hacer: diseño y backend de Inscripción y Area de Alumnos, sección Noticias, envío de mensaje.
