<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Company &amp; Co</h5>
      </div>
      <div class="row">
        <q-card square bordered class="shadow-1">
          <q-card-section class="q-pa-lg">
          </q-card-section>
          
          <q-separator></q-separator>

          <q-card-section class="q-pa-lg">
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
            <q-btn unelevated color="light-green-7" size="lg" class="full-width q-mt-md" label="Login" />
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  setup () {
      const email = ref('')
      const password = ref('')
    return {
        email,
        password
    }
  }
})
</script>

<style>
.q-card {
  width: 360px;
}
</style>
