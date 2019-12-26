import Stoage from 'web-storage-cache'

const localStorage = new Stoage()

// 封装localStorage方法

// 添加localStorage
export function setLocalStorage (key, value) {
  return localStorage.set(key, value)
}

// 获取localStorage
export function getLocalStorag (key) {
  return localStorage.get(key)
}

// 删除某一条localStorage
export function removeLocalStorag (key) {
  return localStorage.delete(key)
}

// 删除全部localStorage
export function claarLocalStorag () {
  return localStorage.clear()
}

// 使用一个book对象来统一保存，每一本电子书的/字体大小/风格/主题。。。相关设置，并存入localStorage
export function setBookObject (fileName, key, value) {
  let book = getLocalStorag(`${fileName}-info`)//获取缓存
  if (!book) { //如果没有
    book = {} // 设置为空
  }
  book[key] = value // 如果存在，就将缓存的key和value设为一致
  setLocalStorage(`${fileName}-info`, book) // 存入localStorage
}

// 从localStorage的book对象中，获取电子书的相关设置
export function getBookObject (fileName, keys) {
  let book = getLocalStorag(`${fileName}-info`)//获取缓存
  if (book) { //存在
    return book[keys] // 返回相应的设置，keys表示要获取的字体大小/字体风格/主题的具体配置
  } else {
    return null
  }
}

// 向缓存中存入，字体风格设置
export function saveFontFamily (fileName, fontFamily) {
  setBookObject(fileName, 'fontFamily', fontFamily)
}

// 从缓存中获取，字体风格设置
export function getFontFamily (fileName) {
  return getBookObject(fileName, 'fontFamily')
}

// 向缓存中存入，字体大小设置，
export function saveFontSize (fileName, fontSize) {
  setBookObject(fileName, 'fontSize', fontSize)
}

// 从缓存中获取，字体大小设置
export function getFontSize (fileName) {
  return getBookObject(fileName, 'fontSize')
}

// 向缓存中存入，国际化变量
export function setLocale (locale) {
  return setLocalStorage('locale', locale)
}

// 从缓存中获取，国际化变量
export function getLocale () {
  return getLocalStorag('locale')
}

// 向缓存中存入，阅读器选中主题
export function saveTheme (fileName, theme) {
  setBookObject(fileName, 'theme', theme)
}

// 从缓存中获取，阅读器选中主题
export function getTheme (fileName) {
  return getBookObject(fileName, 'theme')
}
