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

const myWget = async () => {
  try {
    const response = await axios.get("https://github.com/axios/axios");
    await fsPromises.writeFile("index.html", response.data); // response.data est une string qui est la page html
    const stats = await fsPromises.stat("index.html", response.headers);
    console.log(stats);
  } catch (e) {
    console.log(e.message);
  }
};

myWget();

axios.get("/user/12345").catch(function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);
});
