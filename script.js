"use scrict"


// let imie = "Milena"
// let nazwisko = "Skrzeszewska"
// console.log(imie);
// console.log(`Moje imie to ${imie} a nazwisko ${nazwisko}`);
// if(true){
// console.log(imie);
// }
// if(imie){
//   console.log(nazwisko);
// }

// let a = 2;
// let b = 3;
// let sum = a+b;
// console.log(sum);

// let tablica =[1,2,3];
// console.log(tablica);

// // const osoba ={
// //   imie:"Jan",
// //   nazwisko:"Kowalski",
// //   wiek: 23
// // }
// // const {imie,nazwisko,wiek} = osoba;
// // function powitanie(imie){
// //   return "witaj," + imie;
// // // }
// // // console.log(powitanie("Ola"));

// // const siema =(imie)=> "witaj,"+ imie;
// // console.log(siema("olacz"));

// // let wiek = 17;
// // if (wiek>=18){
// //   console.log("jestes pelnoletni");
// // }else{
// //   console.log("nie jestes pelnolerni");
// // }


// // let ocena = 3;
// // if(ocena ===5){
// //   console.log("ocena najwyzsza");
// // }else if(ocena ===4) {
// //   console.log("dobry oczen");

// // }else{
// //   console.log("poucz sie ");
// // }

// // for( let i =0; i <=5;i++){
// //   console.log(i);
// // }

// // let i =0;
// // while(i <10){
// //   console.log(i);
// //   i++;
// // }

// let imiona = ["ola","ala","kasia", "basia"];
// let nazwiska = ["kowalska", "nowak"];
// imiona.push("ela","moli");


// let ostatnie = imiona.pop();
// let pierwsze = imiona.shift();
// imiona.unshift("tola")

// // console.log(imiona);
// // console.log(ostatnie,pierwsze);

// // let polaczona = imiona.concat(nazwiska);
// // console.log(polaczona);
// let wycinek = imiona.slice(1,3);
// console.log(wycinek);


// let liczby =[1,2,3,4,5];
// // let usuniete = liczby1.splice(2,4);
// // console.log(usuniete);
// // liczby1.splice(6,7,8);
// // console.log(liczby1);
// let index = liczby.indexOf(6);
// console.log(index);

// let zawiera = liczby.includes(7);
// console.log(zawiera);
// liczby.reverse()
// console.log(liczby);



const button = document.querySelector("#btn-id");
button.addEventListener("click",()=>{
  console.log(prompt("przycisk kliknieto!"));
});


const input = document.querySelector("#input-id");
input.addEventListener("change",()=>{
  const value = input.value;
  console.log(value);
});

const form = document.querySelector(".input-class");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const formValue = document.querySelector(".inp").value;
  console.log(formValue);

});

const tab1 = [1,2,3];
const tab2 =[...tab1,4,5,6];
console.log(tab2);



let a =10;
let b = a;
b=20;
console.log(`a wynosi${a}a b ${b}`);

let tabA = [1,2,3];
let tabB = tabA;
tabB.push(a);
console.log(`tab a to ${tabA} tab B to ${tabB}`);



const firstTab = [1,2,3,4];
// let secoundTab =[...firstTab];
let secoundTab =[];
secoundTab = firstTab.map(function(number){
  return number;
})



console.log(secoundTab);


const person = {
  name:"Milena",
  greet:function(){
    console.log(this.name)}
    
  }
  person.greet()


  class User{
    constructor(name){
      this.name = name;
    }
    sayHi(){
      alert(`czesc ${this.name}`)
    }
  }

  // let user = new User("ola");
  // user.sayHi()

  // 1. Utwórz zmienną o nazwie testNumberVariable, przypisz jej wartość liczbową i wyświetl w konsoli.

  let testNumberVariable = 2;
  console.log(testNumberVariable);

  let testTextVariable = "tekst"
  console.log(testTextVariable);

  // 3. Utwórz dwie zmienne liczbowe, jedna o wartości 100, a druga 200. Dodaj te dwie zmienne i przypisz wynik do trzeciej zmiennej, a następnie wyświetl wartość ostatniej zmiennej.
let liczba1 = 100;
let liczba2 = 200;
let liczba3 = liczba1 + liczba2;
console.log(liczba3);

// 4. Operując na zmiennych rozwiąż i wyświetl wartość równania 2 + 2 * 2 / 2

// 

// 5. Wykorzystując zmienne oblicz ile wynosi 5 podniesione do potęgi 7

// let score = 5**7;
// let score2 = 5 * 5 * 5 * 5 * 5 * 5 * 5;
// console.log(score,score2);

// // Sprawdź ile wynosi wartość reszty z dzielenia 500 przez 13.
// let modulo= 500 % 13;
// console.log(modulo);

// 7. Utwórz zmienną bez przypisanej wartości i wyświetl ją na konsoli.

let zmienna;
const proba = 20;


// 9. Utwórz zmienną o wartości początkowej 6 a następnie korzystając z inkrementacji spraw aby wartości zmieniła się na 10.

let zm = 6;
zm++;
zm++;
zm++;
zm++;
console.log(zm);
let zmi = 4;
zmi--;
zmi--;
zmi--;
zmi--;
console.log(zmi);

// 11. Utwórz dwie zmienne, jedna typu numerycznego o wartości 2, a drugą typu tekstowego o wartości “2”. Następnie wyświetl wynik porównania za pomocą poznanych operatorów.

let numer = 20;
let text = "20";
console.log(numer == text);
console.log(numer === text);

let height =10;
let weight=180;

if(height>=150 && weight<=180){
  console.log("zapnij pasy");
}else{
  console.log("nie mozesz jechac");
}


// Napisz prosty kalkulator pobierający informacje jakie działanie chce wykonać użytkownik, pobierający dwie liczby i wykonujący działanie. Przynajmniej 4 działania.
// let num1 = Number(prompt("Podaj licznbe 1"));
// let num2 = Number(prompt("Podaj licznbe 2"));
// let dzialanie = prompt("wybierz dzialanie");


// if(dzialanie === ){
//   console.log(num1+ num2);
// }
// if(dzialanie === "odejmowanie"){
//   console.log(num1 -num2);
// };


const wynik = Math.ceil(Math.random() * 6);

if(wynik % 2 ===0){
  console.log("parzysta",wynik);
}
if(wynik % 2 === 1){
  console.log("nieparzysta",wynik);
}
if(wynik ===6){
  console.log("wow",wynik);
}


// Zadanie:
// Pobierz dane z API, które zwraca listę użytkowników, a następnie wyświetl imiona tych użytkowników w konsoli.

// Kroki:
// Użyj publicznego API, np. https://jsonplaceholder.typicode.com/users.
// Wykonaj żądanie GET za pomocą Fetch API.
// Wyświetl w konsoli imiona wszystkich użytkowników.
// Rozwiązanie:


// async function fetchData(){
//   const apiUrl= "https://jsonplaceholder.typicode.com/users/";
// try{
//   const res =await fetch(apiUrl);
//   if(!res.ok){
//     throw new Error("Network response was not ok");
//   }
//   const data =await res.json();
//   console.log(data);

// }catch(error){
//   console.log("there is problem wich fetch operation", error);
// }
// }


// fetchData();


async function fetchData(){
  const apiUrl = "https://jsonplaceholder.typicode.com/users/";
  try{
    const res = await fetch(apiUrl);
    if(!res.ok){
      throw new Error("Network work was not work")
    }
    const data = await res.json();
    const names = data.map(user => user.name);
    console.log(names);

    

  }catch(error){
    console.log("something wrong", error);
  }
}

fetchData();


document.querySelector("#input-form").addEventListener("submit",async (event)=>{
  event.preventDefault();
  const nameInput = document.querySelector("#name").value;
});


async function updatedData(){
  const apiUrl = "https://jsonplaceholder.typicode.com/users/1"

try{
  const res = await fetch(apiUrl,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData)
  });
  if(!res.ok){
    throw new Error("network res is not ok")
  };
const responseData = await res.json();
console.log("updated data:",responseData);
}catch(e){
  console.log("something wrong",e);

}

}

updatedData();

// let imionaLudziZKursu = ["Adrianna","Agata", "Alicja", "Andrzej" ];
// imionaLudziZKursu.push("Maciej","ula");


// console.log(imionaLudziZKursu[5]);