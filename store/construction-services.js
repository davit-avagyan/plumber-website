import { defineStore } from "pinia"

export const useConstructingServicesStore = defineStore('constructingServicesStore', {
  state: () => ({
    services: [
      {
        id: 1,
        name: 'Badrumsrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: 'construction/bathroom-renovation.jpg'
      },
      {
        id: 2,
        name: 'Köksrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: 'construction/kitchen-renovation.jpg'
      },
      {
        id: 3,
        name: 'Totalrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: 'construction/total-renovation.jpg'
      }
    ]
  }),
  getters: {
    getAllServices: (state) => state.services
  }
})