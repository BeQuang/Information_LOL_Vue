<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-avatar square class="avatar-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/vi/1/1a/Logo_of_the_League_of_Legends_World_Championship.svg"
              />
            </q-avatar>
            Leagues of Legends
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
      :width="250"
      :breakpoint="767"
    >
      <q-list>
        <q-item-label header class="text-white">Navigation</q-item-label>

        <NavLinks v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLinks from 'components/Nav/NavLinks.vue'

const linksList = [
  {
    title: 'Generals',
    icon: 'supervisor_account',
    link: '/',
  },
  {
    title: 'Equipments',
    icon: 'construction',
    link: '/equipments',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.avatar-white img {
  filter: brightness(0) invert(1);
}
</style>
