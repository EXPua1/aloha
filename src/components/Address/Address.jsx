import React from 'react'
import css from './Address.module.css'

const Address = () => {
  return (
      <address>
          <ul>
              <li className={css.address}>
                  <p>email: <a href="mailto:alexhawaiiparts@gmail.com">alexhawaiiparts@gmail.com</a></p>
              </li>
              <li className={css.address}>
                  phone: <a href="tel:+380961111111">+38 096 111 11 11</a>
              </li>
          </ul>
   </address>
  )
}

export default Address