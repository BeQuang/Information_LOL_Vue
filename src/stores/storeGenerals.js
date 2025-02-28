import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { ref } from 'vue'

export const useStoreGenerals = defineStore('generals', () => {
  const generals = ref([
    {
      id: 1,
      name: 'Aatrox',
      description: 'Demon Sword Darkin',
      link: 'https://www.leagueoflegends.com/vi-vn/champions/aatrox/',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Aatrox.png',
    },
    {
      id: 2,
      name: 'Ahri',
      description: 'Nine-Tailed Fox',
      link: 'https://www.leagueoflegends.com/vi-vn/champions/ahri/',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Ahri.png',
    },
    {
      id: 3,
      name: 'Akali',
      description: 'Lone Assassin',
      link: 'https://www.leagueoflegends.com/vi-vn/champions/akali/',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Akali.png',
    },
    {
      id: 4,
      name: 'Heimerdinger',
      description: 'Prominent inventor',
      link: 'https://www.leagueoflegends.com/vi-vn/champions/heimerdinger/',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Heimerdinger.png',
    },
  ])

  const addNewGeneral = (generalForm) => {
    const newGeneral = Object.assign({}, generalForm, {
      id: generals.value.length + 1,
      link: `https://www.leagueoflegends.com/vi-vn/champions/${generalForm.name.toLowerCase()}/`,
      avatar: `https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/${generalForm.name}.png`,
    })

    generals.value.push(newGeneral)
  }

  const deleteGeneral = (idGeneral) => {
    const index = generals.value.findIndex((general) => general.id === idGeneral)
    generals.value.splice(index, 1)
    Notify.create({
      message: 'General deleted successfully!',
      position: 'top-right',
    })
  }

  return { generals, addNewGeneral, deleteGeneral }
})
