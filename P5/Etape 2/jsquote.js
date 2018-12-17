// Etape 1 : des citations aléatoires

// Déclaration des variables, tableaux de citations 

const tab = {
    style1: [
        ["C'est en forgeant", "Un bon site Web", "Mal nommer les choses,", "J’adorerais changer le monde,", "Le principe de l'évolution"],
        ["qu'on devient", "est", "c’est", "mais ils ne veulent pas me fournir", "est beaucoup plus rapide en informatique"],
        ["forgeron, mais ce n'est pas en se noyant qu'on apprend à nager.", "toujours “en construction”", "ajouter au malheur du monde.", "le code source.", "que chez le bipède."]
    ],
    style2: [
        ["Prenez vos décisions en fonction", "Si vous commencez avec rien", "Mieux vaut penser", "La science des projets", "Rien de grand dans le monde"],
        ["d’où vous allez,", "et que vous finissez avec rien,", "le changement", "consiste à prévenir", "ne s’est accompli"],
        ["pas en fonction d’où vous êtes.", "vous avez donc rien à perdre.", "que changer le pansement.", "les difficultés de l’exécution.", "sans passion."]
    ]
}

// style1 : Claude Frisoni, Anonyme, Albert Camus, Anonyme, Jean Dion  ==>> Thème Informatique
// style2 : James Arthur Ray, Michael Dunlop, Francis Blanche, Vauvenargues, Georg Friedrich Hegel ==>> Thème Entreprenariat 

function generateRandomQuote(style) {
    const tabs = tab[style];
    let citation = '';


    for (let tab of tabs) {
        const index = Math.floor(Math.random() * tab.length);
        const text = tab[index];
        citation = citation + " " + text;
    }

    return citation;
}

// Etape 2 : des citations configurables

// Option initiale : sortie en console => plus utilisé car sortie HTML
function generateMultipleCitations(number, style) {
    for (let i = 0; i < number; i++) {
        const citation = generateRandomQuote(style);
        console.log('citation : ' + i + ' - ' + citation);
    }
}

// Option sortie HTML : on génère des paragraphe contenant les citations
document.getElementById('generate').addEventListener('click', function () {

    // Récupérer les valeurs sélectionnées
    let theme = document.getElementById('theme');
    let number = document.getElementById('number');

    // Test des valeurs sélectionnées
    if (theme.selectedIndex === 0) {
        alert('veuillez selectionner thème');
    } else if (number.selectedIndex === 0) {
        alert('veuillez selectionner un nombre')
    } else { // Ici les choix sont valables
        // Nettoyer le réceptacle des quotes
        resetBlock();
        let choixStyle = theme.value;
        let choixNbr = number.value;
        let quoteBox = document.getElementById("quoteBox");
        for (let i = 0; i < choixNbr; i++) {
            const quote = document.createElement("blockquote");
            const text = document.createElement("p")

            text.id = "citation" + i;

            quoteBox.appendChild(quote);
            quote.appendChild(text);

            document.getElementById("citation" + i).innerHTML = generateRandomQuote(choixStyle);
        }
    }
});

document.getElementById("reset").addEventListener('click', resetBlock);

/* Fonction permettant de supprimer les blocs de citations générer et de relancer l'application */
function resetBlock() {
    document.getElementById("quoteBox").innerHTML = "";
};
