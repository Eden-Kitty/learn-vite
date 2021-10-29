
/**
 * async await
 * @param {*} promise
 */
export const to = promise => {
  return promise.then(data => [data, null]).catch(err => [undefined, err])
}
/**
 * 获取Url参数中指定name的值
 * @param {*} name
 */
export const getURLParam = (name = '') => {
  const re = new RegExp('(^|&)' + name + '=([^&#]*)(&|$)')
  let value = ''
  const arrHash = window.location.hash.split('?')
  const arrSearch = window.location.search.substr(1).split('?')
  arrHash.shift()
  const arr = arrSearch.concat(arrHash)

  for (let i = 0; i < arr.length; i++) {
    const r = arr[i].match(re)
    if (r !== null && r[2]) {
      value = r[2]
      break
    }
  }
  return value
}
/**
 * 是否是移动设备
 */
export const isMobileDevices = () => {
  return !!(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))
}

/**
 * 兼容安卓键盘
 */
export const androidKeyboardInit = () => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  if (isAndroid) {
    window.addEventListener('resize', () => {
      const activeElement = document.activeElement
      if (activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA') {
        setTimeout(() => {
          activeElement.scrollIntoView()
        }, 100)
      }
    })
  }
}

/**
 * 解析流文件
 * @param {*} excelTitle
 * @param {*} blobData
 */
export const downLoadxlsx = (excelTitle = 1, blobData = '') => {
  if (!blobData) return false
  const url = window.URL.createObjectURL(new Blob([blobData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', excelTitle + '.xlsx')
  document.body.appendChild(link)
  link.click()
}

/**
 * 节流
 * @param {*} fn
 * @param {*} delay
 */
export const throttle = (fn, delay = 300) => {
  let prev = null
  let timer = null
  return function() {
    const _this = this
    const args = arguments
    const now = Date.now()
    if (!prev) { // 立即执行一次
      prev = Date.now()
      fn.apply(_this, args)
    } else if (now - prev >= delay) { // 如果有上一次时间 && 间隔时间 >= 设置节流时间
      clearTimeout(timer)
      timer = setTimeout(() => {
        prev = Date.now()
        fn.apply(_this, args)
        clearTimeout(timer)
      }, delay)
    }
  }
}

/**
 * 手机号脱敏
 * @param {*} phone
 */
export const phoneDese = (phone = '') => {
  if (!phone) return ''
  return phone.replace(/^(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 身份证号脱敏
 * @param {*} idCard
 */
export const idCardDese = (idCard = '') => {
  if (!idCard) return ''
  return idCard.replace(/^(.{6})(?:\d+)(.{4})$/, '$1****$2')
}

