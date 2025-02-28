<template>
  <q-page>
    <q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label
            >Champion Information Management Interface for League of Legends</q-item-label
          >
          <q-item-label caption>
            This interface provides a comprehensive display of information for champions featured in
            League of Legends. Each champion entry includes their avatar, name, in-game price, and a
            brief description highlighting their abilities, lore, and unique characteristics. In
            addition to viewing existing champions, the interface also offers a functionality to add
            new champions. This ensures that the champion database remains up-to-date and allows
            administrators or authorized users to continuously expand the collection as new
            champions are introduced into the game.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>List Generals</q-item-label>

      <!-- Wrapper for items using flexbox -->
      <div class="row q-gutter-md" style="flex-wrap: wrap">
        <q-slide-item
          v-for="general in storeGenerals.generals"
          :key="general.id"
          class="col-12 col-sm-6 custom-md-30"
          @right="onGeneralSlide($event, general.name, general.id)"
          right-color="negative"
        >
          <template v-slot:right>
            <q-icon name="delete" />
          </template>

          <q-item>
            <q-item-section avatar>
              <q-avatar square>
                <img :src="general.avatar" />
              </q-avatar>
            </q-item-section>
            <q-item-section> {{ general.name }}: {{ general.description }}. </q-item-section>
            <q-item-section side>
              <q-btn
                class="glossy"
                round
                color="secondary"
                icon="link"
                size="10px"
                :href="general.link"
              />
            </q-item-section>
          </q-item>
        </q-slide-item>
      </div>
    </q-list>

    <!-- Add new general form -->
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

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
// No changes required in script section
import { ref, reactive } from 'vue'
import { useStoreGenerals } from '../stores/storeGenerals'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const nameRef = ref(null)
const storeGenerals = useStoreGenerals()

const generalForm = reactive({
  name: '',
  description: '',
})

console.log('General Form:', storeGenerals.deleteGeneral)

const resetGeneralForm = () => {
  generalForm.name = ''
  generalForm.description = ''
  nameRef.value.focus()
}

function addGeneralForm() {
  storeGenerals.addNewGeneral(generalForm)
  resetGeneralForm()
}

const onGeneralSlide = ({ reset }, nameGeneral, idGeneral) => {
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
      useStoreGenerals.deleteGeneral(idGeneral)
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
