export default class Question { 
    constructor (question,kanji , hiragana , eng , answer,  choices = [] , chosed = "" )  {         
        this.question = question
        this.kanji = kanji 
        this.hiragana = hiragana 
        this.eng = eng   
        this.choices = choices   
        this.answer = answer 
        this.chosed = chosed 

    }
}