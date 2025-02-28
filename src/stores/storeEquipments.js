import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Notify } from 'quasar'
import { useCurrencify } from '../use/useCurrencify'

export const useStoreEquipments = defineStore('equipments', () => {
  // state
  const equipments = ref([
    {
      id: 1,
      name: 'Boots',
      price: 300,
      buy: false,
      idAvatar: 1001,
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/item/1001.png',
    },
    {
      id: 2,
      name: 'Faerie Charm',
      price: 250,
      buy: true,
      idAvatar: 1004,
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/item/1004.png',
    },
    {
      id: 3,
      name: "Knight's Vow",
      price: 2300,
      buy: false,
      idAvatar: 3109,
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/item/3109.png',
    },
    {
      id: 4,
      name: '	Cloak of Agility',
      price: 600,
      buy: true,
      idAvatar: 1018,
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/item/1018.png',
    },
  ])

  //getter
  const balance = computed(() => {
    let totalPrice = 0
    equipments.value.forEach((item) => {
      if (item.buy) totalPrice += item.price
    })
    return useCurrencify(totalPrice)
  })

  // actions
  const addEquipment = (equipmentForm) => {
    const newEquipment = Object.assign({}, equipmentForm, {
      id: equipments.value.length + 1,
      buy: false,
      avatar: `https://ddragon.leagueoflegends.com/cdn/15.4.1/img/item/${equipmentForm.idAvatar}.png`,
    })

    equipments.value.push(newEquipment)
  }

  const deleteEquipment = (idEquipment) => {
    const index = equipments.value.findIndex((equipment) => equipment.id === idEquipment)
    equipments.value.splice(index, 1)
    Notify.create({
      message: 'Equipment deleted successfully!',
      position: 'top-right',
    })
  }

  return { equipments, balance, addEquipment, deleteEquipment }
})
