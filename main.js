const getImagen = async () => {

    try {
        const apiKey = 'BWzO33c6n5Uf2dfUCgDyRvOFuD6HZe0k';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

        return url
    }
    catch (error) {
        console.error(error);
    }

}

getImagen().then(console.log);

console.log('esto es instantaneo');






/* const apiKey = 'A5frEK1f7UGHVGJYh3Z1eFmYUcB7GAFa';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then((respuesta) => respuesta.json() )
    .then(({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        console.log(url)
    }).catch((err) => {
        console.warn(err)
    }); */
















































/* import { getHeroeById } from "./src/functions/functionsGet";

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const res = getHeroeById(id);
            if(res){
                resolve(res);
            }else{
                reject(id)
            }
        }, 3000)
    });
}

getHeroeByIdAsync(3)
    .then((heroe) => {
        console.log(heroe);
    })
    .catch((err) => {
        console.error(`No se ha encontrado el heroe con id ${err}`)
    }) */































/* const message = 'Esto se ejecuta al instante';

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('Se ha ejecutado después de 2 segundos');

        resolve('Se ha ejecutado correctamente la promesa después de dos segundos');
        //reject('Error al ejecutar la promesa');
    }, 2000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((err) => {
    console.error(err);
});



console.log(message); */

















/* const users = [
    {
        nombre: "Fernando Escobar",
        email: "prueba@prueba.com",
        cuenta: 1,
        password: "5432",
        saldo: 300,
        log: [
            {
                fecha: new Date(),
                monto: 100,
                type: "deposito"
            },
            {
                fecha: new Date("2022-10-27T00:38:50.932Z"),
                monto: 200,
                type: "deposito"
            },
        ]    
    },
    {
        nombre: "Erika Galindo",
        email: "prueba2@prueba.com",
        cuenta: 2,
        password: "1234",
        saldo: 1000,
        log: [
            {
                fecha: new Date(),
                monto: 900,
                type: "deposito"
            },
            {
                fecha: new Date("2022-10-27T00:38:50.932Z"),
                monto: 200,
                type: "deposito"
            },
            {
                fecha: new Date("2022-10-26T13:25:50.932Z"),
                monto: -100,
                type: "retiro"
            }
        ]
    }
]

users.find((usuario) => {
    if(usuario.email === "prueba2@prueba.com" && usuario.password === "12345"){
        console.log(usuario)
    }else{
        console.log('Usuario no encontrado')
    }
}); */

/* const newUsers = users.map(({ password, email }) => {
    return {password: password, email: email}
}); */



/* console.log(users) */



/* const frutas = [
    'Naranja', // 0  
    'Manzana', // 1  
    'Pera',    // 2  
    'Sandia',  // 3  
    'Kiwi', 
] 

console.table('perro',array) */

//  variable iteradora condición 
/* for(let i = 0; i < array.length; i++ ){
    console.log(array[i])
    let fruta = array[i]
    //debugger
} */


/* frutas.forEach(elemento => {
    console.log(elemento)
}) */





//console.log(persona.saldo)

















//Condicionales = Es estructura de control que nos permite 
//validar una condición
// Operadores relacionales >  <  >=  <=  ===  !==

// Operadores lógicos && = AND - || = OR - ! = Negación
/* let numero = 8
let numero2 = 3
let numero3 = 10

console.log( '2' === 2 )

if(numero3 > numero2 || numero3 < numero){
    //que queremos hacer si se cumple la condición
    console.log('si se cumple')
}
else {
    //que queremos hacer si se cumple la condición
    console.log('no se cumple')
} */

// String Number Null Undefined Bolean

/* let numero = 10;
let numero2 = 100;

let resultado = numero2 ** numero;


console.log(resultado) */






/* var texto = 'Hola fuera del scope'

{

    let numero = 2;
    var texto = 'Hola desde el scope'
    console.log('dentro scope',numero);
    console.log(texto);

}

console.log('fuera scope',numero);
console.log(texto);

const anio = 2022;

anio = 2023; */











/* import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */
