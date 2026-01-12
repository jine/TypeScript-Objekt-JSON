// Steg 1: Objekt
const favoriteApp = {
  name: "Spotify",
  millionUsers: 600,
  isInstalled: true,
  category: "Musik",

  appInfo() {
    console.log(
      `The app ${this.name} is used by ${this.millionUsers} million users world wide and is ${this.isInstalled ? 'installed' : 'not installed'}.`
    );
  }
};

// Anropa metoden
favoriteApp.appInfo(); // Kallar console.log i sin tur

// Hämta värde med punktnotation
console.log(favoriteApp.name);

// Hämta värde med hakparentesnotation
console.log(favoriteApp["name"]);

// Testa med console.log
favoriteApp.appInfo();
console.log(`------------------------------------------------------------`);



// Steg 2: Math & Date
const birthYear: number = 1990; // Mitt födelseår
const randomYear: number = Math.floor(Math.random() * 37) + birthYear; // Slumpmässigt år mellan 1990 och 2026
const dagensDatum: Date = new Date();
const aktuelltAr: number = dagensDatum.getFullYear();

console.log(`Ett slumpat år: ${randomYear} och just nu är det ${aktuelltAr}.`);
console.log(`------------------------------------------------------------`);



// Steg 3: Typkonvertering & Assertion
let screenSizeWithPx: string = "1920px";
let screenSize: number = parseInt(screenSizeWithPx);
console.log(`Skärmstorlek i pixlar: ${screenSize}px`);

let numericString: string = "500";
let convertedNumber: number = Number(numericString);
console.log(`${convertedNumber}`);

let someString: any = "Steg 3: Typkonvertering & Assertion";
let strLength: number = (someString as string).length;
console.log(`Längd: ${strLength}`);
console.log(`------------------------------------------------------------`);



// Steg 5: Slutuppgift
const formPost = {
    count: 1,
    article: "Trådlöst headset",
    price: "299 SEK",
    color: "Svart",
    status: "inStock",
    taxPercent: "25%"
};



// Konvertera priset till ett number
const priceNumber: number = parseInt(formPost.price);

// Använd parseInt för att få ut siffran 
const taxPercent: number = parseInt(formPost.taxPercent);

// Räkna ut det slutgiltiga priset 
const finalPrice: number = priceNumber * (1 + taxPercent / 100);

// Testa implicit konvertering
console.log("Resultat: '" + formPost.price + 100 + "'");

console.log(`------------------------------------------------------------`);


// SVAR: price är en sträng i formPost, inte en number, så + operatorn slår ihop strängen med "100" istället för att addera
// RES: "299kr100"

if(formPost.status == "inStock") {
    console.log("Produkten finns i lager.");


    // Logga ett SNYKKKTT kvitto i konsolen
    console.log(`.------------ KVITTO ------------.`);
    console.log(`| Produkt: ${formPost.article}      |`);
    console.log(`| Pris exkl. skatt: ${priceNumber} SEK      |`);
    console.log(`| Skatt: ${taxPercent} %                    |`);
    console.log(`| -------------------------------|`);
    console.log(`| Att betala: ${finalPrice} SEK         |`);
    console.log(`\`--------------------------------´`);

} else {
    console.log("Produkten är slut i lager.");
}

