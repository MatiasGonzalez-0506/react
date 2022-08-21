import React from "react";

const Tutoria = (props) => {
  return (
    <div>
      <h1>tutoria</h1>
      <h2>para crear un proyecto React</h2>
      <p>npx create-react-app nombre de la app</p>
      <br />
      <h2>Componentes</h2>
      <ul>
        <li>
          para crear un componente primero de crea la carpeta components al
          interior de src
        </li>
        <li>
          luego se crea el archivo con extension jsx este se nombra con la
          primera letra mayuscula ej Tutoria.jsx
        </li>
        <li>
          luego se exportan la funcion que este en el componente ej nombre de la
          funcion Tutoria se exporta como export default Tutoria
        </li>
        <li>
          para finalizar se importa en App.js ej import Tutoria from
          "./components/Tutoria"; (nota: los componentes se pueden importar
          entre si)
        </li>
      </ul>
      <br />
      <h2>agregando clases a las etiquetas</h2>
      <p>
        para agregar una clase a una etiqueta en react se usa la palabra
        className ej className="App-header"
      </p>
      <p>
        si queremos manipular los estilos basta con llamar a la clase en el
        archivo index.css
      </p>
      <br />
      <h2>props</h2>
      <p>
        los props se pueden pasar como un parametro a mi componente para luego
        llamarlos en su interior y hacer logica con este dato ej {props.nombre}
      </p>
      <br />
      <h2>aplicando destructuring</h2>
      <p>
        La desestructuración es una característica muy conveniente al
        desarrollar con javascript, es una expresión que nos permite
        desempaquetar valores de arrays u objetos en grupos de variables,
        permitiéndonos simplificar y crear código más legible.
      </p>
      <p>siguiendo el ejemplo anterior aplicamos destruturing</p>
      <br />
      <h2>aplicando render condicional</h2>
      <p>
        En React cuando hablamos de render condicional nos referimos a mostrar
        información si se cumple cierta condición
      </p>
      {/* valor a comprobar ? codigo a ejecutar si se cumple la condicion : codigo a ejecutar si no se cumple la condicion */}
      {/* <p className={props.nombre == 'pedro' ? alert('coincide') : alert('no coincide')}>hola</p> */}
      <br />
      <h2>importando bootstrap</h2>
      <p>que es npm </p>
      <p>npm es el sistema de gestión de paquetes por defecto para Node.js. </p>
      <p>comandos de paquetes npm</p>
      <ul>
        <li>npm init: Inicializar el proyecto crea el archivo package.json</li>
        <li>npm install o tbn (i) nombreDelPaquete :Instalar un paquete</li>
        <li>
          npm install o tbn (i) nombreDelPaquete@version :Instalar un paquete
          con una version especifica
        </li>
        <li>
          npm install nombreDelPaquete --save-dev :Instalar el paquete y
          modifica el archivo package.json agregando la librería en las
          dependencias solo necesarias para desarrollo
        </li>
        <li>
          npm install : instala todas las dependencias declaradas en
          package.json Esto es habitual, cuando se descargan proyectos o
          aplicaciones de github
        </li>
        <li>npm uninstall nombreDelPaquete :desinstala un paquete</li>
      </ul>

      <br />
      <h2>para importar bootstrap a nuestro proyecto</h2>
      <ul>
        <li>paso 1- npm install react-bootstrap@next bootstrap@5.0.2</li>
        <li>paso 2- importamos bootstrap en nuestro componente padre App.js</li>
        <button type="button" className="btn btn-primary mt-5 mb-5">
          Botón de bootstrap
        </button>
        <li>
          nota tambien se puede usar el cdn aplicando en el html el link
          correspondiente
        </li>
      </ul>
      <div className="d-flex justify-content-center">
        <div className="card mt-5 mb-5" style={{ width: "18rem" }}>
          <img src={props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <p>
        tambien se pueden usar los componentes por separado para eso se importan
        los componentes en el app.js y luego se van llamando segun necesidad
        para ver los componentes revisar documentacion de react-bootstrap en
        https://react-bootstrap.github.io/
      </p>
    </div>
  );
};

export default Tutoria;
