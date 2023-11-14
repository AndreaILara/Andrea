// Vamos a ver cómo funcionan los módulos a modo demostrativo.

// Para ello vamos a empezar creando una nueva constante en nuestro fichero:

export const person = {
  name: "Stephen",
  surname: "Strange",
};

export const sayHello = () => {
  console.log("Hello!");
};

const DEV_LAN = "JavaScript";

export default DEV_LAN;
// Esta constante existe dentro de nuestro archivo modules.js, pero si queremos utilizarlo, por ejemplo, en main.js tendremos que exportarlo de su propio archivo.



// // Para realizar esta exportación le añadiremos la palabra reservada export a dicha constante.
// De esta manera, esta constante ya podrá “salir” de su archivo modules.js.
// Ahora que tenemos lista nuestra constante, vamos a volver a el fichero main.js e importar dicha constante con destructuring (ya que gracias a estos métodos podemos manejar nuestros ficheros como si fueran objetos):