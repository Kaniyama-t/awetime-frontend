<template>
<div>
<q-page>
<div class="q-pa-md">
<div style="row">
  <div class="col">
    <q-list bordered>
        <q-item
          clickable
          v-ripple
          v-for="repo in repositories"
          :key="repo.word"
          @click="$router.push('/stock/'+repo.word)"
        >
          <q-item-section avatar>
            <q-icon color="primary" v-bind:name="repo.icon" />
          </q-item-section>
          <q-item-section>{{repo.word}}</q-item-section>
        </q-item>
    </q-list>
  </div>
  <div class="q-pa-md q-gutter-sm col-4">
    <div class="text-h3">{{WordName}}</div>
    <div caption>{{word.caption}}</div>
    <q-card style="width: 100%;">
      <q-card-section>
        {{word.description}}
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-chat-message
          v-for="AMsg in this.word.stockMsg"
          :key="AMsg.msg"
          v-bind:avatar="AMsg.avatar"
          v-bind:stamp="AMsg.date"
          :text="[AMsg.msg]"
        />
        <div style="text-align: center">
        <q-btn outline rounded color="primary" @click="addTipsDialog = true">
          <q-icon left size="3em" name="add" />
          <div>Tipsを追加する</div>
        </q-btn>
        </div>
      </q-card-section>
    </q-card>
    <div class="text-h6" style="margin-top:30px">関連するタイムライン</div>
    <q-timeline color="secondary">
      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        v-for="time in timeline"
        :key="time.word"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</div>
</div>
</q-page>

  <q-dialog v-model="addTipsDialog" style="max-height: 300px">
      <q-card>
        <q-card-section>
          <div class="text-h6">追加するTipsを検索</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="AddTipsSearchTextBox" label="キーワード" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-item
            clickable
            v-ripple
            v-for="time in timeline"
            :key="time.word"
            @click="$router.push('/stock/'+repo.word)"
          >
            <q-item-section avatar>
              <q-icon color="primary" v-bind:name="repo.icon" />
            </q-item-section>
            <q-item-section>{{repo.word}}</q-item-section>
          </q-item>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
  </q-dialog>
  </div>
</template>

<script>
import { watch } from 'fs'
export default {
  // name: 'PageName',
  data () {
    return {
      repositories: [
        {
          word: "Vue.js",
          icon: ""
        }
      ],
      word: {
        icon: "",
        caption: "Javascriptのフレームワーク",
        description: "Vue.js（ヴュージェイエス）、またはVueは、Webアプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースのJavaScriptフレームワークである[4]。他のJavaScriptライブラリを使用するプロジェクトへの導入において、容易になるように設計されている。一方で高機能なシングルページアプリケーション（SPA）を構築することも可能である。 ",

        stockMsg: [
          {
            avatar: "https://s3-mstdn.maud.io/accounts/avatars/000/205/242/original/f5adca37268d08b2.jpg",
            date: "2020/08/15",
            msg: "quasarの生成したてのEssientialLink.vueを少しいじったらvforできなくなったなんでだ"
          }
        ],
        timeline: [{
          word: 'hogea'
        }]
      },
      addTipsDialog: false,
      AddTipsSearchTextBox: ''
    }
  },
  computed: {
    WordName: function () {
      return this.$route.path.substring(7)
    }
  },
  watch: {
    AddTipsSearchTextBox: function (variable) {
      console.log(variable)
    }
  }
}
</script>
