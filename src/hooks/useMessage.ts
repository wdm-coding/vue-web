import { createDiscreteApi } from 'naive-ui'

const useMessage = () => {
  const { message } = createDiscreteApi(['message'])
  // 挂载到 window 供全局使用
  window.$message = message
  return message
}

export default useMessage