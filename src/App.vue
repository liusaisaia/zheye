<!--
 * @LastEditors: liusaisai
 * @LastEditTime: 2020-10-13 15:54:08
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list" v-show="false"></column-list>
    <form>
      <div class="mb-3">
        <label class="form-lable">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          type="text"
          placeholder="请输入邮箱地址"
        >
        </validate-input>
      </div>
      <div class="mb-3">
        <label class="form-lable">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          type="password"
          placeholder="请输入密码"
        >
        </validate-input>
      </div>
      <!-- <div class="form-group">
        <label for="exampleInputEmail1">邮箱地址</label>
        <input type="email" class="form-control"
          v-model="emailRef.val"
          @blur="validateEmail"
          id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="form-text" v-if="emailRef.error">
          {{emailRef.message}}
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div> -->
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
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
const emailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    // const passwordRules: RulesProp = [
    //   { type: 'required', message: '密码不能为空' },
    //   { type: 'password', message: '请输入正确的电子邮箱格式' }
    // ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'Please enter a valid email'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be a valid email'
      }
    }
    return {
      list: testData,
      currentUser: currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal
    }
  }
})
</script>

<style></style>
