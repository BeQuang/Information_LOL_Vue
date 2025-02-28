<template>
  <q-page>
    <q-list bordered padding>
      <EquipmentHeader />
      <EquipmentList />
    </q-list>

    <EquipmentsBalance />
    <EquipmentAdd />
  </q-page>
</template>

<script setup>
import EquipmentsBalance from '../components/Equipments/EquipmentsBalance.vue'
import EquipmentAdd from '../components/Equipments/EquipmentAdd.vue'
import EquipmentList from '../components/Equipments/EquipmentList.vue'
import EquipmentHeader from '../components/Equipments/EquipmentHeader.vue'
</script>
