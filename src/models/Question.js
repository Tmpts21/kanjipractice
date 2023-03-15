export default class Question { 
    constructor (kanji , hiragana , eng , type , answer,  listOfAnswers = [] , typeOfQuestion  )  {    
        this.kanji = kanji 
        this.hiragana = hiragana 
        this.eng = eng   
        this.type = type  
        this.listOfAnswers = listOfAnswers   
        this.answer = answer 
        this.typeOfQuestion = typeOfQuestion
    }
}