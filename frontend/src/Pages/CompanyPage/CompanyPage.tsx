import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';

interface Props  {}

const CompanyPage = (props: Props) => {
    let { ticker } = useParams(); //useParams ile URL’deki :ticker parametresi okunuyor. yakalıyo

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      console.log(ticker)
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
    
  return (
    <div>
        {company ? (
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar/>
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$"+company.price.toString()} />
            <Tile title="DCF" subTitle={company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
        ) : (
            <Spinner/>
        )}
    </div>
  )
}

export default CompanyPage