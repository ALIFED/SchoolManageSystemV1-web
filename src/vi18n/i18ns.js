/**
 * @Author yangchegntao
 * @Date 2019-12-09 17:25
 * @Description vue-i18n实现动态国际化
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/vi18n/messages/language-en'
import zhCN from '@/vi18n/messages/language-zh'

Vue.use(VueI18n);

const i18n = new VueI18n({
  // 语言标识
  locale: 'zhCN',
  // 通过切换locale值来切换语言
  // this.$i18n.locale
  messages: {
    zhCN,
    en
  },
  silentTranslationWarn: true
});

// locale.i18n((key, value) => i18n.t(key, value));

export default i18n
