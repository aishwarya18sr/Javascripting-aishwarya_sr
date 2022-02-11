function splitSentenceToWords(givenSentence)
{
    const wordsArray = givenSentence.split(" ");
    return wordsArray;
}

function isWordsRepeating(wordsArray)
{
    let words = new Set();
    const length_wordsArray = wordsArray.length;
    for(let i=0; i < length_wordsArray; i++)
    {
        if(words.has(wordsArray[i]))
        {
            return true;
        }
        else
        {
            words.add(wordsArray[i]);
        }
    }
    return false;
}

function checkWordsRepetition(givenSentence)
{
    wordsArray = splitSentenceToWords(givenSentence);
    if(isWordsRepeating(wordsArray))
    {
        console.log('The sentence has repeating words')
    }
    else
    {
        console.log('The sentence does not have repeating words')
    }
}

//const givenSentence = 'These words are repeating words';
 const givenSentence = 'These words are repeating';

checkWordsRepetition(givenSentence);