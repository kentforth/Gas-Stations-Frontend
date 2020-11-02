
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'cars', component: () => import('pages/Cars') },
      { path: 'gas-stations', component: () => import('pages/Gas-Stations') },
    ]
  },
  {
    path: '/cars',
    component: () => import('layouts/Add-ItemLayout'),
    children: [
      { path: 'add', component: () => import('pages/AddCar') },
      { path: 'edit/:id', component: () => import('pages/EditCar') },
    ]
  },
  {
    path: '/gas-stations',
    component: () => import('layouts/Add-ItemLayout'),
    children: [
      { path: 'add', component: () => import('pages/AddGasStation') },
      { path: 'edit/:id', component: () => import('pages/EditGasStation') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
