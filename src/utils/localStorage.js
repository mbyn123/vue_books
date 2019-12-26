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

// 使用一个book对象来统一保存，每一本电子书的相关设置/字体大小/风格/主题。。。，并存入localStorage
export function setBookObject (fileName, key, value) {
  let book = getLocalStorag(`${fileName}-info`)//获取缓存
  if (!book) { //如果没有
    book = {} // 设置为空
  }
  book[key] = value // 如果存在，就将缓存的key和value设为一致
  setLocalStorage(`${fileName}-info`, book) // 存入localStorage
}

// 从localStorage中，获取电子书的设置
export function getBookObject (fileName, keys) {
  let book = getLocalStorag(`${fileName}-info`)//获取缓存
  if (book) { //存在
    return book[keys] // 返回相应的设置，keys表示要获取的字体大小/字体风格/主题的具体配置
  } else {
    return null
  }
}

// 将电子书的字体风格设置，存入localStorage中的book对象中
export function saveFontFamily(fileName, fontFamily) {
  setBookObject(fileName, 'fontFamily', fontFamily)
}


// 从localStorage中，获取电子书的字体风格设置
export function getFontFamily(fileName) {
  return getBookObject(fileName, 'fontFamily')
}

// 将电子书的字体大小设置，存入localStorage中的book对象中
export function saveFontSize(fileName,fontSize){
  setBookObject(fileName,'fontSize',fontSize)
}

// 从localStorage中，获取电子书的字体风格设置
export function getFontSize(fileName) {
  return getBookObject(fileName, 'fontSize')
}

// 获取缓存中的存储国际化变量
export function getLocale(){
  return getLocalStorag('locale')
}

// 像缓存中存入，国际化变量
export function setLocale(locale){
  return setLocalStorage('locale',locale)
}

