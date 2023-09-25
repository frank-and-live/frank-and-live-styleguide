import { createRouter, createWebHistory } from 'vue-router'
import AnimationsView from '@/views/AnimationsView.vue'
import BadgesView from '@/views/BadgesView.vue'
import ButtonsView from '@/views/ButtonsView.vue'
import ChecksView from '@/views/ChecksView.vue'
import ColorsView from '@/views/ColorsView.vue'
import EmailSignaturesView from '@/views/EmailSignaturesView.vue'
import HomeView from '@/views/HomeView.vue'
import InputsView from '@/views/InputsView.vue'
import LogosView from '@/views/LogosView.vue'
import SelectsView from '@/views/SelectsView.vue'
import ShadowsView from '@/views/ShadowsView.vue'
import SpacingView from '@/views/SpacingView.vue'
import TablesView from '@/views/TablesView.vue'
import TextareasView from '@/views/TextareasView.vue'
import TextView from '@/views/TextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/animations',
      name: 'animations',
      component: AnimationsView,
    },
    {
      path: '/badges',
      name: 'badges',
      component: BadgesView,
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: ButtonsView,
    },
    {
      path: '/checks',
      name: 'checks',
      component: ChecksView,
    },
    {
      path: '/colors',
      name: 'colors',
      component: ColorsView,
    },
    {
      path: '/emailsignatures',
      name: 'emailsignatures',
      component: EmailSignaturesView,
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: InputsView,
    },
    {
      path: '/logos',
      name: 'logos',
      component: LogosView,
    },
    {
      path: '/selects',
      name: 'selects',
      component: SelectsView,
    },
    {
      path: '/shadows',
      name: 'shadows',
      component: ShadowsView,
    },
    {
      path: '/spacing',
      name: 'spacing',
      component: SpacingView,
    },
    {
      path: '/tables',
      name: 'tables',
      component: TablesView,
    },
    {
      path: '/textareas',
      name: 'textareas',
      component: TextareasView,
    },
    {
      path: '/text',
      name: 'text',
      component: TextView,
    },
  ],
})

export default router
