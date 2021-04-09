/*
correctMe.js
Ce programme asynchrone ne fonctionne pas.
Ajouter le code nécessaire pour faire fonctionner ce programme.
const fsPromises = require('fs/promises')
*/

const chalk = require("chalk");
const fsPromises = require("fs/promises");

console.log("");
console.log(chalk.red.bold("--------------------------"));
console.log("");

const correctMe = async () => {
  try {
    // readFile retourne une promise et pas le texte du fichier!!!
    const txt1 = await fsPromises.readFile("hello.txt", "utf-8"); // exécution de readFile
    console.log(txt1);
  } catch (e) {
    // On gère les erreurs comme dans un code synchrone
    console.log(e.message);
  }
};
correctMe();
