const SYLLABLE_URL = "https://raw.githubusercontent.com/PyThaiNLP/pythainlp/dev/pythainlp/corpus/syllables_th.txt"
  
let exampleWord = "รถไฟสมัยใหม่จะใช้กำลังจากหัวรถจักรดีเซลหรือจากไฟฟ้า"
let word = ""

// maximum matching word segmentation algorithm
// algorithm workflow reference from https://medium.com/@anshul16/maximum-matching-word-segmentation-algorithm-python-code-3444fe4bd6f9
let syllabelList = []
fetch(SYLLABLE_URL)
  .then(response => response.text())
  .then(text => {
            syllabelList= text.split(/\r?\n/)
            console.log(syllabelList)
        }  
    )
const syllabel_tokenize = (inputWord) => {
        let i = 0
        let tokens = []
        inputWord = inputWord.replace(/[^ก-๙]/gi," ");
        inputWord = inputWord.split(" ").join("")
        console.log(inputWord)
        while(i < inputWord.length){
            maxWord = ""
            for(let j = i; j<inputWord.length; j++){
                tempWord = inputWord.slice(i,j+1)
                if(syllabelList.includes(tempWord) && tempWord.length > maxWord.length){
                    maxWord = tempWord
                }
            }
            i = i+maxWord.length
            tokens.push(maxWord)
        }
        console.log(tokens) 
        $("#outp").text(tokens.join(", ")); 
}