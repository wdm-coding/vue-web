import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider"
declare global {
  interface Window {
    $message: MessageApiInjection
  }
}

declare module 'virtual:svg-icons-register' {
  const content: any
  export default content
}
