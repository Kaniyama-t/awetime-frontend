<template>
<q-page>
    <q-item class="row">
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://s3-mstdn.maud.io/accounts/avatars/000/205/242/original/f5adca37268d08b2.jpg" />
          <q-badge v-bind:color="OnlineStatus" floating>22</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label style="font-size: 36px">Kaniyama_t</q-item-label>
        <q-item-label caption>SubMessage</q-item-label>
      </q-item-section>
      <q-item-section side>
        <div class="iCountUp" style="font-size:50px!important">
        <ICountUp
          :delay="delay"
          :endVal="endVal"
          :options="options"
          @ready="onReady"
        />
        </div>
        <q-separator />
        OUTPUTS
      </q-item-section>
    </q-item>

    <q-item style="flex-direction:column;">

    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders column">
      <q-btn flat label="Your Information" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="panel" shrink stretch>
        <q-tab label="投稿回数" name="overview" />
        <q-tab label="分野チャート" name="category" />
        <q-tab label="ツール" name="from" />
        <q-tab label="メンタル" name="mental" />
      </q-tabs>
    </q-toolbar>

    <!-- グラフ -->

    <q-tab-panels v-model="panel" animated class="column">
      <q-tab-panel name="overview">
        <div class="text-h6">投稿回数</div>
        <a v-vind:href="'https://pixe.la/v1/users/awetime/graphs/'+username+'.html'">
        <q-img :src="'https://pixe.la/v1/users/awetime/graphs/'+username" style="height: 170px; max-width: 100%"/>
        </a>
      </q-tab-panel>

      <q-tab-panel name="category">
        <div class="text-h6">分類別チャート</div>
        <line-chart :chart-data="datacollection" height="100"></line-chart>
      </q-tab-panel>

      <q-tab-panel name="from">
        <div class="text-h6">ツール使用率</div>
        ほげ
      </q-tab-panel>

      <q-tab-panel name="mental">
        <div class="text-h6">Movies</div>
        ほげ
      </q-tab-panel>

    </q-tab-panels>

    <!-- ほげにゃん -->

    <q-tab-panels v-model="panel" animated class="column">
      <q-tab-panel name="overview">
        <div class="text-h6">投稿タイムライン</div>
        <q-timeline>
            <q-timeline-entry
              v-for="item in timeline" :key="item.timelineId"
              title=""
              :subtitle="item.TimelineDate"
              :avatar="item.timelineIcon"
              :body="item.timelineMsg"
            ></q-timeline-entry>
        </q-timeline>
      </q-tab-panel>

      <q-tab-panel name="category">
        <div class="text-h6">分類別チャート</div>
        <q-timeline>
            <q-timeline-entry
              v-for="item in timeline" :key="item.timelineId"
              title=""
              :subtitle="item.TimelineDate"
              :avatar="item.timelineIcon"
              :body="item.timelineMsg"
            ></q-timeline-entry>
        </q-timeline>
      </q-tab-panel>

      <q-tab-panel name="from">
        <div class="text-h6">ツール別フィルタ</div>
        <q-timeline>
            <q-timeline-entry
              v-for="item in timeline" :key="item.timelineId"
              title=""
              :subtitle="item.TimelineDate"
              :avatar="item.timelineIcon"
              :body="item.timelineMsg"
            ></q-timeline-entry>
        </q-timeline>
      </q-tab-panel>

      <q-tab-panel name="mental">
        <div class="text-h6">Movies</div>
        <q-timeline>
            <q-timeline-entry
              v-for="item in timeline" :key="item.timelineId"
              title=""
              :subtitle="item.TimelineDate"
              :avatar="item.timelineIcon"
              :body="item.timelineMsg"
            ></q-timeline-entry>
        </q-timeline>
      </q-tab-panel>

    </q-tab-panels>

    </q-item>
</q-page>

</template>

<script>
import firebaseService from 'src/services/firebase'
import ICountUp from 'vue-countup-v2'
import LineChart from './LineChart'

export default {
  name: 'UserFront',
  components: {
      ICountUp,
      LineChart
  },
    data () {
      return {
        username: 'kaniyamat',
        delay: 1000,
        endVal: 120500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        panel: "overview",
        timeline: null,
        datacollection: {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      };
    },
    methods: {
      onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal + 100);
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
  computed: {
    OnlineStatus: function(){
      return true ? 'green' : 'red'
    }
  },
  watch: {
    $route(to, from){
      let userRef = firebaseService.firestore().collection('users').doc(to.path.substring(3))
      let getUserInfo = userRef.get().then(
        doc => {
          console.log(doc)
          if (!doc.exist()) {
            to.next('/user/not_found')
          } else {

          }
        }
      ).catch(err => {
        console.log('Error getting document', err);
      });
    }
  }
}
</script>

<style scoped>
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
</style>
