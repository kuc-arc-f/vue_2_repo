import Vue from 'vue'
import Router from 'vue-router'
import page2 from '../components/page2'
import page3 from '../components/page3'

import home from '../components/Home'
import about from '../components/About'
//import FlashMessage from '../components/Layouts/FlashMessage'

import tasksIndex from '../components/Tasks/Index'
import tasksNew from '../components/Tasks/new'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'
/* repos */
import reposIndex from '../components/Repos/Index'
import reposNew from '../components/Repos/new'
import reposShow from '../components/Repos/show'
import reposEdit from '../components/Repos/edit'

//Vue.component('flash-message', require('../components/Layouts/FlashMessage.vue') )

Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        { path: '/page2', component: page2 },
        { path: '/page3', component: page3 },
        /* tasks */
        { path: '/tasks', component: tasksIndex },    
        { path: '/tasks/new', component: tasksNew },
        { path: '/tasks/show/:id', component: tasksShow },
        { path: '/tasks/edit/:id', component: tasksEdit },
        /* repos */
        { path: '/repos', component: reposIndex },
        { path: '/repos/new', component: reposNew },
        { path: '/repos/show/:id', component: reposShow },
        { path: '/repos/edit/:id', component: reposEdit },

    ]
})
