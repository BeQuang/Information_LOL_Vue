<template>
  <div>
    <q-item-label header>Appearance</q-item-label>
    <q-item tag="label" v-ripple>
      <q-item-section avatar>
        <q-radio v-model="storeSettings.settings.darkMode" :val="false" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Light</q-item-label>
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section avatar>
        <q-radio v-model="storeSettings.settings.darkMode" :val="true" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Dark</q-item-label>
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section avatar>
        <q-radio v-model="storeSettings.settings.darkMode" val="auto" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Auto</q-item-label>
        <q-item-label caption>Follow the preference of your device</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { useStoreSettings } from '../../stores/storeSettings'

const storeSettings = useStoreSettings()
</script>
