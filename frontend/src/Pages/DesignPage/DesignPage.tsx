import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props  {}

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>
        Design guide- This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.
      </h1>
      <RatioList/>
    <Table/>     
    
    </>
  )
}

export default DesignPage