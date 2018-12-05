// Etape 1 : des citations aléatoires

// Déclaration des variables, tableaux de citations 
const quote1a = [" A ", " B ", " C ", " D ", " E "];
const quote1b = [" 1 ", " 2 ", " 3 ", " 4 ", " 5 "];
const quote1c = [" a ", " b ", " c ", " d ", " e "];


function generateRandomQuote(tab1, tab2, tab3) {
    // Je tire aléatoirement un nombre entre 0 et (longueur du tableau - 1)
    const rand1 = Math.floor(Math.random() * tab1.length);
    const rand2 = Math.floor(Math.random() * tab2.length);
    const rand3 = Math.floor(Math.random() * tab3.length);
    // Je concatène les données issues des tableaux et je la retourne au code appelant
    return tab1[rand1] + tab2[rand2] + tab3[rand3];
};

let citation = generateRandomQuote(quote1a, quote1b, quote1c);
console.log(citation);