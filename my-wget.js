/*
÷÷÷÷÷÷÷÷÷÷ my-wget.js 1 ÷÷÷÷÷÷÷÷÷÷÷
Ecrivez un programme my-wget.js qui prend comme paramètre sur la ligne de commande une url,
qui telecharge son contenu, et l'écrit dans un fichier index.html sur votre disque.
Il faudra utiliser le package axios et des fonctions du module fs/promises pour cela.
÷÷÷÷÷÷÷÷÷÷ my-wget.js 2 ÷÷÷÷÷÷÷÷÷÷÷
Améliorer l'exercice précédent pour afficher dans le cas d'un download réussi, la taille des données downloadées.
Vous pouvez récupérer cette information soit:
grâce à la fonction fsPromises.stat qui retourne un objet Stats qui contient cette information:
https://nodejs.org/api/fs.html#fs_class_fs_stats.
Il faudra appliquer cette fonction fsPromises.stat au fichier index.html déjà écrit.
grâce à la propriété headers['content-length'] de l'objet "response" retourné par axios.get.
Un console.log(response.headers) peut vous aider à comprendre la structure du header d'une réponse http.
*/

const chalk = require("chalk");
const fsPromises = require("fs/promises");
const axios = require("axios");

console.log("");
console.log(chalk.red.bold("--------------------------"));
console.log("");

if (process.argv.length !== 3) {
  console.log("Usage: node my-wget.js url");
  process.exit(1);
}

const myWget = async () => {
  try {
    const response = await axios.get("https://github.com/axios/axios");
    await fsPromises.writeFile("index.html", response.data); // response.data est une string qui est la page html
    console.log(`Content size : ${response.headers["content-length"]}`);
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

myWget();

/*Error: connect ECONNREFUSED 127.0.0.1:8080*/
