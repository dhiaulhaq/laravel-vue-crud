import Vue from 'vue'
import VueRouter from 'vue-router'
import AllUsers from './components/AllUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';
Vue.use(VueRouter);

const routes = [{
        name: 'home',
        path: '/',
        component: AllUsers
    },
    {
        name: 'create',
        path: '/create',
        component: CreateUser
    }
];

export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({
        y: 0
    }),
    routes
})
