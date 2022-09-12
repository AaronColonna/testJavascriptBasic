/* 

VARIABLES Y OPERADORES

    1.- ¿Que es una variable y para que sirve?
        
        Es un espacio reservado en la memoria que almcenada datos determinados, asi podemos nombrarla y usarla cuando sea necesario.

    2.- ¿Cuál es la diferencia entre declarar e inicializar una variable?
        
        Declarar es solo indicar que una variable tendrá determinado nombre, pero sin definir aún su valor.
        Inicializar la variable es darle valor.

    3.- ¿Cuál es la diferencia entre sumar números y concatenar strings?

        Sumar números es una operacion aritmetica.
        Concatenar string es la union de caracteres.

    4.- ¿Cuál operador me permite sumar o concatenar?

        +

    5.- Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
        
        Nombre = string
        Apellido = string
        Nombre de usuario en Platzi = string
        Edad = number
        Correo electrónico = string
        Mayor de edad = booblean
        Dinero ahorrado = number
        Deudas = number

    6.-  Traduce a código JavaScript las variables del ejemplo anterior:*/
        let nombre = "Aaron";
        let apellido = "Colonna";
        let nombrePlatzi = "AaronColonna";
        let edad = 25;
        let correoElectronico = "colonna.jimenez@gmail.com"
        let mayorDeEdad = edad >= 18;
        let dineroAhorrado = 10000000;
        let deudas = 6000000;

    /* 
    7.- Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
        Nombre completo (nombre y apellido)
        Dinero real (dinero ahorrado menos deudas)*/
        let nombreCompleto = nombre + apellido;
        let dineroReal = dineroAhorrado - deudas;

/* 
FUNCIONES 

    1.- ¿Qué es una función?

        Son procedimientos o tareas

    2.- ¿Cuándo me sirve usar una función en mi código?

        Cuando se debe realizar una misma tarea o procedimiento en el codigo.

    3.- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

        Parametros son los datos o valores o variables que recibira la funcion, se establece en la declaracion de la funcion.

        Argumentos son los datos o valores o variables que se envian a la funcion, se establece cuando se llama a la funcion.

    4.- Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

        const name = "Juan David";
        const lastname = "Castro Gallego";
        const completeName = name + lastname;
        const nickname = "juandc";

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/
        
        function miSaludo(name,lastname,nickname){
            
            let completeName = name + " " + lastname;
             
            console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname);
        }
        
        miSaludo("Aaron","Colonna","aaroncolonna");

/*
CONDICIONALES

    1.- ¿Qué es un condicional?
        
        Operacion que valida si algo es verdadero o falso para ejecutar una accion.

    2.- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
        
        If Else
        Operador ternario
        Switch

    3.- ¿Puedo combinar funciones y condicionales?

        Si

    4.- Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

        const tipoDeSuscripcion = "Basic";

        switch (tipoDeSuscripcion) {
        case "Free":
            console.log("Solo puedes tomar los cursos gratis");
            break;
        case "Basic":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            break;
        case "Expert":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            break;
        case "ExpertPlus":
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            break;
        } */

        const tipoDeSuscripcion = "Basic";

        if (tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }
        else if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
        else if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
        else{
            console.log()
        }

    /*
    5.- Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).*/

        if (tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }
        if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
        if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }

/* 
CICLOS

    1.- ¿Qué es un ciclo?

        Una tarea que se cumple y repite siempre que la condicion sea verdadera.

    2.- ¿Qué tipos de ciclos existen en JavaScript?

        For
        While

    3.- ¿Qué es un ciclo infinito y por qué es un problema?

        Es el ciclo que no tiene la condicion que lo convierte en falso que lo convierte en un problema porque su ejecucion no termina.
    
    4.- ¿Puedo mezclar ciclos y condicionales?

        Sí

    5.- Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
        for (let i = 0; i < 5; i++) {
            console.log("El valor de i es: " + i);
        }

        for (let i = 10; i >= 2; i--) {
            console.log("El valor de i es: " + i);
        } */

        let i = 0;

        while (i < 5){
            console.log("El valor de i es: " + i);
            i = i + 1;
        }

        let x = 10;

        while (x >= 2){
            console.log("El valor de x es: " + x);
            x = x - 1;
        }
    /*
    6.- Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.*/
    let respuesta = 0;
    
    while (respuesta != 4){
        
        let respuestaUsuario = prompt("¿cuánto es 2 + 2?")
        
        if(respuestaUsuario == 4){
            respuesta = 4;
            alert("Felicitaciones");
        }
        else{
            alert("Volvamos a empezar");
        }
    }

/*
LISTAS

1.- ¿Qué es un array?

    Es una estructura de datos tipo objeto cuyo valor guarda más valores. También, se puede entender como una lista de datos que guarda ciertos valores.

2.- ¿Qué es un objeto?

    Es una estructura de datos tipo objeto que almacena una colección de datos por clave y su valor.

3.- ¿Cuándo es mejor usar objetos o arrays?

    Es mejor usar objetos cuando el conjunto de datos de distintos tipos, ya que este permite la busqueda por palabras claves o valor. Mientras que usaremos arrays cuando los datos correspondan al mismo tipo y solo nos interese el orden de almacenamiento.

4.- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? 

    Sí. */

/*
5.- Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/

    function primerElemento(cualquierArray){
        console.log(cualquierArray[0])
    }

    primerElemento([78,8,7,6,5,4,3,2]);

/*
6.- Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*/

    let cualquierArray = ["Aaron","Manuela","otro"]

    for (let i = 0; i <cualquierArray.length; i++){
        console.log(cualquierArray[i]);
    }

/*
7.- Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*/

    function cualquierObjeto(){
        console.log(objeto.clave1);
        console.log(objeto.clave2);
        console.log(objeto.clave3)
    };

    cualquierObjeto(objeto = {clave1 : "string",clave2 : 1,clave3 : "otroString"});