import React from 'react'
import './index.less'

export const Input: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> =
  props => <input className='aui-input' type='text' {...props} />

export default Input
