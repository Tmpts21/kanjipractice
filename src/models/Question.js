export default class Question { 
    constructor (question,kanji , hiragana , eng , type , answer,  listOfAnswers = []   )  {      
        this.question = question
        this.kanji = kanji 
        this.hiragana = hiragana 
        this.eng = eng   
        this.type = type  
        this.listOfAnswers = listOfAnswers   
        this.answer = answer 
    }
}