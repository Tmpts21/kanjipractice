
<template> 
    <div class="text-center"> 
        <div class="alert alert-success" role="alert">   
            <p style="font-size:48px">🎉</p>
            <p style="font-size:24px">Congratulations your score is </p>        
            <p style="font-size:24px">
             {{ score }}/{{ noOfItems }}
            </p> 

            <router-link to="/Practice" class="btn btn-primary" style="color : white">   
                Try again ✨
            </router-link>
        </div> 

    </div>
</template>

<script>
export default {
  name: 'ScoreComponent', 
  props: ['score','noOfItems'] 
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
</style>
