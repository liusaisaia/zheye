<!--
 * @LastEditors: liusaisai
 * @LastEditTime: 2020-10-12 20:00:58
-->
// 表单组件
<template>

</template>

<script lang='ts'>
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {

    }
    return {
      emailRef,
      validateInput
    }
  }
})
</script>

<style>

</style>
