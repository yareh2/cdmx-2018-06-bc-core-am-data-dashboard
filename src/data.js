//const contLima = document.getElementById('lima')
//const contMexico = document.getElementById('mexico')
//const contSantiago = document.getElementById('santiago')
//console.log("hola", lugar);
let globalll;
window.onload =  {
  sssss: () =>{
  console.log("hola");
  //traerlima: (sede,lugar) => {
  //contenido.innerHTML =`ddsgdhdhdfh`
  fetch('https://raw.githubusercontent.com/yareh2/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
  .then(res =>res.json())
  .then(data =>{
    //console.log(data[sede].generacion)
       let laboratoria = data
        for(let lab in data){
        //  navtheme.innerHTML += "  "+lab +" - ";
        //Qué hace globalall?
        globalll = data;
        console.log(data)
           navtheme.innerHTML += '<a class="nav-link active" onclick="window.datadasbord.computeStudentsStats('+lab+')" href="#" id="'+lab+'">'+lab+'</a>'
        }
  })
}}

window.datadasbord = {
computeStudentsStats: (lab) => {
  console.log(lab)

  navgeneration.innerHTML =" ";
  console.log("prueba" + lab.text);
  for(let gene in globalll[lab.text].generacion){
    console.log( globalll[lab.text].generacion);
    navgeneration.innerHTML += " \n "+gene +" ==== ";
    console.log(globalll[lab.text].generacion[gene].estudiantes);

      for(let estu in globalll[lab.text].generacion[gene].estudiantes){
        navgeneration.innerHTML += globalll[lab.text].generacion[gene].estudiantes[estu].nombre +" - ";
      }


  }

}
};

window.onload.sssss();

//window.datadasbord.computeStudentsStats();

/*
#### 1) `computeStudentsStats(laboratoria)`

Esta función es la responsable de "crear" la lista de estudiantes
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
estudiantes que se encuentra dentro de `laboratoria.json`.

La función debe devolver un nuevo arreglo de estudiantes donde cada objeto
de estudiante deberá tener una propiedad con el nombre `stats` y dentro,
sólo los datos requeridos.

##### Argumentos

* `laboratoria`: Objeto obtenido de la data en bruto.

##### Valor de retorno

Un arreglo de objetos `student` con las siguientes propiedades:

* `name`: Nombre respectivo de la estudiante.
* `email`: Correo electrónico de la estudiante.
* `campus`: Sede a la cual la estudiante pertenece.
* `generation`: Generación a la cual la estudiante pertenece.
* `stats`: Un objeto con las siguientes propiedades:
  * `status`: Status para identificar si la estudiante esta por debajo del 60,
  en 90 o superándolo, o dentro de la media en su `completedPercentage`.
  * `completedPercentage`: Número entero entre 0 y 100 que indica el porcentaje
  de completitud general del usuario con respecto a todos los temas asignados.
  * `topics`: Un objeto que incluye como propiedades los temas del programa y cada tema tiene las siguientes propiedades:
    - `completedPercentage`: Número entero entre 0 y 100 que indica el
    porcentaje de completitud general del usuario con respecto al tema
    respectivo.
    - `percentageDuration`: Número entero que indica el porcentaje de tiempo
    invertido según la duración indicada de cada tema, si el resultado son números flotantes deberías redondearlo al entero más cercano. Ejemplo: 78.78 = 79.
    - `subtopics`: Un objeto que incluye como propiedades los subtemas de ese
    tema en particular y cada subtema tiene las siguientes propiedades:
      - `completedPercentage`: Número entero entre 0 y 100 que indica el
      porcentaje de completitud general del usuario con respecto al subtema.
      - `type`: String que indica la modalidad del subtema.
      - `duration`: Número entero que indica el tiempo necesario a invertir
      para completar el subtema.

#### 2) `computeGenerationsStats(laboratoria)`

Esta función es la responsable de "crear" los status de cada generación que
vamos a "pintar" en la pantalla. La idea es "recorrer" el objeto que se
encuentra dentro de la "data".

La función debe devolver un nuevo arreglo de generaciones donde cada objeto
`generation` deberá tener una propiedad con el nombre `average` y dentro el
promedio de `completedPercentage` de todas las estudiantes de la generación.

##### Argumentos

* `laboratoria`: Objeto obtenido de la data en bruto.

##### Valor de retorno

Un arreglo de objetos `generation` con las siguientes propiedades:

* `campus`: Sede a la cual la generación pertenece.
* `generation`: Generación a la cual pertence
* `average`: Promedio del porcentajeCompletado de todas las estudiantes de la generación, si resulta un número flotante debería de ser redondeado al número entero más cercano.
* `count`: Número de estudiantes de la generación.
*/
