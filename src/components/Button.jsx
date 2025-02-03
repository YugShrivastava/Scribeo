import React from 'react'

function Button({
  children = 'Button',
  type = 'button',
  classname = '',
  onClick = '{() => {}}',
  ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 rounded-full ${classname}`} onClick={onClick} {...props} >
        {children}
    </button>
  )
}

export default Button
