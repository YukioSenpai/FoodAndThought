import { Input } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { css } from './editable.styles'
import { Spin } from 'app/components/spin/Spin'

type EditingState = 'read' | 'write' | 'loading'

interface Props {
  initialValue?: string
  onChange(value: string): Promise<void>
}

export const EditableText: React.FC<Props> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState<string>(initialValue || '')
  const [editingState, setEditingState] = useState<EditingState>('read')

  useEffect(() => {
    setValue(initialValue || '')
  }, [initialValue])

  const startEditing = useCallback(() => {
    setEditingState('write')
  }, [setEditingState])

  const updateValue = useCallback(e => setValue(e.target.value), [setValue])

  const triggerChange = useCallback(async () => {
    if (initialValue !== value) {
      setEditingState('loading')
      await onChange(value)
    }
    setEditingState('read')
  }, [setEditingState, onChange, initialValue, value])

  const triggerChangeIfEnter = useCallback(
    async e => {
      if (e.key === 'Enter') {
        await triggerChange()
      }
    },
    [triggerChange]
  )

  return editingState === 'write' ? (
    <Input
      autoFocus
      className={css.input}
      value={value}
      onChange={updateValue}
      onBlur={triggerChange}
      onKeyPress={triggerChangeIfEnter}
    />
  ) : editingState === 'loading' ? (
    <Spin inline />
  ) : (
    <span className={css.editableText} onClick={startEditing}>
      {value}
    </span>
  )
}
