import { Space } from 'antd'
import { Button } from 'components/button/Button'
import { FC } from 'react'
import { css } from './home.styles'

export const Home: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/home.jpg)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div className={css.container}>
        <div className={css.text}>Eating is good, but eating together is better</div>
        <div className={css.buttons}>
          <Space direction="horizontal" size={200}>
            {/* <Link href={Routes.FindsPage()}> */}
            <Button size="large" className={css.button}>
              Find someone
            </Button>
            {/* </Link> */}
            {/* <Link href={Routes.NewFindPage()}> */}
            <Button size="large" className={css.button}>
              Offer a dinner
            </Button>
            {/* </Link> */}
          </Space>
        </div>
      </div>
    </div>
  )
}
