// Steg 1: Objekt
const favoriteApp = {
  name: "Spotify",
  millionUsers: 600,
  isInstalled: true,
  category: "Musik",

  appInfo() {
    console.log(
      `The app ${this.namn} is used by ${this.millionUsers} millon users world wide and is ${this.isInstalled ? 'installed' : 'not installed'}.`
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



// Steg 2: Math & Date
const randomYear: number = Math.floor(Math.random() * 2026) + 1; // Slumpmässigt år mellan 1 och 2025
const dagensDatum: Date = new Date();
const aktuelltAr: number = dagensDatum.getFullYear();

console.log(`Ett slumpat år: ${randomYear} och just nu är det ${aktuelltAr}.`);


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

// Steg 5: Slutuppgift
const inputData = {
    formField1: "John Doe",
    formField2: "29",
    formField3: "true",
    formField4: "1995-06-15",
    formField5: "25%"
};

// brb lunch