<template>
  <div>
    <q-item-label header>List Equipments</q-item-label>
    <NothingEquipment v-if="!storeEquipments.equipments.length" />
    <Sortable :list="storeEquipments.equipments" item-key="id" tag="div" class="row q-gutter-md">
      <template #item="{ element }">
        <!-- Đặt col ở đây -->
        <div class="col-12 col-sm-6 custom-md-30">
          <q-slide-item
            @right="(details) => onEquipmentSlide(details, element)"
            right-color="negative"
          >
            <template v-slot:right>
              <q-icon name="delete" />
            </template>
            <EquipmentItem :item="element" />
          </q-slide-item>
        </div>
      </template>
    </Sortable>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

import { useStoreEquipments } from '../../stores/storeEquipments'
import { useStoreSettings } from '../../stores/storeSettings'
import { useCurrencify } from '../../use/useCurrencify'
import { useColorClass } from '../../use/useColorClass'
import EquipmentItem from './EquipmentItem.vue'
import NothingEquipment from './NothingEquipment.vue'
import { Sortable } from 'sortablejs-vue3'

const $q = useQuasar()
const storeEquipments = useStoreEquipments()
const storeSettings = useStoreSettings()

const onEquipmentSlide = ({ reset }, equipment) => {
  if (storeSettings.settings.promptToDelete) {
    promptToDelete(reset, equipment)
  } else {
    storeEquipments.deleteEquipment(equipment.id)
  }
}

const promptToDelete = (reset, equipment) => {
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
