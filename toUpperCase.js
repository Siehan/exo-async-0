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
    // catch toutes les exceptions
    if (e.code === "ENOENT") {
      console.error(`Error: ${e.code}: file does not exist`);
    } else if (e.code === "EISDIR") {
      console.error(`Error: ${e.code}: is a directory`);
    } else if (e.code === "EACCES") {
      console.error(`Error: ${e.code} access denied`);
    } else {
      // On gère les erreurs comme dans un code synchrone
      console.log(e.message);
    }
  } finally {
    // will always execute
    console.log("Thank you for using toUpperCase.js");
    console.log("");
    console.log(chalk.red.bold("--------------------------"));
    console.log("");
  }
};
toUpperCase();

/* OUTPUT TEST ERREUR :
➜  exo-async-0 git:(main) ✗ node toUpperCase.js

--------------------------

Error: ENOENT: file does not exist
Thank you for using toUpperCase.js

--------------------------
OUTPUT txt1  UPPERCASE :

CORRECTME.JS

CE PROGRAMME ASYNCHRONE NE FONCTIONNE PAS.
AJOUTER LE CODE NÉCESSAIRE POUR FAIRE FONCTIONNER CE PROGRAMME.
CONST FSPROMISES = REQUIRE('FS/PROMISES')

--------------------------

TOUPPERCASE.JS

CONVERTIR LE CODE SUIVANT QUI UTILISE LES VERSIONS SYNCHRONES DE L'API DU MODULE FS,
EN UN CODE QUI UTILISE LES VERSIONS ASYNCHRONES DE L'API DU MODULE FS/PROMISES.

CONST FS = REQUIRE('FS')
TRY {
  LET TXT1 = FS.READFILESYNC('HELLO.TXT', 'UTF-8')
  TXT1 = TXT1.TOUPPERCASE()
  FS.WRITEFILESYNC('HELLO.TXT', TXT1)
} CATCH (E) {
  CONSOLE.LOG(E.MESSAGE)
}

--------------------------
*/
