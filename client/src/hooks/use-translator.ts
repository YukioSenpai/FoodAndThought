import { Lens } from 'monocle-ts'
import React, { useContext } from 'react'
import { languageTag, MessageProvider } from 'typed-intl'
import { ContextLocale, LocaleContext } from '../framework/locale-context'
import { Locale } from '../models/locale'

export const translator =
  <A, B>(lens: Lens<A, B>) =>
  (C: React.Context<A>) =>
  (unwrap: (locale: B) => string) =>
  <C>(a: MessageProvider<C>): C => {
    const c = useContext(C)
    return a.messagesFor(languageTag(unwrap(lens.get(c))))
  }

const lens = Lens.fromProp<ContextLocale>()('value')

export const useTranslator = translator(lens)(LocaleContext)(Locale.unwrap)
