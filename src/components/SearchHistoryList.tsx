import axios from 'axios'
import {useEffect, useState} from "react";
import {JSONTree} from "react-json-tree";

interface Page {
    page: number,
    size: number,
    totalPage: number,
    totalElements: number,
    numberOfElements: number,
    haxPrevious: boolean,
    hasNext: boolean,
}

interface SearchHistory {
    id: string,
    query: string,
    searchFrom: string,
    responseData: Record<string, unknown>,
    createdAt: string,
}

interface SearchHistoryPage {
    page: Page,
    items: SearchHistory[],
}

const SearchHistoryList = () => {
    const [searchHistoryPage, setSearchHistoryPage] = useState<SearchHistoryPage>()

    useEffect(() => {
        const fetchSearchHistoryPage = async () => {
            try {
                const response = await axios.get<SearchHistoryPage>("http://localhost:8080/api/v1/search-histories")
                setSearchHistoryPage(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchSearchHistoryPage()
    }, [])

    return (
        <main className="flex-1 min-h-screen">
            <div>
                <h2>Search History</h2>
                {searchHistoryPage ? (
                    <ul>
                        {searchHistoryPage.items.map((searchHistory) => (
                            <div key={searchHistory.id}>
                                <p>{searchHistory.query}, {searchHistory.searchFrom}, {searchHistory.createdAt}</p>
                                <JSONTree data={searchHistory.responseData}/>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    )
}

export default SearchHistoryList
