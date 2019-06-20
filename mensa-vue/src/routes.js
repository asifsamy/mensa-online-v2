// D1. Import the component from the user-components folder.

import menu from './user-components/menu.vue'
import index from './user-components/index.vue'
import test_api from './user-components/test_api.vue'
import AppLayout from './user-components/AppLayout.vue'
import cart from './user-components/cart.vue'

const routes = [
    // D2. Create the path object which will be used to call the component

    // New routes

    {
        path: '/',
        component: AppLayout,
        redirect:'index',
        children:[
            {
                name:'index',
                path:'index',
                component: index,
                default:true,
                // Use lazyloading to import the components from folders
            },
            {
                name:'menu',
                path:'menu',
                component: menu,
            },
            {
                name:'cart',
                path:'cart',
                component: cart,
            },
        ]
    }

    // Old routes

    // {path:'/menu', component:menu},
    // {path:'/index', component:index},
    // {path:'/', component:AppLayout},
    // {path:'/test_api', component: test_api},
    
];

// D3. Export the routes as default. This will be used when Vue start to render the DOM.
export default routes;
