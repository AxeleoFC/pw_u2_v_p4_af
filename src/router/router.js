import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        component: ()=> import ('../modulos/pokemon/page/PaginaBienvenida.vue')
    },
    {
        path: "/juego",
        component: ()=> import ('../modulos/pokemon/page/PaginaJuego')
    },
    {
        path: "/premios",
        component: ()=> import ('../modulos/pokemon/page/PaginaPremios.vue')
    },
    {
        path: "/juegoPokemon",
        component: ()=> import ('../modulos/pokemon/page/PaginaPoke')
    },
    {
        path: "/:pathMach(.*)*",
        component: ()=> import ('../modulos/pokemon/page/Pagina404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

export default router