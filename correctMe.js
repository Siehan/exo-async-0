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
    console.log("Thank you for using correctMe.js");
  }
};

correctMe();

/*
OUTPUT :
➜  exo-async-0 git:(main) ✗ node correctMe.js

TEST AVEC UNE ERREUR
--------------------------
Error: ENOENT: file does not exist
Thank you for using correctMe.js
➜  exo-async-0 git:(main) ✗
--------------------------
OUTPUT DU TEXT SANS ERREUR :

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
*/
