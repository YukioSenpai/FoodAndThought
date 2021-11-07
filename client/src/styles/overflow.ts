import { stylesheet } from 'typestyle'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { makeClasses } from './utils'

export const textEllipsis: NestedCSSProperties = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}
export const inlineBlock: NestedCSSProperties = {
  display: 'inline-block',
}

export const overflow = makeClasses({
  textEllipsis,
  inlineBlock,
})

export const overflowStyleSheet = stylesheet(overflow)
