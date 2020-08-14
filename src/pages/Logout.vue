<!-- eslint-disable -->
<template>
  <q-page padding>
    <h5 class="text-center">Logout</h5>
    <q-form class="authentication q-gutter-y-md" ref="emailAuthenticationForm" @submit="onSubmit">
        <h4>ログアウトしますか？</h4>
      <q-btn
        class="full-width q-mt-md"
        color="primary"
        data-cy="submit"
        type="submit"
        label="Logout"
      >
      </q-btn>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { QSpinnerGears } from 'quasar'
import router from '../router'
export default {
  name: 'Logout',
  methods: {
    ...mapActions('auth', ['logoutUser']),
    onSubmit () {
      this.logoutUser().then(function(){
          router.push({ path : 'auth/login' })
      })
    }
  }
}
</script>

<style lang="stylus">
.authentication
  margin auto
  max-width 30em
  width 100%
</style>
