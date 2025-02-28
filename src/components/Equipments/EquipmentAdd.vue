<template>
  <div>
    <q-item-label header>Add Card</q-item-label>
    <q-form @submit="addEquipmentForm" class="row q-pa-sm q-gutter-sm">
      <div class="col">
        <q-input
          v-model="equipmentForm.name"
          ref="nameRef"
          standout="bg-primary text-white"
          dense
          placeholder="Name"
        />
      </div>
      <div class="col">
        <q-input
          v-model.number="equipmentForm.price"
          standout="bg-primary text-white"
          dense
          placeholder="Price"
          type="number"
          step="0.01"
        />
      </div>
      <div class="col">
        <q-input
          v-model.number="equipmentForm.idAvatar"
          standout="bg-primary text-white"
          dense
          placeholder="IdAvatar"
          type="number"
        />
      </div>
      <div class="col-auto">
        <q-btn round color="primary" icon="add" type="submit" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { useStoreEquipments } from '../../stores/storeEquipments'

const nameRef = ref(null)
const storeEquipments = useStoreEquipments()

const equipmentForm = reactive({
  name: '',
  price: '',
  idAvatar: '',
})

const resetEquipmentForm = () => {
  equipmentForm.name = ''
  equipmentForm.price = ''
  equipmentForm.idAvatar = ''
  nameRef.value.focus()
}

function addEquipmentForm() {
  storeEquipments.addEquipment(equipmentForm)
  resetEquipmentForm()
}
</script>

<style></style>
