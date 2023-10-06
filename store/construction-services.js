import { defineStore } from "pinia"
import { constructionImages } from "~/enums/construction-images"
import TotalRenovation from "assets/images/construction/total-renovation.jpg";

export const useConstructingServicesStore = defineStore('constructingServicesStore', {
  state: () => ({
    services: [
      {
        id: 1,
        name: 'Badrumsrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: constructionImages.BathroomRenovation
      },
      {
        id: 2,
        name: 'Köksrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: constructionImages.KitchenRenovation
      },
      {
        id: 3,
        name: 'Totalrenovering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: constructionImages.TotalRenovation
      }
    ]
  }),
  getters: {
    getAllServices: (state) => state.services
  }
})