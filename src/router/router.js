import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        component: ()=> import ('../modulos/pokemon/page/PaginaInicial.vue')
    },
    {
        path: "/juego",
        component: ()=> import ('../modulos/pokemon/page/PaginaPoke.vue')
    },
    {
        path: "/reglas",
        component: ()=> import ('../modulos/pokemon/page/PaginaReglas.vue')
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