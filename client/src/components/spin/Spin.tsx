import { LoadingOutlined } from '@ant-design/icons'
import { SpinProps } from 'antd/lib/spin'
import React from 'react'
import { toggleClass } from 'styles/classUtils'
import { classes } from 'typestyle'
import { css } from './spin.styles'

export const Spin = (props: SpinProps & { fullScreen?: boolean; inline?: boolean }) => {
  const { fullScreen, inline, ...rest } = props
  return (
    <div
      className={classes(
        inline ? css.inlineContainer : css.container,
        fullScreen ? toggleClass(fullScreen, 'fullScreen') : ''
      )}
    >
      <LoadingOutlined spin {...rest} size={20} />
    </div>
  )
}
