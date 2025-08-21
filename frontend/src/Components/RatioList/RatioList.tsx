import React from 'react'
import { TestDataCompany } from '../Table/testData'

interface Props  {}
const data = TestDataCompany[0];
type Company =typeof data;
const config =[
    {
        Label:"Company Name",
        render: (company:Company) => company.companyName,
        subTitle: "this is the company name",
    }
]

const RatioList = (props: Props) => {
    const renderedRow =config.map((row =>{
        return (
            <li className='py-3'>
                <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'> 
                        <p className='text-sm font-medium text-gray-900'>
                            {row.Label}
                        </p>
                        <p className='text-sm text-gray-500 truncate'>
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    }))
  return (
    <div className='bg-white shadow rounded-lg mb-4-p-4'>
        <ul className='divide-y divided-gray-200'>
            {renderedRow}
        </ul>
    </div>
  )
}

export default RatioList