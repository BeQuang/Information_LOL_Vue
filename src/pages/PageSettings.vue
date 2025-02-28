<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered padding>
        <SettingNotifications />
        <SettingAppearance />
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import SettingAppearance from '../components/Settings/SettingAppearance.vue'
import SettingNotifications from '../components/Settings/SettingNotifications.vue'
</script>
