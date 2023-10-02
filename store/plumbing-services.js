import { defineStore } from "pinia"

export const usePlumberServicesStore = defineStore('plumberServicesStore', {
  state: () => ({
    services: [
      {
        id: 1,
        name: 'VVS tjänster',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/plumbing-service.jpg'
      },
      {
        id: 2,
        name: 'Stambyte',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: 'services/water-pipes.jpg'
      },
      {
        id: 3,
        name: 'Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/services.jpg'
      },
      {
        id: 4,
        name: 'Installation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptate.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/installation.jpg'
      },
      {
        id: 5,
        name: 'Byta handfat',
        description: 'Sluta oroa dig för ett gammalt handfat - låt oss byta det åt dig',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/sink.jpg'
      },
      {
        id: 6,
        name: 'Rörmokare',
        description: 'Stressa inte över VVS-problem - låt våra auktoriserade rörmokare i Stockholm hjälpa dig',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR'
      },
      {
        id: 7,
        name: 'ROT och RUT Avdrag',
        description: 'Auktoriserade VVS-tjänster med ROT & RUT Avdrag | Säkra Rör & Bygg',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR'
      },
      {
        id: 8,
        name: 'Byta blandare',
        description: 'Sluta oroa dig för en gammal blandare - låt oss hjälpa dig | Säkra Rör & Bygg',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/faucet.jpg'
      },
      {
        id: 9,
        name: 'Varmvattenberedare',
        description: 'Behöver du installera eller byta din varmvattenberedare? Lita på Säkra Rör!',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/water-boiler.jpg'
      },
      {
        id: 10,
        name: 'Byta kommod',
        description: 'Stressa inte över din gamla kommod - låt oss hjälpa dig med byte och installation.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/bathroom-commode.jpg'
      },
      {
        id: 11,
        name: 'Värme',
        description: 'Säkrarör hjälper er att hitta det värmesystem som passar bäst beroende på typ av boendesituation.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/heating-system.jpg'
      },
      {
        id: 12,
        name: 'VVS Badrum',
        description: 'Badrummet är inte bara ett funktionellt utrymme; det är ofta en oas av avkoppling och välbefinnande.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/bathroom.jpg'
      },
      {
        id: 13,
        name: 'Byta element',
        description: 'Ska du installera nya element eller byta ut befintliga? Lita på Säkra Rör för pålitliga lösningar!',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR'
      },
      {
        id: 14,
        name: 'Vattenutkastare',
        description: 'Stressa inte över en trasig vattenutkastare - låt oss hjälpa dig',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/water-ejector.jpg'
      },
      {
        id: 15,
        name: 'VVS Kök',
        description: 'Oroa dig inte för ditt köks VVS-arbete - låt oss ta hand om det',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/kitchen.jpg'
      },
      {
        id: 16,
        name: 'Vattenmätarkonsol',
        description: 'Stressa inte över en trasig vattenmätarkonsol - låt oss hjälpa dig',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/water-meter.jpg'
      },
      {
        id: 17,
        name: 'Vatten och avlopp',
        description: 'Säkrarör hjälper dig med all typ av avloppsproblem. Vi inspekterar, underhåller och åtgärdar.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: 'services/water-and-sewer.jpg'
      }
    ]
  }),
  getters: {
    getAllServices: (state) => state.services
  }
})