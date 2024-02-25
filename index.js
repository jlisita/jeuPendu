var hiddenWord = "chronologie";
var arrayDiscoveredLetters = [];
var endGame = false;
var letter = "";
var nbrTries = 0;

function testEndGame(arrayDiscoveredLetters)
{
    for(var i = 0, l = arrayDiscoveredLetters.length; i < l; i++)
    {
        if(arrayDiscoveredLetters[i] == false)
            return false;
    }
    return true;
}

function searchLetterInWord(letter, hiddenWord)
{
    for(var i = 0, l = hiddenWord.length; i < l; i++) 
    {
        if(hiddenWord[i] == letter)
        {
            return true;
        }
    }
    return false;
}

function replaceLetterInWord(letter, hiddenWord, arrayDiscoveredLetters)
{
    for(var i = 0, l = hiddenWord.length; i < l; i++) 
    {
        if(hiddenWord[i] == letter)
        {
            arrayDiscoveredLetters[i] = true;
        }
    }
}

function displayWord(hiddenWord, arrayDiscoveredLetters)
{
    var tab = [];
    var str = "";
    for(var i = 0, l = hiddenWord.length; i < l; i++) 
    {
        if(arrayDiscoveredLetters[i] == true){
            tab.push(hiddenWord[i]);
        }
        else {
            tab.push("-");
        }
    }
    str = tab.join(" ");
    
    alert(str);
}

// initialize the array containing the word
// and the boolean array representing the discovered letters

for(var i = 0, l = hiddenWord.length; i < l; i++)
{
    arrayDiscoveredLetters.push(false);
}

do
{
    displayWord(hiddenWord, arrayDiscoveredLetters);

    letter = prompt("Saisir une lettre: ");
    
    if(searchLetterInWord(letter,hiddenWord))
    {
        replaceLetterInWord(letter, hiddenWord,arrayDiscoveredLetters);
    }
    else
    {
        alert("cette lettre n'existe pas dans le mot");
    }
    nbrTries++;

}while(!testEndGame(arrayDiscoveredLetters));

displayWord(hiddenWord, arrayDiscoveredLetters);

alert("Bravo ! vous avez trouvé le mot caché en " + nbrTries + " coups.");






















