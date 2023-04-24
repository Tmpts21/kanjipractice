<template> 
    <br>
    <div v-for="(question , index ) in questions" :key="index">        
          <h5 class="font-weight-bold">  
           <span>{{ index + 1 }}</span>. {{question.question }}  
          </h5>  

          <div  v-for="(choice) in question.choices" :key="choice.id" class="input-group">      
              <input @change="onChangeRadio($event , index )" type="radio" id="one" class="ml-1" v-model="question.chosed" :value="choice" />    
              <label for="one" class="ml-2 mt-2">{{ choice }}</label>
          </div>   
          <br>

      </div>  
        {{ this.showScore }}
        <div v-if="showScore">
          <ScoreComponent :score="this.score" :noOfItems="this.questions.length"></ScoreComponent>
        </div>
  </template>
  
  <script> 
  import data from "../../Data/Kanji.json" 
  import Question from "../../models/Question.js" 
  import ScoreComponent from "../Score/Index.vue"

  export default {
    name: 'Start',  
    components :{ 
     ScoreComponent 
    },
    props: { 
    },
    data() { 
      return { 
        chapters : this.$route.params.chapter, 
        questions : [], 
        showScore : false ,   
      }
    },
    mounted() {  
        this.generateQuestions();  
    },
    methods : {       
      generateQuestions() { 
        // get all kanjis based on chapter       
        let kanjis = []  

        for( let i = 0 ; i < this.chapters.length ; i++) { 
          const k = data.kanjis.filter( kanji => {
              return kanji.chapter == this.chapters[i] 
          })        
          kanjis.push(...k) 
        }


        //shuffle
        let shuffledKanjis = this.shuffle(kanjis) 

        for(var i = 0 ; i < shuffledKanjis.length ; i++ ) {     

          const kanjiData = shuffledKanjis[i]   

          // get random Question
          const vocabQuestion = kanjiData.vocab[(Math.floor(Math.random()*kanjiData.vocab.length))]           
          const vocabs = []  

          const dice = ['kanji','hiragana','eng'][Math.floor(Math.random() * 3 )] 

          for(var j = 0 ; j < shuffledKanjis.length ; j++ ) {       
            vocabs.push(...shuffledKanjis[j].vocab) 
          }        

          let displayQuestion = ""
          // get random choices   
          let answer = "" 
          let choices = []
          if(dice =='kanji') {    
          choices.push(vocabQuestion.hiragana) 
          while (choices.length != 4 ) {     
              displayQuestion = vocabQuestion.kanji 
              answer = vocabQuestion.hiragana
              choices.push(vocabs[Math.floor(Math.random() * vocabs.length )].hiragana) 
            }    
          } 
          else {  
            choices.push(vocabQuestion.kanji) 
            while (choices.length != 4 ) {     
                if(dice == 'eng') {  
                  displayQuestion = vocabQuestion.eng   
                }  
                else {displayQuestion = vocabQuestion.hiragana}
                answer = vocabQuestion.kanji 
                choices.push(vocabs[Math.floor(Math.random() * vocabs.length )].kanji)     
              }    
          }  

          const shuffledChoices = this.shuffle(choices)

          this.questions.push(new Question(displayQuestion,vocabQuestion.kanji,vocabQuestion.hiragana,vocabQuestion.eng , answer , shuffledChoices))  

        } 
      }, 

      onChangeRadio(event , index) {    
        this.isAllquestionsAnswered()
        return this.questions[index].chosed = event.target.value  
      },

      shuffle(data) {  

        let shuffled = data 
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort) 
          .map(({ value }) => value)          
        
        return shuffled

      },
      isAllquestionsAnswered() {  
        let counter = 0 
        for(let i = 0 ; i < this.questions.length ; i++ ) { 
          if(this.questions[i].chosed !== ""){
           counter+=1 
           }
        }   
        console.log(counter , this.questions.length)
        if(counter == this.questionsLength ){ 
          console.log('hit')
          this.showScore = true   
         } 
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
 

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
  