export type Style = {
  readonly [key: string]: string
}

export const classNameHelper = (cssFileObj: Style, classNames: string): string => {
  const nameArr = classNames.split(' ')
  const mapped = nameArr.map( t => {
    const tmp = cssFileObj[t] ? cssFileObj[t] : ''
    return tmp
  })
  return mapped.join(' ')
}


export const imgLoader = ({src}: {src: any}) => {
  return `${src}`
}
export function replaceAll(str: string, find: string, replace: string) {

  function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
