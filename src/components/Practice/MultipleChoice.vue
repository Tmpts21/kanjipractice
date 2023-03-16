<template> 

    <div v-for="(question , index ) in questions" :key="index">        
      <div v-if="currentCount == index">  

          <div class="text-center">
          <h1 class="font-weight-bold">  
            {{question.question }}  
          </h1>  

          <div  v-for="(choice , index ) in question.listOfAnswers" :key="index" class="input-group mb-3">    
              <input type="radio" id="one"  v-model="pickedAnswer" :value="choice" />  
              <label for="one" class="ml-2 mt-2">{{ choice }}</label>
          </div> 

          <div v-if="index < questions.length" >
            <button @click="nextQuestion(index)" class="btn btn-primary float-right"> Next <i class="ml-1 fa-solid fa-arrow-right"></i></button>   
          </div>  

        </div> 
      </div> 
    </div>  

      <div v-if="this.currentCount == this.questions.length "> 
        <ScoreComponent :score="this.score" :noOfItems="this.questions.length"></ScoreComponent>
      </div>
  </template>
  
  <script> 
  import data from "../../Data/Kanji.json" 
  import Question from "../../models/Question.js" 
  import ScoreComponent from "../Score/Index.vue"

  export default {
    name: 'PracticeIndex',  
    components :{ 
     ScoreComponent 
    },
    props: { 
    },
    data() { 
      return { 
        chapter : this.$route.params.chapter,
        questions : [], 
        currentCount : 0 , 
        pickedAnswer : null ,
        score : 0 ,
        showScore : false , 
      }
    },
    mounted() {  
        this.generateQuestions(); 
    },
    methods : {     
      
      nextQuestion(index) {            
        if(this.questions[index].answer == this.pickedAnswer) {
          this.score++  
          this.currentCount++ 
          this.pickedAnswer = null 
          return
        }    
        this.currentCount++
        this.pickedAnswer = null     

        return 
      },
      generateQuestions() { 
        // get all kanjis based on chapter   
        const kanjis = data.kanjis.filter( kanji => { 
          return kanji.chapter == this.chapter
        })       


        //shuffle
        let shuffledKanjis = this.shuffle(kanjis) 

        for(var i = 0 ; i < shuffledKanjis.length ; i++ ) {     

          const kanjiData = shuffledKanjis[i]   

          // get random Question
          const vocabQuestion = kanjiData.vocab[(Math.floor(Math.random()*kanjiData.vocab.length))]           
          const allVocabs = []  

          const dice = ['kanji','hiragana','eng'][Math.floor(Math.random() * 3 )] 

          for(var j = 0 ; j < shuffledKanjis.length ; j++ ) {       
            allVocabs.push(...shuffledKanjis[j].vocab) 
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
              choices.push(allVocabs[Math.floor(Math.random() * allVocabs.length )].hiragana) 
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
                choices.push(allVocabs[Math.floor(Math.random() * allVocabs.length )].kanji)     
              }    
          } 

          this.questions.push(new Question(displayQuestion,vocabQuestion.kanji,vocabQuestion.hiragana,vocabQuestion.eng,'multiple' , answer , choices))

        } 
      },

      shuffle(data) {  

        let shuffled = data 
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort) 
          .map(({ value }) => value)          
        
        return shuffled

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
  