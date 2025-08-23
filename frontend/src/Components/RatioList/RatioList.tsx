type Props =  {
    config : any;
    data:any;
}


const RatioList = ({data,config}: Props) => {
    const renderedRow =config.map((row:any) =>{
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
    })
  return (
    <div className='bg-white shadow rounded-lg mb-4-p-4'>
        <ul className='divide-y divided-gray-200'>
            {renderedRow}
        </ul>
    </div>
  )
}

export default RatioList