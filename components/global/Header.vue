<script setup>
import Logo from "./Logo.vue";
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);
</script>

<template>
  <div
    class="p-4 sm:px-16 sm:py-3 flex items-center w-full justify-between font-poppins  font-medium"
  >
    <Logo />
    <div class="hidden lg:flex items-center space-x-20">
      <ul class="flex items-center space-x-12">
        <li><NuxtLink to="#">Società</NuxtLink></li>
        <li><NuxtLink to="#">Attività</NuxtLink></li>
        <li><NuxtLink to="#">Galleria</NuxtLink></li>
        <li><NuxtLink to="#">Sponsor</NuxtLink></li>
        <li><NuxtLink to="/notizie">Notizie</NuxtLink></li>
        <li><NuxtLink to="#">Iscrizioni</NuxtLink></li>
      </ul>
      
    </div>

    <div class="hidden lg:flex items-center space-x-20">
      <ul class="flex items-center space-x-8">
        <!-- <li><NuxtLink to="#">Login</NuxtLink></li> -->
        <li>
          <NuxtLink to="#" class=" border-2 rounded-lg px-3 py-2 border-gray-900"
            >Contatti</NuxtLink
          >
        </li>
      </ul>
    </div>


    <p class="lg:hidden block font-bold text-2xl" >
      Scandicci Calcio
    </p>
    <button class="lg:hidden block" @click="mobileMenuOpen = true" aria-label="hamburger-button">
      <Icon name="icon-park-outline:hamburger-button" class="w-6 h-auto" />
    </button>

    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Jadoo</span>
            <Logo />
          </a>
          <p class=" block font-bold text-2xl" >
            Scandicci Calcio
          </p>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
            aria-label="close"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Destinations</NuxtLink
              >
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Hotels</NuxtLink
              >
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Flights</NuxtLink
              >
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Bookings</NuxtLink
              >
            </div>
            <div class="py-6 space-y-4">
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</NuxtLink
              >
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Signup</NuxtLink
              >
              <select name="country"
                class="-mx-3  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-transparent"
              >
                <option value="EN" selected>EN</option>
                <option value="FRA">FRA</option>
              </select>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>
