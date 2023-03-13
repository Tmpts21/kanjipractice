import { createApp } from 'vue'  
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'  

//components  
import Home from './components/Home.vue'
import PracticeIndex from './components/Practice/PracticeIndex.vue'
import LearnIndex from './components/Learn/LearnIndex.vue' 


const router = createRouter({ 
    history: createWebHistory(),
    routes : [
        { path:'/', name : 'Home' , component : Home } ,
        { path:'/practice', name : 'Practice' , component : PracticeIndex } ,
        { path:'/learn', name : 'Learn' , component : LearnIndex }   
    ]
})

createApp(App).use(router).mount('#app')
