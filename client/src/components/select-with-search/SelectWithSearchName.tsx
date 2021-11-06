import { Select as AntSelect } from 'antd'
import React from 'react'
import { classes } from 'typestyle'
import { css } from './selectWithSearch.styles'

const { Option } = AntSelect

export interface SelectOption {
  name: string
  id: string
  icon?: React.ReactElement
}

interface SelectProps {
  onChange?: (value: string) => void
  loading?: boolean
  data: SelectOption[]
  defaultValue?: string
  value?: string
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement
  className?: string
  dropdownStyle?: React.CSSProperties | undefined
  optionLabelProp?: string
}

export const SelectWithSearchName: React.FC<SelectProps> = ({
  onChange,
  loading,
  data,
  value,
  defaultValue,
  dropdownRender,
  className,
  dropdownStyle,
  optionLabelProp,
}) => {
  return (
    <AntSelect
      defaultValue={data.find(e => e.id === defaultValue)?.name}
      value={value}
      optionLabelProp={optionLabelProp}
      onChange={onChange}
      loading={loading}
      showSearch
      dropdownStyle={dropdownStyle}
      className={classes(className, css.select)}
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
        <Option key={i} value={e.name}>
          <span>{e.name}</span>
          <span className={css.icon}>{e.icon && e.icon}</span>
        </Option>
      ))}
    </AntSelect>
  )
}
