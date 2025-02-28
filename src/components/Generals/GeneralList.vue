<template>
  <div>
    <q-item-label header>List Generals</q-item-label>
    <NothingGeneral v-if="!storeGenerals.generals.length" />
    <Sortable :list="storeGenerals.generals" item-key="id" tag="div" class="row q-gutter-md">
      <template #item="{ element }">
        <div class="col-12 col-sm-6 custom-md-30">
          <q-slide-item
            @right="onGeneralSlide($event, element.name, element.id)"
            right-color="negative"
          >
            <template v-slot:right>
              <q-icon name="delete" />
            </template>
            <GeneralItem :general="element" />
          </q-slide-item>
        </div>
      </template>
    </Sortable>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useStoreGenerals } from '../../stores/storeGenerals'
import { useStoreSettings } from '../../stores/storeSettings'
import GeneralItem from './GeneralItem.vue'
import NothingGeneral from './NothingGeneral.vue'
import { Sortable } from 'sortablejs-vue3'

const storeGenerals = useStoreGenerals()
const storeSettings = useStoreSettings()
const $q = useQuasar()

const onGeneralSlide = ({ reset }, nameGeneral, idGeneral) => {
  if (storeSettings.settings.promptToDelete) {
    promptToDelete(reset, nameGeneral, idGeneral)
  } else {
    storeGenerals.deleteGeneral(idGeneral)
  }
}

const promptToDelete = (reset, nameGeneral, idGeneral) => {
  $q.dialog({
    title: 'Delete General',
    message: `Delete this ${nameGeneral}?`,
    persistent: true,
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
      storeGenerals.deleteGeneral(idGeneral)
      reset()
    })
    .onCancel(() => {
      reset()
    })
}
</script>

<style scoped>
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
