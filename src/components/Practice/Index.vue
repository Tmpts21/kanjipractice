<template>
  <div>
      <div class="container flex"  style="width : 65% ">
          <h5 class="font-weight-bold">Choose A Chapter 🤔</h5>
        <div class="row">  
          <div v-for="chapter in chapters" :key="chapter" class="col mt-2 ">
          <button class="btn btn-primary" 
            :class="{ 'btn btn-success': chaptersChosen.includes(chapter) }"  
            @click=ChooseChapter(chapter)>
            Chapter {{chapter}} 
          </button>
        </div>
        </div>

        <div v-if="chaptersChosen.length > 0"> 
          <router-link class="btn btn-primary float-right mt-5  font-weight-bold" :to="'/practice/' + this.chaptersChosen + '/start'">
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
      chaptersChosen : [] ,
      quizTypeChosen : null
    }
  },
  methods : { 
    ChooseChapter(chapter ) {  
      if(this.chaptersChosen.includes(chapter)){ 
        console.log('hit')
        this.chaptersChosen = this.chaptersChosen.filter(item => item !== chapter ) 
        return
      } 
      return this.chaptersChosen.push(chapter)  
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

</style>
