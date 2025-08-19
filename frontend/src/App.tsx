import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import type { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search,setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const[portfolioValues,setPortfolioValues] = useState<string[]>([]);
  const [serverError,setServerError] = useState<string>("");

      const handleSearchChange =(e : ChangeEvent<HTMLInputElement>) =>{
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
      <ListPortfolio portfolioValues={portfolioValues}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  )
}

export default App
