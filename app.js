//creamos la lista donde agregamos a los amigos secretos y las variables que contenga los nombres para ingresar en el array
let listaAmigosSecretos = [];
let nombreAmigo= "";
let textoAmigos= "";
let amigoSecreto="";
let clave=0;

//funcion que agrega amigos a la lista de amigos secretos
function agregarAmigo(){
    // obtenemos el nombre del boto amigo
    let nombreAmigo= document.getElementById("amigo").value;
    // si el nombre nombre del amigo es vacio envia el mensaje ingresar un nombre valido
    if (nombreAmigo == " "){
        alert("Folrmato de Nombre invalido reintentar");
    }else{
        //si el nombre ya esta incluido en la lista solicitar otro nombre
        if (listaAmigosSecretos.includes(nombreAmigo)){
         alert(`El nombre ${nombreAmigo} ya fue ingresado`);
        } else{
         let clave=1;
        //agregamos el nombre a la lista de amigos secretos 
         listaAmigosSecretos.push(nombreAmigo)
         asignarTextoElemnto("listaAmigos",nombreAmigo,clave);
         limpiaCaja()
         console.log(listaAmigosSecretos)
        }

    }
    
    return;
}

//funcion Sortea el Amigo Secreto

function sortearAmigo(){
    let clave=2;
    // tomamos la lista con los nombre y elegimos un nombre aleatorio y mostramos el resultado
     let numeroAleatorio =  Math.floor(Math.random()*parseInt(listaAmigosSecretos.length));
     let amigoSecreto = listaAmigosSecretos[numeroAleatorio];
     asignarTextoElemnto("resultado",amigoSecreto,clave);
    return;
}



//funcion para almacenar el nombre
function asignarTextoElemnto(elemnto, texto, decide){
        // creamos el texto con el nombre para expresar en html  
         let textoAmigos = "<li>" + texto + "<li>";
        // creamos la lista de los amigos
         let lista= document.getElementById(elemnto);
         //decide con respetco al valor de clave si acumula texto o solo muestra el reciente
         if (decide == 1){
            lista.innerHTML += textoAmigos;
         }else{
            lista.innerHTML = textoAmigos;
         }
         
}




//Esta funcion limpia la caja donde se agrega el numero del usuario 
function limpiaCaja(){
     document.querySelector("#amigo").value = "";
      return;

}


