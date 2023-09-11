import { createRouter,RouteRecordRaw,createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue"
import CharacterView from "../views/Character/CharacterView.vue"
 const routes:RouteRecordRaw[] =[
{
    path:"/",
    children:[
        {
            path:"",
            name:"home",
            component:HomeView,
        },
        {
            path:":id",
            name:"character-view",
            component:CharacterView,
        }
    ]
}
]

// history
const history= createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router