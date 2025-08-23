import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData'
import IncomeStatement from '../../Components/IncomeStatement/IncomeStatement'

interface Props  {}

const tableConfig = [
 
  {
    label: "Book Value Per Share TTM",
    render: (company: any) => company.bookValuePerShareTTM,
    subTitle:
      "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>
        Design guide- This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.
      </h1>
      <RatioList data={testIncomeStatementData} config ={tableConfig}/>
    <Table data={testIncomeStatementData} config={tableConfig}/>     
    
    </>
  )
}

export default DesignPage