<template>
  <div>
      <div class="container flex"  style="width : 65% ">
          <h5 class="font-weight-bold">Choose A Chapter 🤔</h5>
        <div class="row">
          <div v-for="chapter in chapters" :key="chapter" class="col mt-2 ">
          <button class="btn btn-secondary" 
            :class="{ 'btn btn-outline-primary': this.chapterChosen === chapter }"
            @click=ChooseChapter(chapter)>
            Chapter {{chapter}} 
          </button>
        </div>
        </div>

        <h5 class="font-weight-bold mt-5">Quiz Type 🤔</h5>
        <div class="row">
          <div class="col p-1">
            <button class="btn btn-secondary" 
            :class="{ 'btn btn-outline-primary': this.quizTypeChosen === 'multiple' }"
            @click="ChooseQuizType('multiple')">
            Multiple Choice
            </button>
          </div>
          <div class="col p-1">
            <button class="btn btn-secondary" 
            :class="{ 'btn btn-outline-primary': this.quizTypeChosen === 'matching' }"
            @click="ChooseQuizType('matching')"
            >
            Matching
          </button>
          </div>
        </div>

        <div v-if="quizTypeChosen != null && chapterChosen != null ">

          <router-link class="btn btn-primary float-right mt-5  font-weight-bold" :to="'/practice/' + this.chapterChosen + '/' + this.quizTypeChosen">
              Start 📝
          </router-link>
          
           
        </div>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'PracticeIndex', 
  props: {
    msg: String
  },
  mounted() { 
    this.chapters = 12 ; 
  },
  data() { 
    return { 
      chapters : 12 ,
      chapterChosen : null ,
      quizTypeChosen : null
    }
  },
  methods : { 
    ChooseChapter(chapter ) { 
      this.chapterChosen = chapter
      console.log(this.chapterChosen);
    },
    ChooseQuizType(type) { 
      this.quizTypeChosen = type
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

</style>
