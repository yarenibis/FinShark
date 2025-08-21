import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";

export const router = createBrowserRouter([{ //pathlere göre hangi bileşenler çalışacak
    path:"/", //ana yol (http://localhost:5173/)
    element: <App/>, //ana bileşen
    children:[ //app içinde render edilecek bileşenler
      { path: "", element: <HomePage /> },   //"/" adresinde HomePage açılır
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignPage /> },
      {
          path: "company/:ticker",
          element: <CompanyPage /> ,
          children:[
            {path: "company-profile", element:<CompanyProfile/>},
            {path:"income-statement", element: <IncomeStatement/> }
          ],
      }
    ]
}])