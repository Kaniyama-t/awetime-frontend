<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Times Wiki by aweti.me
        </q-toolbar-title>

        <q-btn flat round dense class="q-mr-md">
          <q-icon name="apps"></q-icon>
        </q-btn>
        <q-btn-dropdown
            outline=false
            unelevated=true
            flat=true
            rounded=true
            push=false
            no-icon-animation=true
          >
            <template v-slot:label>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </template>
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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup () {
    const leftDrawerOpen = ref(false)
    const essentialLinks = ref(linksData)

    return { leftDrawerOpen, essentialLinks }
  }
})
</script>
