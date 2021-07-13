const routes = [
    {
        path: '',
        component: () => import('../Pages/products/list.vue'),
        name: 'product-list'
    },
    {
        path: '/product/add',
        component: () => import('../Pages/products/add.vue'),
        name: 'product-add'   
    },
    {
        path: '/product/edit/:id',
        component: () => import('../Pages/products/edit.vue'),
        name: 'product-edit'   
    }
]

export default routes