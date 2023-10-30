<template>
  <div class="modal-overlay" @click="closeModal"></div>

  <div class="modal">
    <h2 class="text-gray-400 font-bold mb-2 text-xl">{{ serviceText }}</h2>
    <h2 class="text-gray-400 font-bold mb-7 text-xl">{{ priceInfo }}</h2>
    <form @submit.prevent="sendEmail" class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.firstName}"
            for="grid-first-name"
          >
            FÖRNAMN *
          </label>
          <input
            v-bind="firstName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            :class="{'mb-3 border-red-300': errors.firstName}"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red-300">{{ errors.firstName }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.lastName}"
            for="grid-last-name">
            Efternamn *
          </label>
          <input
            v-bind="lastName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.lastName}"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
          <p class="text-red-300">{{ errors.lastName }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.email}"
            for="grid-email"
          >
            E-postadress *
          </label>
          <input
            v-bind="email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.email}"
            id="grid-email"
            type="email"
            placeholder="example@example.com"
          />
          <p class="text-red-300">{{ errors.email }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.phone}"
            for="grid-phone"
          >
            Telefonnummer *
          </label>
          <input
            v-bind="phone"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.phone}"
            id="grid-phone"
            type="tel"
            placeholder="+111111111111"
          />
          <p class="text-red-300">{{ errors.phone }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.zipCode}"
            for="grid-zipCode"
          >
            Postort *
          </label>
          <input
            v-bind="zipCode"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.zipCode}"
            id="grid-zipCode"
            type="text"
            placeholder="Ange postort"
          />
          <p class="text-red-300">{{ errors.zipCode }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.requiredDate}"
            for="grid-requiredDate"
          >
            Önskat datum *
          </label>
          <select
            v-bind="requiredDate"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.requiredDate}"
            id="grid-zipCode"
          >
            <option disabled selected value="">När önskar du att arbetet ska utföras?</option>
            <option
              v-for="option in requiredDateOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <p class="text-red-300">{{ errors.requiredDate }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6" v-if="showDatePicker">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': dateError}"
            for="grid-requiredDate"
          >
            Välj önskat datum
          </label>
          <input
            @blur="checkDateValue"
            type="date"
            v-model="date"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'!text-red-300': dateError}"
            id="grid-requiredDate"
          />
          <p class="text-red-300">{{ dateError }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            :class="{'!text-red-300': errors.message}"
            for="grid-message"
          >
            Ytterligare information *
          </label>
          <textarea
            v-bind="message"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{'mb-3 border-red-300': errors.message}"
            id="grid-message"
            type="tel"
            placeholder="Type here...."
          />
          <p class="text-red-300">{{ errors.message }}</p>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="action-submit-btn">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {useForm} from "vee-validate"
import * as yup from 'yup'
import {useFetch} from "#app"

const {service} = defineProps({
  service: {
    type: Object,
    required: true
  }
})
const serviceText = computed(() => `The service that you interested in is ${service.name}`)
const priceInfo = computed(() => service.price ? `The price for chosen service starting from ${service.price}` : 'For price please contact to us!')
const requiredDateOptions = ref([
  {id: 1, value: 'asap', text: 'Så snart som möjligt'},
  {id: 2, value: 'within-a-week', text: 'Inom en vecka'},
  {id: 3, value: 'within-a-month', text: 'Inom en månad'},
  {id: 4, value: 'on-a-specific-date', text: 'Vid ett specifikt datum'},
])
const showDatePicker = computed(() => unref(requiredDate).value === 'on-a-specific-date')
const date = ref(null)
const dateError = ref('')
const checkDateValue = () => {
  if (!date.value) {
    dateError.value = 'Date is required!'
    return
  }
  if (!(new Date(date.value) > new Date())) {
    dateError.value = 'Date should be in future!'
    return
  }
  dateError.value = ''
}

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const {errors, handleSubmit, defineInputBinds} = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required('First Name is required!'),
    lastName: yup.string().required('Last Name is required!'),
    email: yup.string().email('Email must be a valid email').required('Email is required!'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required!'),
    message: yup.string().required('Message is required!'),
    zipCode: yup.string().required('Zip Code is required!'),
    requiredDate: yup.string().required('Required Date is required!')
    // password: yup.string().min(6).required(),
  }),
});

const firstName = defineInputBinds('firstName')
const lastName = defineInputBinds('lastName')
const email = defineInputBinds('email')
const phone = defineInputBinds('phone')
const message = defineInputBinds('message')
const zipCode = defineInputBinds('zipCode')
const requiredDate = defineInputBinds('requiredDate')

const sendEmail = handleSubmit(async (values) => {
  console.log(date.value)
  if (unref(requiredDate) === 'on-a-specific-date' && !date.value) {
    dateError.value = 'Date is required!'
    return
  }
  const { data } = await useFetch('/api/sendMail', {
    method: 'POST',
    body: values
  })
  closeModal()
  console.log('data from modal', data)
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  //height: fit-content;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}

.modal-overlay {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}
</style>