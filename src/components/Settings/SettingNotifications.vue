<template>
  <div>
    <q-item-label header>Notifications</q-item-label>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Prompt to Delete</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle v-model="storeSettings.settings.promptToDelete" />
      </q-item-section>
    </q-item>

    <q-item tag="lable" v-ripple>
      <q-item-section>
        <q-input
          outlined
          v-model="storeSettings.settings.currentcySymbol"
          label="Currently Symbol"
        />
      </q-item-section>
    </q-item>

    <q-separator spaced />
  </div>
</template>

<script setup>
import { useStoreSettings } from '../../stores/storeSettings'

const storeSettings = useStoreSettings()
</script>
