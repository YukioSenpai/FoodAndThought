import { Select as AntSelect } from 'antd'
import React from 'react'
import { css } from './selectWithSearch.styles'

const { Option } = AntSelect

export interface SelectOption {
  name: string
  id: string
}

interface SelectProps {
  onChange?: (value: string) => void
  loading?: boolean
  data: SelectOption[]
  defaultValue?: string
  value?: string
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement
  dropdownStyle?: React.CSSProperties | undefined
  className?: string
}

export const SelectWithSearch: React.FC<SelectProps> = ({
  onChange,
  loading,
  data,
  value,
  defaultValue,
  dropdownRender,
  className,
  dropdownStyle,
}) => {
  return (
    <AntSelect
      defaultValue={data.find(e => e.id === defaultValue)?.name}
      value={value}
      onChange={onChange}
      className={className ? className : css.select}
      loading={loading}
      showSearch
      dropdownStyle={dropdownStyle}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
      }
      dropdownRender={dropdownRender}
    >
      {data.map((e, i) => (
        <Option key={i} value={e.id}>
          {e.name}
        </Option>
      ))}
    </AntSelect>
  )
}
