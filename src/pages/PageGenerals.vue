<template>
  <q-page>
    <q-list bordered padding>
      <GeneralHeader />
      <GeneralList />
    </q-list>

    <!-- Add new general form -->
    <GeneralAdd />
  </q-page>
</template>

<script setup>
import GeneralHeader from '../components/Generals/GeneralHeader.vue'
import GeneralList from '../components/Generals/GeneralList.vue'
import GeneralAdd from '../components/Generals/GeneralAdd.vue'
</script>
