<template>
  <div>
    <form @submit.prevent="sendEmail" class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
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
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
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
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
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
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
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
            placeholder="111111111111"
          />
          <p class="text-red-300">{{ errors.phone }}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
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
            placeholder="Meddelande här..."
          />
          <p class="text-red-300">{{ errors.message }}</p>
        </div>
      </div>
      <div class="-mx-3 mb-6 px-3">
        <CommonDragAndDrop
          id="my-file"
          @input="uploadedFiles"
        />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="action-submit-btn">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUploadedImages } from "~/store/uploaded-images"
import {useForm} from "vee-validate"
import * as yup from 'yup'
import {useFetch} from "#app"
import {storeToRefs} from "pinia";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const {errors, handleSubmit, defineInputBinds} = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required('First Name is required!'),
    lastName: yup.string().required('Last Name is required!'),
    email: yup.string().email('Email must be a valid email').required('Email is required!'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required!'),
    message: yup.string().required('Message is required!'),
    // password: yup.string().min(6).required(),
  }),
});

const firstName = defineInputBinds('firstName')
const lastName = defineInputBinds('lastName')
const email = defineInputBinds('email')
const phone = defineInputBinds('phone')
const message = defineInputBinds('message')

const files = ref([])
const imageStore = useUploadedImages()
const { getCount, getFiles } = storeToRefs(imageStore)
const uploadedFiles = f => {
  imageStore.setFiles(f)
}

const sendEmail = handleSubmit(async (values) => {
  if (getCount) {
    values.files = getFiles
  }
  console.log('values', values)
  const { data } = await useFetch('/api/sendMail', {
    method: 'POST',
    body: values
  })
  console.log('data', data)
})
</script>