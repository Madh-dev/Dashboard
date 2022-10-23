import React from 'react'
import Card from '../Card/Card'
import { CardData } from '../../Data/Data'
import './Cards.css'

const Cards = () => {
  return (
    <div className='Cards'>
        {CardData.map((card,id)=>{
            return (
                <div className='parentContainer' key={id}>
                    <Card 
                    title={card.titles} color={card.color}
                    barValue={card.barValue} value={card.value}
                    png={card.png} series={card.series}/>
                    </div>
            )
        })}
    
    </div>
  )
}

export default Cards