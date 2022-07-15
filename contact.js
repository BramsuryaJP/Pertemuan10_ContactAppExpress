// core modules
// file system
const fs = require('fs');

// third party module
// const validator = require('validator');

//membuat folder data apabila tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts json jika belom ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath,'[]','utf-8');
}

// membuat fungsi untuk mengecek data/contacts.json
const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf8');
  const contacts = JSON.parse(file);
  return contacts;
}

module.exports = { loadContact }