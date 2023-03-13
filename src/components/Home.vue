<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow" > 
  <a class="navbar-brand" href="#"><i class="fa-solid fa-language" style="font-size: 50px;"></i></a>  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>  
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active"> 
            <router-link to="/Practice" class="btn btn-primary ml-3" style="color : white">  
              Practice 
            </router-link>
      </li>
      <li class="nav-item"> 
            <router-link to="/Learn" class="btn btn-outline-primary"> 
              Learn
            </router-link>
      </li>
    </ul>
  </div>
</nav> 
  <router-view></router-view> 
</template> 

<script>
export default {
  name: 'Home', 
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a { 
  color: #2c3e50;
}
</style>