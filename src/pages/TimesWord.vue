<template>
  <q-page class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div class="q-pa-md">

        <q-list>
            <q-expansion-item
                expand-separator
                icon="mail"
                label="Inbox"
                caption="5 unread emails"
                default-opened
            >
            <q-expansion-item
            :header-inset-level="1"
            expand-separator
            icon="receipt"
            label="Programing Language"
            default-opened
            >

            <q-expansion-item switch-toggle-side dense-toggle :expand-icon-toggle="false" label="Vue.js" :header-inset-level="1" :content-inset-level="2">
            </q-expansion-item>

            <q-expansion-item switch-toggle-side dense-toggle label="Yesterday" :header-inset-level="1" :content-inset-level="2">
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            </q-expansion-item>

            <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator icon="schedule" label="Postponed">
            <q-card>
                <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
            </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item :content-inset-level="0.5" expand-separator icon="mail" label="Inbox" caption="5 unread emails" default-opened>
            <q-expansion-item expand-separator :content-inset-level="0.5" icon="receipt" label="Receipts">

            <q-expansion-item label="Today" :content-inset-level="0.5">
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item label="Yesterday" :content-inset-level="0.5">
                <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            </q-expansion-item>

            <q-expansion-item :content-inset-level="0.5" expand-separator icon="schedule" label="Postponed">
            <q-card>
                <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
            </q-expansion-item>

        </q-expansion-item>
        </q-list>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div class="q-pa-xl">
                <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                        <q-breadcrumbs>
                            <q-breadcrumbs-el icon="home"></q-breadcrumbs-el>
                            <q-breadcrumbs-el label="Language"></q-breadcrumbs-el>
                            <q-breadcrumbs-el label="Vue.js"></q-breadcrumbs-el>
                        </q-breadcrumbs>
                        <span class="text-h3">Vue.js</span>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <number
                            animationPaused
                            ref="number2"
                            :to="105"
                            :duration="2"
                            easing="Back.easeIn"
                            @complete="completed"
                            @click="playAnimation"/>
                    </div>
                </div>
                <div>
                    Vue.js（ヴュージェイエス）またはVueは、Webアプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースのJavaScriptフレームワークである[4]。他のJavaScriptライブラリを使用するプロジェクトへの導入において、容易になるように設計されている。一方で高機能なシングルページアプリケーション（SPA）を構築することも可能である。
                </div>
                <div class="row">
                    <q-btn class="text-center" flat color="primary" label="Read more (wikipedia)" style="margin-right: auto; margin-left:auto;"></q-btn>
                </div>
                <!--------------------------------------------------------------------------
                  Word Detail
                 --------------------------------------------------------------------------->

                <div class="row q-mt-xl">
                    <!--------------------------------------------------------------------------
                      Word Detail Main Area
                     --------------------------------------------------------------------------->

                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                        <q-img
                            src="https://pixe.la/v1/users/awetime-timeswiki/graphs/test-space-vuejs"
                        />
                        <q-timeline color="secondary">
                        <q-timeline-entry heading />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                            :body="body"
                        />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 21, 1986"
                            icon="delete"
                            :body="body"
                        />

                        <q-timeline-entry heading body="November, 2017" />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            :body="body"
                        />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            :body="body"
                        />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            color="orange"
                            icon="done_all"
                            :body="body"
                        />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            :body="body"
                        />

                        <q-timeline-entry
                            title="Event Title"
                            subtitle="February 22, 1986"
                            :body="body"
                        />
                        </q-timeline>
                    </div>

                    <!--------------------------------------------------------------------------
                        Word Detail Sidebar
                    --------------------------------------------------------------------------->

                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <q-card class="my-card">
                            <q-card-section class="bg-negative text-white">
                                <div class="text-h6">1,000+</div>
                                <div class="text-subtitle2">Teammates Impression</div>
                            </q-card-section>
                        </q-card>

                        <q-card class="q-mt-md">
                            <q-card-section class="bg-red text-white">
                                <div class="text-h6">127</div>
                                <div class="text-subtitle2">Your Impression</div>
                            </q-card-section>
                        </q-card>

                        <q-card class="q-mt-md">
                            <q-card-section class="bg-primary text-white">
                                <div class="text-h6">Q&amp;A</div>
                                <div class="text-subtitle2">by Vue.js Developers</div>
                                <q-card-actions align="right" class="q-pa-none">
                                    <q-btn flat>View Q&amp;A</q-btn>
                                </q-card-actions>
                            </q-card-section>

                            <q-separator></q-separator>

                            <q-input bottom-slots autogrow v-model="text" label="Post question" counter maxlength="1200" type="textarea" class="q-pb-lg">
                                <template v-slot:before>
                                </template>

                                <template v-slot:append>
                                    <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
                                </template>

                                <template v-slot:hint>
                                Field hint
                                </template>

                                <template v-slot:after>
                                <q-btn round dense flat icon="send"></q-btn>
                                </template>
                            </q-input>
                        </q-card>

                        <q-card class="q-mt-md">
                            <q-card-section class="bg-dark text-white">
                                <div class="text-h6">Running Projects</div>
                                <div class="text-subtitle2">related to Vue.js</div>
                            </q-card-section>

                            <q-separator></q-separator>

                            <q-list separator>
                                <q-item clickable v-ripple>
                                    <q-item-section>
                                    <q-item-label overline>Aweti.me <q-icon name="fab fa-github"></q-icon></q-item-label>
                                    <q-item-label>Virtual Office Platform. Now creating prototype.</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>

                            <q-card-actions align="right">
                                <q-btn flat>More</q-btn>
                            </q-card-actions>
                        </q-card>

                        <q-field standout :dense="true" class="q-mt-md">
                            <template v-slot:control>
                                <div class="self-center full-width no-outline text-center" tabindex="0"><q-icon name="add_circle_outline"  @click="toggleAddCardDialog(true)"/> Add Card</div>
                            </template>
                        </q-field>
                    </div>
                </div>
            </div>
      </div>
  <q-dialog v-model="addCard">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="toggleAddCardDialog(false)" />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])

    const addCard = ref<boolean>(false)

    function toggleAddCardDialog (toggl:boolean) {
      addCard.value = toggl
    }

    const meta = ref<Meta>({
      totalCount: 1200
    })

    // const value = ref<number>(1000)
    // const formatToPrice = (value: number) => {
    //   return `R$ ${value.toFixed(2)}`
    // }
    return { todos, meta, addCard, toggleAddCardDialog }
  }
})
</script>
