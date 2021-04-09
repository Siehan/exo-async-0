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

/*
➜  exo-async-0 git:(main) ✗ node my-wget.js
--------------------------
OUPPUT AVEC axios.get("/user/12345").catch(function (error):

Stats {
  dev: 16777221,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,

--------------------------

OUPPUT SANS axios.get("/user/12345").catch(function (error):

Stats {
  dev: 16777221,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 44290341,
  size: 351923,
  blocks: 688,
  atimeMs: 1617979319341.4065,
  mtimeMs: 1617980164609.846,
  ctimeMs: 1617980164609.846,
  birthtimeMs: 1617979070716.7712,
  atime: 2021-04-09T14:41:59.341Z,
  mtime: 2021-04-09T14:56:04.610Z,
  ctime: 2021-04-09T14:56:04.610Z,
  birthtime: 2021-04-09T14:37:50.717Z

*/
