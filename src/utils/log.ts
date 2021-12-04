type Tlog = (text: string) => void

interface IText {
  text: string,
  type: string
}

interface ILog {
  capsule: (title: string, info: string, type: string) => void,
  colorful: (textArr: IText[]) => void,
  default: Tlog,
  primary: Tlog,
  success: Tlog,
  warning: Tlog,
  danger: Tlog
}

function typeColor (type = 'default') {
  let color = ''
  switch (type) {
    case 'default':
      color = '#303133'
      break

    case 'primary':
      color = '#409EFF'
      break

    case 'success':
      color = '#67C23A'
      break

    case 'warning':
      color = '#E6A23C'
      break

    case 'danger':
      color = '#F56C6C'
      break

    default:
      break
  }
  return color
}

const log: ILog = {
  capsule(title, info, type = 'primary') {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${typeColor(
        type
      )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    )
  },

  colorful(textArr) {
    console.log(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${typeColor(t.type)};`)
    )
  },

  default(text) {
    this.colorful([{ text }])
  },

  primary(text) {
    this.colorful([{ text, type: 'primary' }])
  },

  success(text) {
    this.colorful([{ text, type: 'success' }])
  },

  warning(text) {
    this.colorful([{ text, type: 'warning' }])
  },

  danger(text) {
    this.colorful([{ text, type: 'danger' }])
  }
}

export default log