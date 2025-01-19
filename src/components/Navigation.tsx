import {useState} from "react";
import {ChevronDown, Edit, Home, Search} from "lucide-react";

export const Navigation = () => {
    const [isWritingOpen, setIsWritingOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="w-64 min-h-screen bg-white shadow-sm">
            <div className="p-4 space-y-2">
                <a href="#"
                   className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Home className="w-5 h-5"/>
                    <span>홈</span>
                </a>

                <div className="space-y-1">
                    <button onClick={() => setIsWritingOpen(!isWritingOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                            <Edit className="w-5 h-5"/>
                            <span>글 작성</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${isWritingOpen ? 'transform rotate-180' : ''}`}
                        />
                    </button>

                    {/* Dropdown items */}
                    {isWritingOpen && (
                        <div className="pl-12 space-y-1">
                            <a href="/writing"
                               className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                일반 글 작성
                            </a>
                            <a href="#"
                               className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                사내 메신저 메시지 작성
                            </a>
                        </div>
                    )}
                </div>

                <div className="space-y-1">
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                            <Search className="w-5 h-5"/>
                            <span>웹 검색</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${isSearchOpen ? 'transform rotate-180' : ''}`}
                        />
                    </button>

                    {/* Dropdown items */}
                    {isSearchOpen && (
                        <div className="pl-12 space-y-1">
                            <a href="#"
                               className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                검색 요약
                            </a>
                            <a href="/search-histories"
                               className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                검색 기록
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}