import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.css'

const Updates = () => {
  return (
    <div className='Update'>{
      UpdatesData.map((update) => {
        return (
          <div className='update' key={update.name}>
            <img src={update.img} alt='' />
            <div className='not1'style={{marginBottom: '0.5rem'}} >
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.not1}</span>
              </div>
              <span>
                {update.time}
              </span>
            </div>



          </div>
        )
      })
    }
    </div>
  )
}

export default Updates