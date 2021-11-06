import { Card as AntCard } from 'antd'
import { CardProps } from 'antd/lib/card'
import { FC } from 'react'
import { toggleClass } from 'styles/classUtils'
import { classes } from 'typestyle'
import { css } from './card.styles'

interface ExtendedCardProps extends CardProps {
  disabled?: boolean
}
export const Card: FC = ({
  bodyStyle,
  className,
  disabled,
  onClick,
  hoverable,
  ...props
}: ExtendedCardProps) => (
  <AntCard
    {...props}
    className={classes(
      className !== undefined ? className : '',
      css.card,
      toggleClass(disabled === true, 'disabled')
    )}
    bodyStyle={{ padding: '2rem', ...bodyStyle }}
    onClick={disabled === true ? undefined : onClick}
    hoverable={disabled === true ? false : hoverable}
  />
)
