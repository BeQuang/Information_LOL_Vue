<template>
  <q-item>
    <q-item-section avatar>
      <q-avatar square>
        <img :src="item.avatar" />
      </q-avatar>
    </q-item-section>
    <q-item-section>{{ item.name }}.</q-item-section>
    <q-item-section side>
      <q-item-label caption :class="useColorClass(item.price, 1300)">
        ${{ useCurrencify(item.price) }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        v-if="!item.buy"
        @click="toggleBuy(item)"
        icon="shopping_cart"
        size="10px"
        color="secondary"
        class="color-icon"
      />
      <q-btn
        v-else
        icon="paid"
        @click="toggleBuy(item)"
        size="10px"
        color="secondary"
        class="color-icon"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps } from 'vue'

import { useCurrencify } from '../../use/useCurrencify'
import { useColorClass } from '../../use/useColorClass'

const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

function toggleBuy(item) {
  item.buy = !item.buy
}
</script>

<style></style>
