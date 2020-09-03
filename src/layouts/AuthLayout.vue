<template>
  <q-layout view="hHh Lpr fFf" class="background">
    <q-card bordered style="background-color:#fff;position: fixed!important;min-width:700px;" class="row fixed-center text-center vertical-middle">
        <q-card-section style="margin-left:auto;margin-right:auto;">
          <router-view />
        </q-card-section>
    </q-card>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true,
      backgroundImgPath: './heidelberg-5360729_1920.jpg'
    }
  }
}
</script>

<style scoped>
.background{
  background: url('../assets/heidelberg-5360729_1920.jpg');
}
</style>
