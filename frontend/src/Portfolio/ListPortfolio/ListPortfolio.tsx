import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props  {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues && portfolioValues.map((portfolioValue) => {
            return <CardPortfolio portfolioValue={portfolioValue}/>
        })
           
        }
      </ul>
    </>
  )
}

export default ListPortfolio