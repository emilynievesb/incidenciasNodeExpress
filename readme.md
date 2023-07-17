# API con Endpoints

Este es un repositorio de una API utilizando Node.js, Express, MySQL2, dotenv y YUP. También se utiliza nodemon para facilitar el reinicio automático del servidor durante el desarrollo.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js: https://nodejs.org
- MySQL: https://www.mysql.com

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"host":"localhost", "user":"root","database": NOMBRE_DB,"password":"", "port":3306}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.sql` que esta ubicado en la carpeta padre.

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Endpoints

Para este proyecto se desarrollaron los siguiente endpoints diseñados para manipular la base de datos esperando los parametros por el body de la petición.

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Agregar insidencias

    - URL: `http://127.20.30.1:5005/api/post/agregarInsidencia`
    - Método: `POST`
    - Datos de entrada (body):
      ```
      {
            "trainer":3,
            "idEquipo":30,
            "idCategoriaInsidencia":1,
            "idTipoInsidencia":3,
            "descripcion":"Equipo dañado",
            "fechaInsidencia":"2023-06-10"
      }
      ```
    - Datos de salida:

            "Insidencia agregada con éxito"

1.  Agregar equipos

    - URL: `http://127.20.30.1:5005/api/post/agregarEquipo`
    - Método: `POST`
    - Datos de entrada (body):
      ```
      {
          "idTipoEquipo":3,
          "serialEquipo":"TCCO22",
          "idSala":4
      }
      ```
    - Datos de salida:

            "Equipo agregado con éxito"

1.  Agregar trainers

    - URL: `http://127.20.30.1:5005/api/post/agregarEquipo`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "nombre":"Juan",
            "emailPersonal":"juan@gmail.com",
            "emailCorporativo":"juan1@gmail.com",
            "telefonoMovil":3164444666,
            "telfonoResidencia":6076666655,
            "telefonoEmpresa":6077766655,
            "telefonoMovilEmpresa":3164444555
        }
      ```

    - Datos de salida:

            "Trainer agregado con éxito"

## Validación de datos (DTO)

- Se realizó la validación de datos a través de la librería `YUP`. La librería Yup permite definir un esquema que describe la forma en que los datos deben ser validados.

- Al utilizar Yup para los DTO, puedes definir un esquema que especifique las reglas de validación que se deben aplicar a cada campo del DTO. Estas reglas pueden incluir validaciones como requerido, tipo de dato, longitud mínima o máxima, formato específico, entre otros.

- Un ejemplo de uno de los esquemas que se pueden crear es este:

  ```
  const addProductValidator = async (req, res, next) => {
    try {
      const productSchema = object({
        nombre: string()
          .strict()
          .matches(/^[a-z A-Z]+$/, "Is not in correct format")
          .required(),
        descripcion: string().optional(),
        estado: number().max(1).required(),
        created_by: number().nullable().optional(),
        update_by: number().nullable().optional(),
        created_at: date().nullable().optional(),
        updated_at: date().nullable().optional(),
        deleted_at: date().nullable().optional(),
      });
      await productSchema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.errors });
    }
  };
  ```

- Se creó un middleware, donde se valida la composición de los datos dentro de la request. Se instancia un objeto que describe el esquema de la request y se valida el body según lo escrito en el esquema. El `validate()` es una promesa que generas una excepción en caso de no pasar la validación, y dentro del catch se hace la validación de excepciones, respondiendo un status `400` y un mensaje de error. Si la request sale OK, se ejecuta un `next`, que le avisa a express de debe ejecutar el siguiente middleware (en este caso, el endpoint o servicio que genera y responde a una consulta).

#### Autora: Emily Nieves
