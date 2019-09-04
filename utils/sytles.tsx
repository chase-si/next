import { BASIC_FONT_SIZE } from '../config'

//transform 'px' to 'rem'
export const rem = (pxValue: number) => {
  const remValue = pxValue / BASIC_FONT_SIZE

  return `${remValue}rem`
}