// PAROLA CORTA SNACK 

// var primaParola=prompt("inserisci una parola");
// var secondaParola=prompt("inserisci un'altra parola");

// if(primaParola.length>secondaParola.length)
//     console.log(secondaParola + " " + primaParola);
// else if(primaParola.length == secondaParola.length){
//     console.log(primaParola + " " + secondaParola + " " + "(le due parola hanno la stessa lunghezza!!!");
// }
// else{
//     console.log(primaParola + " " + secondaParola);
// }


// SOMMA DEI NUMERI INSERITI 

// let sommaNumeri=0;

// for(var i=0;i<10;i++){
//     sommaNumeri+=parseInt(prompt("inserisci un numero"));
// }

// alert("La somma dei numeri inseriti è: " + sommaNumeri);



// LISTA INVITATI 


// const listaInvitati = ["Manasse", "Giovanni", "Alberto", "Francesco", "Luca", "Andrea", "Pasquale", "Laura"];
// const nomeOspite = prompt("Nominativo: ");

// let nomePresente = false;

// for(var i=0;i<listaInvitati.length;i++){
//     if(nomeOspite.toLocaleLowerCase()==listaInvitati[i].toLocaleLowerCase()){
//         alert("Prego può entrare");
//         nomePresente=true;
//         break;
//     }
// }

// if(!nomePresente){
//     alert("Mi dispiace il suo nome non è sulla lista");
// }



// NUMERI DISPARI NELL'ARRAY 

// const vettoreDispari = [];
// let numero;
// let index=0;

// for(let i=0;i<6;i++){
//     numero = parseInt(prompt("Inserisci un numero:"));
//     if(numero%2){
//         vettoreDispari[index] = numero;
//         index++;
//     }
// }

// for(let i=0;i<index;i++){
//     alert(vettoreDispari[i]);
// }


// SOMMA E MEDIA DEI PRIMI 10 NUMERI NATURALI 

// let somma=0;
// let media;
// for(let i=1;i<11;i++){
//     somma+=i;
// }

// media=somma/10;

// document.getElementById("somma_10_numeri").innerHTML="La somma dei primi dieci numeri è: " + somma;
// document.getElementById("media_10_numeri").innerHTML="La media dei primi dieci numeri è: " + media;


// PAROLE NON IN MAIUSCOLO 

// let listaParole = [];

// for(let i=0;i<5;i++){
//     let parola=prompt("Inserisci una parola: ");

//     if(parola===parola.toUpperCase()){
//         alert("è tutto maiuscolo");
//     }else{
//         listaParole.push(parola);
//     }
// }

// console.log(listaParole);




// SOMMA 5 NUMERI INSERITI CON IL FOR ED IL WHILE 

// let somma=0;

// // for(let i=0;i<5;i++){
// //     somma+=parseInt(prompt("Inserisci un numero:"));
// // }

// let i=0;
// let numeroInserito;
// let a = document.getElementsByClassName("numeri_inseriti");

// while(i<5){
//     numeroInserito=parseInt(prompt("Inserisci un numero: "));
//     a[i].textContent = numeroInserito
//     somma+=numeroInserito;
//     i++;
// }

// document.getElementById("somma").innerHTML = "La somma dei numeri inseriti è: " + somma;


// LISTA CASUALE 

// let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
// let listaCasuale = [];
// let a = document.getElementsByClassName("nome_random");

// for(let i=0;i<8;i++){
//     listaCasuale[i] = listaNomi[Math.floor(Math.random() * listaNomi.length)] + " " + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

//     // let numeroNome=listaNomi[Math.floor(Math.random() * listaNomi.length)];
//     // let numeroCognome=listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
//     // listaCasuale[i]=numeroNome + " " + numeroCognome;
// }

// listaCasuale.sort();

// for(let i=0;i<listaCasuale.length;i++){
//     a[i].textContent=listaCasuale[i];
// }


// COPIA NELL'ARRAY PIù CORTO 


// let vet1=["francesco", "pachi", "mana", "luca", "laura", "andrea"];
// let vet2=["donatello", "giallo", "blu", "nero", "rosso", "viola", "marrone", "giovanna"];


// for(let i=0; i<vet2.length - vet1.length; i++){
//     vet1.push(vet2[Math.floor(Math.random() * vet2.length)]);
// }

// for(let i=0;i<vet1.length;i++){
//     document.getElementById("vettore_1").innerHTML += '<li>' + vet1[i] + '</li>';
//     document.getElementById("vettore_2").innerHTML += '<li>' + vet2[i] + '</li>';

// }