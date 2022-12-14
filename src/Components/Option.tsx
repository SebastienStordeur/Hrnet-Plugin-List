/* eslint-disable prettier/prettier */
import React from 'react'

interface IOption {
  value: string
  onClick?: any
  activeValue: string
  activeValueStyle?: string
  listStyle?: string
  defaultListStyle?: string
}

const Option: React.FC<IOption> = (props) => {
  return (
    <li
      value={props.value}
      className={`${props.defaultListStyle || 'default-list'} ${
        props.value === props.activeValue
          ? props.activeValueStyle || 'active-list'
          : props.listStyle
      }`}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </li>
  )
}

export default Option
