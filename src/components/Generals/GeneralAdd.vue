<template>
  <div>
    <q-item-label header>Add General</q-item-label>
    <q-form @submit="addGeneralForm" class="row q-pa-sm q-gutter-sm">
      <div class="col">
        <q-input
          v-model="generalForm.name"
          ref="nameRef"
          standout="bg-primary text-white"
          dense
          placeholder="Name"
        />
      </div>
      <div class="col">
        <q-input
          v-model="generalForm.description"
          standout="bg-primary text-white"
          dense
          placeholder="Description"
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
import { useStoreGenerals } from '../../stores/storeGenerals'

const nameRef = ref(null)
const storeGenerals = useStoreGenerals()

const generalForm = reactive({
  name: '',
  description: '',
})

const resetGeneralForm = () => {
  generalForm.name = ''
  generalForm.description = ''
  nameRef.value.focus()
}

function addGeneralForm() {
  storeGenerals.addNewGeneral(generalForm)
  resetGeneralForm()
}
</script>

<style></style>
