import { ListComponent } from "./pages/list.js"
import { FormComponent } from "./pages/form.js"
import { AboutComponent} from "./pages/about.js"

export const routes = [
    {
        path: '/',
        component: AboutComponent
    },
    {
        path: '/list',
        component: ListComponent
    },
    {
        path: '/view/:id',
        component: FormComponent,
        name: 'Visual'
    },
    {
        path: '/edit/:id',
        component: FormComponent,
        name: 'Editar'
    },
    {
        path: '/excluir/:id',
        component: FormComponent,
        name: 'Excluir'
    }
]