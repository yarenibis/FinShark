// api/search.ts
import axios, { isAxiosError } from "axios";
import type { CompanySearch } from "./company";

// Bu fonksiyon "CompanySearch[]" döndürsün ya da hata mesajı string döndürsün:
export const searchCompanies = async (
  query: string
): Promise<CompanySearch[] | string> => {
  const url = `https://financialmodelingprep.com/stable/search-symbol?query=${encodeURIComponent(
    query
  )}&apikey=${import.meta.env.VITE_FMP_API_KEY}`; // anahtarı .env'den al

  try {
    // Endpoint doğrudan dizi döndürür
    const response = await axios.get<CompanySearch[]>(url);
    return response.data; // CompanySearch[]
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.log("Axios error:", error.message);
      return error.message; // string
    }
    console.log("Unexpected error:", error);
    return "An unexpected error has occurred."; // string
  }
};
