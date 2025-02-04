import React from 'react'

function Button({
  children = 'Button',
  bgColor = 'bg-blue-600',
  type = 'button',
  classname = '',
  ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 ${classname} ${bgColor} text-white`} {...props} >
        {children}
    </button>
  )
}

export default Button
