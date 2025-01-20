import {Loader2, Search} from "lucide-react";
import {useState} from "react";

const Searching = () => {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <main className="flex-1 min-h-screen">
            <div className="p-8">
                <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="검색어를 입력하세요..."
                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 disabled:opacity-50"
                    >
                        {isLoading
                            ? (<Loader2 className="w-5 h-5 animate-spin"/>)
                            : (<Search className="w-5 h-5"/>)
                        }
                    </button>
                </div>

                <div className="space-y-4">
                    {/*{results.map((result, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-gray-800">
                                {highlightQuery(result.content)}
                            </p>
                            {result.relevanceScore && (
                                <div className="mt-2 text-sm text-gray-500">
                                    관련도: {(result.relevanceScore * 100).toFixed(1)}%
                                </div>
                            )}
                        </div>
                    ))}*/}
                </div>

                {isLoading && (
                    <div className="flex justify-center items-center py-8">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-500"/>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Searching