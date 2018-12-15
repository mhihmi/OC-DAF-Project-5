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

// Etape 2 : des citations configurables

function generateMultipleCitations(number, style) {
    for (var i = 0; i < number; i++) {
        let style = document.getElementById("theme").selectedIndex;
        let number = document.getElementById("nombre").selectedIndex;
        let quoteBox = document.getElementById("quoteBox");
        block = document.createElement("blockquote");
        paragraph = document.createElement("p");

        const citation = generateRandomQuote(style);

        quoteBox.appendChild(block);
        block.appendChild(paragraph);
    }
    document.getElementById("Boutton1").style.display = "none";
    document.getElementById("Boutton2").style.display = "block";
};

generateMultipleCitations(nombre, theme);

function resetBlock() { //* Fonction permettant de supprimer les blocs de citations générer et de relancer l'application
    document.getElementById("Boutton1").style.display = "block";
    document.getElementById("Boutton2").style.display = "none";

    var resetBlock = document.querySelectorAll("#quoteBox blockquote")
    for (var u = 0, r = resetBlock.length; u < r; u++) {

        quoteBox.removeChild(resetBlock[u]);
    }
};