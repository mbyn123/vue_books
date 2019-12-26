import Vue from 'vue'
import VueI18N from 'vue-i18n'
import en from './en'
import cn from './cn'
import {getLocale,setLocale} from '../utils/localStorage'

Vue.use(VueI18N)

const messages = {
  en,
  cn
}

const locale = getLocale() //存入缓存中
if (!locale){
 const locale = 'en' // 默认为中文
  setLocale(locale)
}

const i18n = new VueI18N({
  locale,
  messages
})

export default i18n
