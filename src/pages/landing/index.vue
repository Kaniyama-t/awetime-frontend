<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-black q-my-md">Welcome to TimesWiki by aweti.me</h5>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Index',
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
