/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Option from './Components/Option'

interface ISelect {
  data: string[]
  headline: string | number
  class?: string
  listContainerStyle?: string
  listStyle?: string
  activeValueStyle?: string
  defaultListStyle?: string
}

export const ListSelect: React.FC<ISelect> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [activeValue, setActiveValue] = useState<string>('')

  const openMenuHandler: () => void = () => {
    setIsMenuOpen((prevValue) => !prevValue)
  }

  const setActiveValueHandler: (value: string) => void = (value: string) => {
    setActiveValue(value)
  }

  return (
    <div id='select-wrapper' className={props.class || 'wrapper'}>
      <div>
        <ul className='h-8 py-1 px-4' onClick={openMenuHandler}>
          <label id={activeValue || ''}>
            {activeValue ? activeValue : props.headline}
          </label>
          <div className={props.listContainerStyle || 'list-container'}>
            {isMenuOpen &&
              props.data?.map((value: string) => {
                return (
                  <Option
                    value={value}
                    key={Math.random().toString()}
                    onClick={setActiveValueHandler}
                    activeValue={activeValue}
                    activeValueStyle={props.activeValueStyle}
                    listStyle={props.listStyle}
                    defaultListStyle={props.defaultListStyle}
                  />
                )
              })}
          </div>
        </ul>
      </div>
    </div>
  )
}
