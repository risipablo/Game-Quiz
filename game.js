

    const questions = [
        {
            question : " ¿Que devuelve la salida por consola de esta operación? ",
            image:"./Imagenes/filter.jpg",
            answers: [
                {text: "3  6", correct: true},
                {text: "4  7", correct: false},
                {text: "6  3", correct: false},
            ]
        },
        {
            question : "¿Cuál es la propiedad correcta?",
            image:"./Imagenes/css.jpg",
            answers: [
                {text: "display:flex. justify-content: space-around", correct: false},
                {text: "display:block. justify-content: space-between ", correct: false},
                {text: "display:flex. justify-content: space-between", correct: true},
            ]
        },
        {
            question : " ¿Que devuelve la salida por consola de esta operación? ",
            image:"./Imagenes/stirng.jpg",
            answers: [
                {text: "424", correct: true},
                {text: "4424.", correct: false},
                {text: "null", correct: false},
            ]
        },
        {
            question : "En esta operacion: console.log('4' + 4 - '2' + 4). ¿Por que el resultado es diferente con respecto a la preguntar anterior?",
            answers: [
                {text: "El resultado es el mismo ", correct: false},
                {text: "Ninguna es correcta", correct: false},
                {text: "El resultado 46 debido que JavaScript maneja los operadores en la expresión y la concatenación de cadenas. ", correct: true},
            ]
        },
        {
            question : "¿Que función cumple UseEffect",
            answers: [
                {text: "Permite crear y manipular referencias a elementos del DOM", correct: false},
                {text: "Se utiliza para manejar efectos secundarios en componentes funcionales, como solicitudes de red, suscripciones a eventos o actualizaciones de estado asíncronas", correct: true},
                {text: "Ninguna es correcta", correct: false},
            ]
        },
        {
            question : "¿ Que función cumple Split y Every?",
            image:"./Imagenes/split.jpg",
            answers: [
                {text: "Split es una variable temporal que representa cada palabra. Every verifica que todas las palabras cumplan con algunas condiciones", correct: false},
                {text: "Split divide la palabra en arreglo individuales. Every verifica que todas las palabras cumplan con algunas condiciones", correct: true},
                {text: "Split divide la palabra en arreglo individuales. Every transforma las palabras a minusculas", correct: false},
            ]
        },
        {
            question : "¿Que devuelve la salida por consola de esta operación?",
            image:"./Imagenes/reduce.jpg",
            answers: [
                {text: "12", correct: true},
                {text: "NaN", correct: false},
                {text: "24", correct: false},
            ]
        },
        {
            question : "La salida es Undefined. ¿Por que?",
            image:"./Imagenes/function.jpg",
            answers: [
                {text: "Por que el console.log esta dentro de la función. ", correct: false},
                {text: "Por que la variable total es declarada pero no inicializada.", correct: true},
                {text: "Es falso. La salida es 20", correct: false},
            ]
        },
        {
            question : "¿Que devuelve por consola?",
            image: "./Imagenes/push.jpg",
            answers: [
                {text: "manzana,pera,naranja", correct: false},
                {text: "manzana 1, pera 2, banana 3 , naranja 4", correct: false},
                {text: "manzana 0, pera 1, banana 2 , naranja 3", correct: true},
            ]
        },
        {
            question : "¿Que componentes le falta a esta función?",
            image:"./Imagenes/1.jpg",
            answers: [
                {text: "Ninguno. Compila igual", correct: false},
                {text: "UseContext (cartContext). useState(0)", correct: false},
                {text: "UseContext (cartContext). useState(1)", correct: true},
            ]
        },
        {
            question : "¿ Para que sirve la función de MAP?",
            answers: [
                {text: "Recorrer el array para modificar los elementos dentro y devolver diferentes valores", correct: true},
                {text: "Retorna la primera coincidencia que se busca", correct: false},
                {text: "Recorrer el array para modificar los elementos dentro y devolver solo los dos primeros valores", correct: false},
            ]
        },
        {
            question : "El resultado de esta operación es: ",
            image:"./Imagenes/for.jpg",
            answers: [
                {text: "44", correct: false},
                {text: "80640", correct: true},
                {text: "40320", correct: false},
            ]
        },
        {
            question : "Seleccione la opción correcta",
            image:"./Imagenes/for.jpg",
            answers: [
                {text: "La salida es 80640 por que suma cada elemento del array para despues elevarlo por la variable (total) ", correct: false},
                {text: "La salida es 80640 por que realiza un bucle sobre el array y multiplica cada elemento del array por la variable (total) ", correct: true},
            ]
        },
        {
            question : "¿Para que sirve react-router-dom?",
            answers: [
                {text: "Permite la sincronización de un archivo .json", correct: false},
                {text: "Permite definir rutas de navegación, enrutamiento anidado,control de historial del navegador,navegación", correct: true},
                {text: "Permite evitar que se vuelvan a crear un elemento en cada renderización", correct: false},
            ]
        },
        {
            question : "¿Como declaramos un ID en Javascript?",
            answers: [
                {text: "getElementByClassName", correct: false},
                {text: "getId", correct: false},
                {text: "getElementById", correct: true},
            ]
        },
        {
            question : "¿Que es un commit?",
            answers: [
                {text: "o un conjunto de cambios en el repositorio de Git", correct: true},
                {text: "Verifica los cambios a ficheros nuevos del proyecto", correct: false},
                {text: "Un expresion que nos permite saber cuando un elemento cumple ciertas condiciones ", correct: false},
            ]
        },
        {
            question : "¿Es correcta esta función?",
            image:"./Imagenes/if.jpg",
            answers: [
                {text: "Si, es un operador ternario de find", correct: false},
                {text: "No, es un mal uso del if..else", correct: false},
                {text: "Si, es un operador ternario del if..else", correct: true},
            ]
        },
        {
            question : "¿Que función cumple un Storage?",
            answers: [
                {text: "Sirve para enviar y recibir datos entre sevido y un cliente", correct: false},
                {text: "Almacener variables y datos de forma persistente en el navegador", correct: true},
                {text: "Cambiar el order de los elementos de un array", correct: false},
            ]
        },
    ]

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById ("backButton")
    

    let score = 0;
    let currentQuestion = 0;



    // Inicio de juego
    function StartGame() {
        currentQuestion = 0;
        score = 0;
        nextButton.innerHTML = "Siguiente pregunta >>>"
        showQuestion();
    }


    // Mostrar preguntas
    function showQuestion() {
        resetState();
        let preguntaactual = questions[currentQuestion];
        let preguntasNum = currentQuestion + 1; // sumar preguntas 
        questionElement.innerHTML = preguntasNum + " . " + preguntaactual.question;

        // si la pregunta contiene imagen
        if (preguntaactual.image) {
            const imageElement = document.createElement ("img");
            imageElement.src = preguntaactual.image;
            imageElement.classList.add("question-image");
            questionElement.appendChild(imageElement)
        }

        // recorre las respuestas de las preguntas
        preguntaactual.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);

            if(answer.correct){
                button.dataset.correct = answer.correct;
            } 
            button.addEventListener("click", selectAnswer);
        });
    }

    // resetear estados
    function resetState() {
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild)
        }
    }

    // seleccionar respuesta
    function selectAnswer(e){
        const botonselec = e.target;
        const correcto = botonselec.dataset.correct === "true";
        if (correcto){
            botonselec.classList.add("correct")
            score ++;
        } else {
            botonselec.classList.add("incorrect")
        }
        // deshabilitar los botones
        Array.from(answerButton.children).forEach(button => {
            if (button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled = true;
        })
        nextButton.style.display = "block"
        backButton.style.display = "none"
    }

    // mostrar resultado
    function showScore() {
        resetState();
        let mensaje = "";
        let imagesrc = "";

        if ( score >= 18) {
            mensaje = "Resultado perfecto. Sigue asi 💪";
        } else if (score >= 12){
            mensaje = "Es un buen resultado. Vamos por más  "
        } else if ( score <= 11 || score <= 6) {
            mensaje = " No es un buen resultado, sigue desarrollandote un poco más y prueba otra vez."
        } else {
            mensaje = " Mejor sigue estudiando 🤕 "
        }

        questionElement.innerHTML = `tu resultado es de ${score}. ${mensaje}`
        nextButton.innerHTML = "¿Jugar otra vez?";
        nextButton.style.display = "block";

        backButton.innerHTML = "Volver al inicio";
        backButton.style.display = "block";

        backButton.addEventListener("click", () => {
            welcomeDiv.style.display = "block";
            sectionData.style.display = "block";
            appDiv.style.display = "none";
        })

        const imagenRe = document.createElement("img");
        imagenRe.src = imagesrc;
        imagenRe.classList.add ("score-image");
        questionElement.appendChild(imagenRe)
    }

    // siguiente pregunta
    function NextButton() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestion < questions.length) {
            NextButton();
        } else {
            StartGame();
        }
    });
    


    StartGame();



    // condicion de empezar el juego
    const startButton = document.getElementById("startButton");
    const welcomeDiv = document.querySelector(".welcome");
    const appDiv = document.querySelector(".app");
    const edad = document.getElementById("input");
    const sectionData = document.querySelector(".data");

    startButton.addEventListener("click", () =>{
            if (edad.value > 18) {
                welcomeDiv.style.display = "none"
                sectionData.style.display="none";
                appDiv.style.display = "block";
                StartGame();
            } else {
                welcomeDiv.innerHTML = `No tienes la edad correspondiente para jugar. Seleccione en "volver" para ir al Inicio`;
                const notReadyContent = document.getElementById("notReadyContent");
                sectionData.style.display = "none";
                notReadyContent.style.display = "block";
            }
        }
    ) 
