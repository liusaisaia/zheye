<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" class="rounded-circle border border-light w-25  my-3" :alt="column.title">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-lift">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, PropType } from 'vue'
export interface ColumProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumProps[]>, // 构造函数转换成泛型 PropType
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/authority.png')
        }
        return column
      })
    })
    return { columnList }
  }
})
</script>

<style>

</style>
