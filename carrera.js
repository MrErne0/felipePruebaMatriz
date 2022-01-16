/*
var elementos=["Carbono","Oxígeno","Hierro"];  
var simbolo=["C","O","Fe"];  
var num_atomico=[6,8,26];  
var tabla_per=[elementos,simbolo,num_atomico];  
console.log("El símbolo del ",elementos[2]," es: ",tabla_per[1][2]);  
console.log(tabla_per);
*/

//Ejemplo de doble arreglo
/*
var tabla_per=[["Carbono","Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]]; 
console.log(tabla_per);
console.log(`El ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su número atómico es ${tabla_per[2][0]}`);


var tabla_per=[[["Sofia","Aguilar"],"Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];
console.log(tabla_per);
console.log(tabla_per[0][0][1]);
*/
/*Declara un array llamado carreritas con los siguientes valores: "Lucia", "Roberto", "María", "Andrea", "José" (este es el orden de sus posiciones dentro de una carrera). Deberás imprimir la clasificación actual.
La carrera continua y se van modificando las posiciones:
-Andrea adeltanta a Maria.
-José es descalificado de la carrera.
-Detrás de Lucia y antes de roberto se clasifican tres nuevos corredores: Cristobal, Fernando y Armando.
-Hay un nuevo concursante que toma el primer puesto: Federico.
Imprime la clasificación actual con las posiciones que se han modificado. 
nombres.pop();
*/
var carreritas = ["Lucia", "Roberto", "María", "Andrea", "José"];
console.log(carreritas);
carreritas.splice(2,3);
carreritas.push("Andrea","María","José");
console.log(carreritas);
carreritas.pop();
console.log(carreritas);
carreritas.splice(1,4);
carreritas.push("Cristobal","Fernando","Armando","Roberto","Andrea","María");
console.log(carreritas);
carreritas.unshift("Federico");
console.log(carreritas);
console.log(`En primero lugar ${carreritas[0]} en segundo lugar ${carreritas[1]} en tercer lugar ${carreritas[2]} en cuarto lugar ${carreritas[3]} en quinto lugar ${carreritas[4]} en sexto lugar ${carreritas[5]} en septimo lugar ${carreritas[6]} y al último ${carreritas[7]}`);



