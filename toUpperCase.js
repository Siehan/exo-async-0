/*
toUpperCase.js
Convertir le code suivant qui utilise les versions synchrones de l'api du module fs,
en un code qui utilise les versions asynchrones de l'api du module fs/promises.

const fs = require('fs')
try {
  let txt1 = fs.readFileSync('hello.txt', 'utf-8')
  txt1 = txt1.toUpperCase()
  fs.writeFileSync('hello.txt', txt1)
} catch (e) {
  console.log(e.message)
}
*/

const chalk = require("chalk");
//const fs = require("fs");
const fsPromises = require("fs/promises");

console.log("");
console.log(chalk.red.bold("--------------------------"));
console.log("");

const toUpperCase = async () => {
  try {
    // readFile retourne une promise et pas le texte du fichier!!!
    let txt1 = await fsPromises.readFile("hello.txt", "utf-8"); // exécution de readFile
    txt1 = txt1.toUpperCase();
    await fsPromises.writeFile("hello.txt", txt1); // exécution de writeFile
    console.log(txt1);
  } catch (e) {
    // On gère les erreurs comme dans un code synchrone
    console.log(e.message);
  }
};
toUpperCase();
