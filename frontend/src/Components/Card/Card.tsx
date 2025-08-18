import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img 
          src='https://www.smallbusinesswebdesigns.net.au/uploads/1/1/6/1/116115455/published/free-stock-images-australia.jpg?1643646387'
          alt='image'
        />
        <div className='deatils'>
            <h2>Camera</h2>
            <p>$200</p>
        </div>
        <p className='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure.</p>
    </div>
  )
}

export default Card