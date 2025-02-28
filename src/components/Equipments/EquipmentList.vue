<template>
  <div>
    <q-item-label header>List Equipments</q-item-label>
    <div class="row q-gutter-md" style="flex-wrap: wrap">
      <q-slide-item
        v-for="item in storeEquipments.equipments"
        :key="item.id"
        class="col-12 col-sm-6 custom-md-30"
        @right="(details) => onEquipmentSlide(details, item)"
        right-color="negative"
      >
        <template v-slot:right>
          <q-icon name="delete" />
        </template>
        <!-- Mỗi q-slide-item chỉ cần chứa 1 q-item -->
        <EquipmentItem :item="item" />
      </q-slide-item>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

import { useStoreEquipments } from '../../stores/storeEquipments'
import { useCurrencify } from '../../use/useCurrencify'
import { useColorClass } from '../../use/useColorClass'
import EquipmentItem from './EquipmentItem.vue'

const $q = useQuasar()
const storeEquipments = useStoreEquipments()

const onEquipmentSlide = ({ reset }, equipment) => {
  $q.dialog({
    title: 'Delete Equipment',
    message: `
      Delete this 
      <span class="text-secondary">${equipment.name}</span>
      ? </br>
      Price: $
      <span class="${useColorClass(equipment.price, 1300)}">${useCurrencify(equipment.price)}</span>
    `,
    persistent: true,
    html: true,
    ok: {
      label: 'Delete',
      color: 'negative',
      noCaps: true,
    },
    cancel: {
      color: 'primary',
      noCaps: true,
    },
  })
    .onOk(() => {
      storeEquipments.deleteEquipment(equipment.id)
      reset()
    })
    .onCancel(() => {
      reset()
    })
}
</script>

<style scoped>
.color-icon {
  color: #1e4258 !important;
}

@media (min-width: 1024px) {
  .custom-md-30 {
    flex: 0 0 30%;
    max-width: 30%;
  }
}
@media (min-width: 600px) and (max-width: 1023px) {
  .col-sm-6 {
    flex: 0 0 45%;
    max-width: 45%;
  }
}
</style>
