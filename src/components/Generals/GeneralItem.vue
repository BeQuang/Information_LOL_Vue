<template>
  <q-item>
    <q-item-section avatar>
      <q-avatar square>
        <img :src="general.avatar" />
      </q-avatar>
    </q-item-section>
    <q-item-section> {{ general.name }}: {{ general.description }}. </q-item-section>
    <q-item-section side>
      <q-btn class="glossy" round color="secondary" icon="link" size="10px" :href="general.link" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps } from 'vue'

const { general } = defineProps({
  general: { type: Object, required: true },
})
</script>

<style></style>
