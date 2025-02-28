import PageGeneral from 'pages/PageGenerals.vue'
import PageEquipments from 'pages/PageEquipments.vue'
import PageSettings from 'pages/PageSettings.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: PageGeneral },
      { path: 'equipments', component: PageEquipments },
      { path: 'settings', component: PageSettings },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
