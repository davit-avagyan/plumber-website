import { defineStore } from "pinia"
import { plumberImages } from "~/enums/plumber-images"

export const usePlumberServicesStore = defineStore('plumberServicesStore', {
  state: () => ({
    services: [
      {
        id: 1,
        name: 'Stambyte',
        description: 'Ett stambyte är en omfattande renovering av VVS-systemet i din byggnad. Det inkluderar utbyte av avloppsrör, vattenledningar och ibland även värmesystem. Ett stambyte är avgörande för att säkerställa att din byggnads VVS-system fungerar effektivt och att du undviker framtida problem. Kontakta oss för professionell rådgivning och utförande av stambyten i Stockholm med hög kvalitet och lång erfarenhet.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: 'Price By Phone',
        image: plumberImages.WaterPipes
      },
      {
        id: 2,
        name: 'Service',
        description: 'Hos AM VVS i Stockholm erbjuder vi snabb och pålitlig VVS-service. Med vår breda erfarenhet hanterar vi allt från VVS-installationer till reparationer av vatten, avlopp och värmesystem. Vi betjänar både privatpersoner och företag, och oavsett om det gäller att byta en toalettstol eller installera köksblandare kan du lita på oss för snabb och pålitlig VVS-service.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Services
      },
      {
        id: 3,
        name: 'Installation',
        description: 'Våra VVS-installationstjänster är ledande inom branschen. Med expertis inom VVS-design och installation är vi din pålitliga partner för projekt av alla storlekar. Vi erbjuder skräddarsydda lösningar för VVS-installationer som passar dina behov. Kontakta oss för professionell och effektiv VVS-installation som ger långvarig prestanda och kvalitet.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Installation
      },
      {
        id: 4,
        name: 'Byta handfat',
        description: 'Vi är experter på att byta handfat. Våra handfatinstallationstjänster är snabba och prisvärda. Lita på oss för professionellt handfatsbyte med hög kvalitet och utmärkt utförande. Kontakta oss för en smidig och effektiv handfatsinstallation idag.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.BathroomSink
      },
      {
        id: 5,
        name: 'Byta blandare',
        description: 'Vi är din pålitliga partner för att byta blandare. Våra installatörer har gedigen erfarenhet och expertis inom blandarbyten. Med vår snabba och pålitliga service får du en ny blandare som fungerar felfritt. Kontakta oss för professionellt och smidigt byte av blandare till konkurrenskraftiga priser.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Faucet
      },
      {
        id: 6,
        name: 'Varmvattenberedare',
        description: 'Behöver du installera eller byta en varmvattenberedare? Vi är experter på varmvattenberedare och erbjuder pålitliga installations- och utbyteslösningar. Vårt team av professionella tekniker säkerställer att din varmvattenberedare fungerar effektivt. Kontakta oss för expertservice och högkvalitativa varmvattenberedare till konkurrenskraftiga priser.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.WaterBoilerNew
      },
      {
        id: 7,
        name: 'Byta kommod',
        description: 'Behöver du genomföra ett kommodbyte? Våra kompetenta installatörer erbjuder pålitliga tjänster för kommodbyte. Vi säkerställer att du får en smidig och högkvalitativ lösning. Kontakta oss för expertis och konkurrenskraftiga priser vid kommodbyte. Lita på oss för att förnya ditt badrum.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.BathroomCommode
      },
      {
        id: 8,
        name: 'Värme',
        description: 'Oavsett vilken uppvärmningsmetod du väljer, är det viktigt att ha en effektiv och professionell installation samt regelbunden underhåll. Dessutom kan våra experter  inom VVS och uppvärmning hjälpa dig att optimera ditt system för att spara energi och minska kostnaderna.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.HeatingSystem
      },
      {
        id: 9,
        name: 'VVS Badrum',
        description: 'När det kommer till badrumsrenovering, är rätt VVS-anslutningar av yttersta vikt. Hos oss erbjuder vi professionell expertis inom "Badrum VVS" för att skapa det badrum du drömmer om.\n' +
          'Våra tjänster inkluderar:\n' +
          '- Kvalificerad rörinstallation\n' +
          '- Optimala vatten- och avloppslösningar\n' +
          '- Energieffektiva sanitetsfixturer\n' +
          '- Personlig designanpassning\n' +
          '\n' +
          'Kontakta oss idag för att diskutera dina projektplaner inom Badrum VVS.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Bathroom
      },
      {
        id: 10,
        name: 'Byta element',
        description: 'Vi erbjuder expertis inom "elementbyte" för att säkerställa att ditt hem håller rätt temperatur och energieffektivitet.\n' +
          'Våra tjänster inkluderar:\n' +
          '- Snabbt och professionellt elementbyte\n' +
          '- Energisnåla och moderna element\n' +
          '- Personlig anpassning efter ditt hem\n' +
          'Låt oss hjälpa dig att skapa ett behagligt inomhusklimat med våra elementbytestjänster. Kontakta oss idag för att få värmen tillbaka i ditt hem.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Radiator
      },
      {
        id: 11,
        name: 'Vattenutkastare',
        description: 'Vattenutkastare är en oumbärlig del av en välskött trädgård. Vår expertis inom "vattenutkastare" hjälper dig att bevattna din trädgård effektivt och spara vatten.\n' +
          'Med våra vattenutkastare får du en grönare och mer hållbar trädgård. Kontakta oss idag för att diskutera dina behov.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.WaterEjector
      },
      {
        id: 12,
        name: 'VVS Kök',
        description: 'behöver du professionell hjälp med "VVS kök". Vi erbjuder skräddarsydda lösningar för ditt kök.\n' +
          'Våra VVS-tjänster inkluderar:\n' +
          '\n' +
          '- Expertis inom rörinstallation\n' +
          '- Effektiva vatten- och avloppslösningar\n' +
          '- Energieffektiva kranar och sanitetsfixturer\n' +
          '- Anpassning efter din köksdesign\n' +
          '\n' +
          'Låt oss hjälpa dig att skapa det kök du alltid drömt om. Kontakta oss idag för att diskutera dina behov inom VVS',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.Kitchen
      },
      {
        id: 13,
        name: 'Vattenmätarkonsol',
        description: 'En vattenmätarkonsol är en avgörande del av vattenhanteringen i ditt hem. Med vår expertis inom "vattenmätarkonsol" kan du säkerställa noggrann mätning och kontroll av din vatten användning.\n' +
          'För att säkerställa att din vattenmätning är korrekt och effektiv, kontakta oss idag för att diskutera dina behov av vattenmätarkonsol.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.WaterMeter
      },
      {
        id: 14,
        name: 'Vatten och avlopp',
        description: 'Effektiv hantering av vatten och avlopp är avgörande för ditt hem.\n' +
          'Våra tjänster inkluderar:\n' +
          '- Installation och underhåll av VVS-system\n' +
          '- Effektiva vatten- och avloppslösningar\n' +
          '- Expertis inom reparation och rengöring\n' +
          'Kontakta oss idag för att diskutera dina behov gällande vatten och avlopp.',
        paymentInfo: 'Priset är efter ROT. Bilframkörning på 295 kr tillkommer. Önskas bortforsling tillkommer 395 kr.',
        price: '50 EUR',
        image: plumberImages.WaterAndSewer
      }
    ]
  }),
  getters: {
    getAllServices: (state) => state.services
  }
})