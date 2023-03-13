<template>
  <Transition name="slide-fade">
    <div class="text-center">
       <h1 class="font-weight-bold">
        王
       </h1> 

       <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
          </div>
          <input value="King" disabled type="text" class="form-control" aria-label="Text input with checkbox">
      </div>

      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
          </div>
          <input value="King" disabled type="text" class="form-control" aria-label="Text input with checkbox">
      </div>

      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
          </div>
          <input value="King" disabled type="text" class="form-control" aria-label="Text input with checkbox">
      </div>

      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
          </div>
          <input value="King" disabled type="text" class="form-control" aria-label="Text input with checkbox">
      </div>

      <div>
        <button class="btn btn-primary float-right"> Next <i class="ml-1 fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </Transition>
  </template>
  
  <script>
  export default {
    name: 'PracticeIndex', 
    props: { 
    },
    data() { 
      return { 
       
      }
    },
    methods : { 
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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
  </style>
  