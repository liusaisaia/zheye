<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'liu'
}
const testData: ColumProps[] = [
  {
    id: 1,
    title: '专栏1',
    description:
      '因为你，我要变成一个更好的人，不想成为你的负担，因此发奋，只是想证明我足以与你相配'
    // avatar: 'https://cn.vuejs.org/images/logo.png'
  },
  {
    id: 2,
    title: '专栏2',
    description:
      '因为你，我要变成一个更好的人，不想成为你的负担，因此发奋，只是想证明我足以与你相配',
    avatar: 'https://cn.vuejs.org/images/logo.png'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      currentUser: currentUser
    }
  }
})
</script>

<style></style>
