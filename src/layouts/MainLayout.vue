<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title @click="$router.push('/dashboard')" >Awetime</q-toolbar-title>
          <div class="q-pa-md">
          <q-btn stretch flat label="Stock" @click="$router.push('/stock')" />
          <q-btn stretch flat label="Health" @click="$router.push('/health')" />
          <q-btn stretch flat label="Userlist" @click="$router.push('/user')" />
          <q-btn-dropdown
            dropdown-icon="img:https://cdn.quasar.dev/img/boy-avatar.png"
            outline="false"
            unelevated="false"
            no-icon-animation="true"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <q-item clickable v-close-popup @click="$router.push('/u/kaniyama_t')">
                  <q-item-section avatar>
                    <q-avatar icon="analytics" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Kaniyama_tさん</q-item-label>
                    <q-item-label caption>あなたのアウトプットの統計はここから確認できます👍</q-item-label>
                  </q-item-section>
                  <!-- <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section> -->
                </q-item>
                <q-separator inset />
                <q-item clickable v-close-popup @click="carousel = true">
                  <q-item-section avatar>
                    <q-avatar icon="lightbulb" color="warning" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>チュートリアル</q-item-label>
                    <q-item-label caption>まずは基本的な使い方を見てみましょう！</q-item-label>
                  </q-item-section>
                  <!-- <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section> -->
                </q-item>
                <q-item clickable v-close-popup @click="window.location = 'https://wwww.aweti.me';">
                  <q-item-section avatar>
                    <q-avatar icon="support_agent" color="accent" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>お問い合わせ</q-item-label>
                    <q-item-label caption>アカウントについて/バグ報告等</q-item-label>
                  </q-item-section>
                  <!-- <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section> -->
                </q-item>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Username</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  @click="$router.push('/auth/logout')"
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-timeline color="secondary">
            <q-timeline-entry
              v-for="item in timeline" :key="item.timelineId"
              title=""
              :subtitle="item.TimelineDate"
              :avatar="item.timelineIcon"
              :body="item.timelineMsg"
            ></q-timeline-entry>
          </q-timeline>
        </q-scroll-area>

            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="text-weight-bold">Razvan Stoenescu</div>
                <div>@rstoenescu</div>
              </div>
            </q-img>
          </q-drawer>
        <q-page-container>

        <router-view></router-view>
      </q-page-container>

      <!-- チュートリアル用 -->
      <q-dialog v-model="carousel">
      <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="200px"
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-img
            src="heidelberg-5360729_1920.jpg"
            spinner-color="white"
            style="height: 240px; min-width: 450px"
          />
          <div class="q-mt-md text-center">
            ようこそ！
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="live_tv" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="layers" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon name="terrain" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    </q-layout>
  </div>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

import { defineComponent, ref } from '@vue/composition-api'
// import { mapState } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      body: 'hogenyan',
      tutorialPannel: 'welcome',
      carousel: false,
      url: 'heidelberg-5360729_1920.jpg',
      slide: 1
    }
  },
  setup () {
    const drawer = ref(false)
    const essentialLinks = ref(linksData)

    return { drawer, essentialLinks }
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('routeupdate')
    // if (to.matched.some(record => record.meta.tutorial)) {
    //   console.log('true')
    //   if (to.path !== "/tutorial") {
    //     next('/tutorial')
    //   } else {
    //     next()
    //   }
    // } else {
    //   console.log('false')
    //   next()
    // }
  }
})
</script>
