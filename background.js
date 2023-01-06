function generateRandInt(number) {
    var max = number + 1
    return Math.floor(Math.random() * Math.floor(max));
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if (msg.name == "fetchWords") {

        const APIKEY = 'api key (waiting for recieve it)'
        const actualDate = new Date().toISOString().slice(0, 10);

        const apiCall = `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${actualDate}&apikey=${APIKEY}`

        console.log(apiCall)

        //while we don't have the api key, this will be used to substitute:
        const wordsObj = [
            'certo',
            'errado',
            'paia',
            'pog',
            'trem'
        ]

        const wordsDescriptionObj = [
            'Aquilo que corresponde com a realidade.',
            'Aquilo que nao corresponde com a realidade.',
            'Aquilo que nao eh legal.',
            'Aquilo que eh legal.',
            'Aquilo...'
        ]

        var randInt = generateRandInt(4)

        response({ word: wordsObj[randInt], desc: wordsDescriptionObj[randInt] })
    }
})

