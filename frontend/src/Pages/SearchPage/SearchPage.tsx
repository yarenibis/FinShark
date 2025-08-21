import React, { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import type { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import Navbar from '../../Components/Navbar/Navbar';
import ListPortfolio from '../../Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props  {}

const SearchPage = (props: Props) => {
const [search,setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues,setPortfolioValues] = useState<string[]>([]);
  const [serverError,setServerError] = useState<string>("");

      //inputu yakalayıp state aktarmak
      const handleSearchChange =(e : ChangeEvent<HTMLInputElement>) =>{ //input değiştiğine tetiklenen olay
          setSearch(e.target.value);
          console.log(e);
       };

       const onPortfolioCreate=(e:any)=>{
        e.preventDefault();
        const exist= portfolioValues.find((value) => value === e.target[0].value);
        if(exist) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
       };

       const onPortfolioDelete=(e:any)=>{
        e.preventDefault();
        const removed = portfolioValues.filter((value)=>{
          return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
       }

       const onSearchSubmit = async (e: SyntheticEvent) =>{
        e.preventDefault();
         const result =await searchCompanies(search);
         if(typeof result === "string" ){
          setServerError(result);
         }else if(Array.isArray(result)){
           setSearchResult(result);
         }
         console.log(searchResult);
       };

  return (
    <div className='App'>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  )
}

export default SearchPage