require('./bootstrap');
window.Vue = require('vue')
import VueRouter from 'vue-router';
import store from './store/index';


Vue.use(VueRouter);
;
import App from './views/App';
import Hello from './views/Hello';
import Home from './views/Home';
import ArticlesIndex from './views/ArticlesIndex';
import ArticlesEdit from './views/ArticlesEdit';
import PlayersIndex from './views/PlayersIndex';
import players from './components/Players.vue';
import createPlayer from './components/CreatePlayer.vue';

const router = new VueRouter ({
    mode: 'history',
    routes:[
        {
            path: '/',
            name:'home',
            component:Home
        },
        {
            path: '/hello',
            name:'hello',
            component:Hello
        },
        {
            path: '/articles',
            name:'articles.index',
            component:ArticlesIndex
        },
        {
            path: '/articles/:id/edit',
            name:'articles.edit',
            component:ArticlesEdit
        },
        ,
        {
            path: '/players',
            name:'players',
            component:players
        },
        {
            path: '/create-player',
            name:'create-player',
            component:createPlayer
        },
        {
            path: '/manage-players',
            name:'manage-players',
            component:PlayersIndex
        },
    ]
});

// Vue.component('players',require('./components/Players.vue'));
// Vue.component('createPlayer',require('./components/CreatePlayer.vue'));

const app = new Vue({
    el:'#app',
    components:{
        App,
    },
    router,
    store
})
