<template>
  <div>
    <q-item-label header>Total Price Equipments</q-item-label>
    <div class="row q-pa-sm q-gutter-sm q-px-md">
      <div class="col text-h6">Balance:</div>
      <div class="col text-h6 text-right text-secondary">{{ storeEquipments.balance }}</div>
    </div>
    <q-separator spaced />
  </div>
</template>

<script setup>
import { useStoreEquipments } from '../../stores/storeEquipments'

const storeEquipments = useStoreEquipments()
</script>

<style></style>
