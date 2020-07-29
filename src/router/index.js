import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OurTeam from '../views/OurTeam.vue'
import AboutUs from '../views/About.vue'
import Subject from '../views/Subject.vue'
import SubjectPrep from '../views/SubjectPreparePage.vue'
import SubjectQnA from '../views/SubjectQnAPage.vue'
import SubjectMcQ from '../views/SubjectMcQPage.vue'
import SubjectQuiz from '../views/SubjectQuizPage.vue'
import SET from '../views/SET.vue'
import HVTech from '../views/HvTech.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs,
  
  },
  {
    path: '/ourTeam',
    name: 'OurTeam',
    component: OurTeam,
  
  },
  {
    path: '/Set',
    name: 'SET',
    component: SET,
  },
  {
    path: '/HvTech',
    name: 'HVTech',
    component: HVTech
  },
  {
    path: '/Subject/:id',
    name: 'Subject',
    component: Subject,
    props: true,

  }, 
  {
    path: '/Subject/:id/QnA',
    name: 'SubjectQnA',
    component: SubjectQnA,
    props: true
  },
  {
    path: '/Subject/:id/McQ',
    name: 'SubjectMcQ',
    component: SubjectMcQ,
    props: true
  },
  {
    path: '/Subject/:id/Prep',
    name: 'SubjectPrep',
    component: SubjectPrep,
    props: true
  },
  {
    path: '/Subject/:id/Quiz',
    name: 'SubjectQuiz',
    component: SubjectQuiz,
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router