/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Option from './Components/Option'

interface ISelect {
  data: string[]
  headline: string | number
  class?: string
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
    <div id='select-wrapper' className={props.class}>
      <div>
        <ul className='h-8 py-1 px-4' onClick={openMenuHandler}>
          <label>{activeValue ? activeValue : props.headline}</label>
          <div className='absolute w-full left-0 mt-1 rounded-lg'>
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
