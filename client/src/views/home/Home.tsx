import { Space } from 'antd'
import { Button } from 'components/button/Button'
import { useTranslator } from 'hooks/use-translator'
import { FC } from 'react'
import { translate } from 'typed-intl'
import { css } from './home.styles'

const HomeMsg = translate({
  text: `Manger c'est bien, mais manger à deux c'est mieux`,
  find: `Trouve quelqu'un`,
  proposal: 'Propose un dinner',
}).supporting('en', {
  text: 'Eating is good, but eating together is better',
  find: 'Find someone',
  proposal: 'Offer a dinner',
})

export const Home: FC = () => {
  const msg = useTranslator(HomeMsg)

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
        <div className={css.text}>{msg.text}</div>
        <div className={css.buttons}>
          <Space direction="horizontal" size={200}>
            {/* <Link href={Routes.FindsPage()}> */}
            <Button size="large" className={css.button}>
              {msg.find}
            </Button>
            {/* </Link> */}
            {/* <Link href={Routes.NewFindPage()}> */}
            <Button size="large" className={css.button}>
              {msg.proposal}
            </Button>
            {/* </Link> */}
          </Space>
        </div>
      </div>
    </div>
  )
}
