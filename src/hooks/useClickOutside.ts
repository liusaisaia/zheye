// 点击下拉框以外的区域关闭下拉框
import { onMounted, ref, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      // e.target使用类型断言
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  // 页面渲染添加方法
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  // 页面销毁删除方法
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
export default useClickOutside
