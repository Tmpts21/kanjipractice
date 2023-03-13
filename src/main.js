import { createApp } from 'vue'  
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'  

//components  
import Home from './components/Home.vue'
import PracticeIndex from './components/Practice/Index.vue'
import MultipleChoice from './components/Practice/MultipleChoice.vue'
import LearnIndex from './components/Learn/Index.vue'


const router = createRouter({ 
    history: createWebHistory(),
    routes : [
        { path:'/', name : 'Home' , component : Home } ,
        { path:'/practice', name : 'Practice' , component : PracticeIndex } ,
        { path:'/learn', name : 'Learn' , component : LearnIndex },
        { path:'/practice/:chapter/multiple', name : 'multiple' , component : MultipleChoice }   

    ]
})

createApp(App).use(router).mount('#app')
