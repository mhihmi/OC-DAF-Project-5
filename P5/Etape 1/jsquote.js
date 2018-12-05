// Etape 1 : des citations aléatoires

// Déclaration des variables, tableaux de citations 

const tab = {
    style1: [
        [" A ", " B ", " C ", " D ", " E "],
        [" 1 ", " 2 ", " 3 ", " 4 ", " 5 "],
        [" a ", " b ", " c ", " d ", " e "]
    ],
    style2: [
        [" Zozo ", " Toto ", " Bouya ", " Ka ", " Zen "],
        [" Roxor ", " Awesome ", " use ", " Set ", " Blop "],
        [" Chaud ", " Froid ", " Zinzin ", " Zigoto ", " Noob "]
    ]
}

function generateRandomQuote(style) {
    const tabs = tab[style];
    let citation = '';

    /*tabs.forEach(tab => {
                    const index = Math.floor(Math.random() * tab.length);
                    const text = tab[index];
                    citation = citation + text;
                });*/
    // peut s'écrire aussi :            
    for (let tab of tabs) {
        const index = Math.floor(Math.random() * tab.length);
        const text = tab[index];
        citation = citation + " " + text;
    }

    return citation;

};

function generateMultipleCitations(number, style) {
    for (var i = 0; i < number; i++) {
        const citation = generateRandomQuote(style);
        console.log('citation : ' + i + ' - ' + citation);
    }
}


generateMultipleCitations(5, 'style1');




// let citation = generateRandomQuote('style1');
// let citation2 = generateRandomQuote('style2');

// console.log(citation);
// console.log(citation2);