
import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
const About = () => import('../views/About.vue');

const routes = [
    {path: '/', component: Home},
    {
        path:'/about/:code/:id', 
        name:'About', 
        component: About,
        props: true,

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;