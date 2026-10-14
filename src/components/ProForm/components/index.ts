import { FormInst as NFormInst } from "naive-ui"

import ProForm from "@/components/ProForm/index.vue"
import ProFormText from "@/components/ProForm/components/ProFormText/index.vue"
import ProFormField from "@/components/ProForm/components/ProFormField/index.vue"
import ProFormNumber from "@/components/ProForm/components/ProFormNumber/index.vue"
import ProFormDate from "@/components/ProForm/components/ProFormDate/index.vue"
import ProFormDateRange from "@/components/ProForm/components/ProFormDateRange/index.vue"
import ProFormSelect from "@/components/ProForm/components/ProFormSelect/index.vue"
import ProFormGroup from "@/components/ProForm/components/ProFormGroup/index.vue"
import ProFormCascader from "@/components/ProForm/components/ProFormCascader/index.vue"
import ProFormRadioGroup from "@/components/ProForm/components/ProFormRadioGroup/index.vue"
import ProFormCheckBoxGroup from "@/components/ProForm/components/ProFormCheckBoxGroup/index.vue"
import ProFormDependency from "@/components/ProForm/components/ProFormDependency/index.vue"
import ProFormSwitch from "@/components/ProForm/components/ProFormSwitch/index.vue"
import ProFormCustom from "@/components/ProForm/components/ProFormCustom/index.vue"
interface FormInst extends NFormInst {
  getFieldsValue: (params?: string[] | undefined | null | string) => Record<string, any> | null
  setFieldsValue: (values: Record<string, any>) => void
}
export {
  FormInst,
  ProForm,
  ProFormText,
  ProFormField,
  ProFormNumber,
  ProFormDate,
  ProFormDateRange,
  ProFormSelect,
  ProFormGroup,
  ProFormCascader,
  ProFormRadioGroup,
  ProFormCheckBoxGroup,
  ProFormDependency,
  ProFormSwitch,
  ProFormCustom,
}
