<template> 
    <br> 
    <div v-if="!showScore">  

    <div v-for="(question , index ) in questions.slice( 0 , this.questions.length / 2 )" :key="index">         
          <h5 class="font-weight-bold">  
           <span>{{ index + 1 }}</span>. {{question.question }}  
          </h5>  

          <div  v-for="(choice) in question.choices" :key="choice.id" class="input-group">      
              <input @change="onChangeRadio($event , index )" type="radio" id="one" class="ml-1" v-model="question.chosed" :value="choice" />    
              <label for="one" class="ml-2 mt-2">{{ choice }}</label>
          </div>   
          <br>
      </div>    

    <div v-for="(question , index ) in questions.slice(this.questions.length / 2 , this.questions.length )" :key="index">           
          <h5 class="font-weight-bold">  
           <span>{{ index + 1 + this.questions.length / 2 }}</span>. {{question.question }}  
          </h5>   
          <div class="form-group">
            <input type="text" class="form-control" id="answer" v-model="question.chosed">  
          </div>

          <br>
      </div>   

    </div>
      <button class="btn btn-outline-primary float-right"  v-if="!showScore" @click="finish"> 
        Finish 🎉
      </button>  
      <br>
        <div v-if="showScore">
          <ScoreComponent :score="this.score" :noOfItems="this.questions.length"></ScoreComponent>
        </div>
  </template>
  
  <script>  
  /* eslint-disable vue/no-unused-components */
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
        score : 0 
      }
    },
    mounted() {  
        this.generateMultipleChoiceQuestions();  
    },
    methods : {       
      generateMultipleChoiceQuestions() { 
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
        return this.questions[index].chosed = event.target.value  
      }, 

      finish() {       
        let score = 0 
        for(let i = 0 ; i < this.questions.length ; i++ ) {  
          if(this.questions[i].chosed === this.questions[i].answer) { 
            score+=1  
          }
        }    
        this.showScore = true  
        this.score = score 
        return score 
      }, 

      shuffle(data) {  

        let shuffled = data 
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort) 
          .map(({ value }) => value)          
        
        return shuffled

      },
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
  