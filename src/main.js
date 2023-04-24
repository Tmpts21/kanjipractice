import { createApp } from 'vue'  
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'  

//components  
// import Home from './components/Home.vue'
import PracticeIndex from './components/Practice/Index.vue'
import Start from './components/Practice/Start.vue'
import LearnIndex from './components/Learn/Index.vue'


const router = createRouter({ 
    history: createWebHistory(),
    routes : [
        { path:'/practice', name : 'Practice' , component : PracticeIndex } ,
        { path:'/learn', name : 'Learn' , component : LearnIndex },
        { path:'/practice/:chapter/start', name : 'multiple' , component : Start }    

    ]
})

createApp(App).use(router).mount('#app')
