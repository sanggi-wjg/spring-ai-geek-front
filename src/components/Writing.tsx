import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {RotateCcw, Sparkles} from "lucide-react";

const Writing = () => {
    const [userText, setUserText] = useState<string>("");
    const [suggestionResponse, setSuggestionResponse] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchSuggestionResponse = useCallback(async (text: string) => {
        if (!text.trim()) return;
        setIsLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:8080/writing-assistant",
                {text: text},
                {headers: {"Content-Type": "application/json"}}
            );
            setSuggestionResponse(response.data);
        } catch (e) {
            console.error("Error fetching suggestion:", e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (userText.trim() !== "") {
                fetchSuggestionResponse(userText);
            }
        }, 1000);

        return () => clearTimeout(debounceTimer);
    }, [userText, fetchSuggestionResponse]);

    const onUserTextChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserText(e.target.value);
    };

    return (
        <main className="flex-1 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex gap-6">
                    {/* Text Editor Area */}
                    <div className="flex-1">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            {/* Editor Toolbar */}
                            <div className="border-b border-gray-200 px-4 py-2 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-2">
                                        <button
                                            className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                                            <RotateCcw className="w-4 h-4"/>
                                        </button>
                                    </div>
                                    <button
                                        className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                        <Sparkles className="w-4 h-4"/>
                                        <span>AI 제안 받기</span>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                    <textarea
                                        className="w-full h-96 p-4 bg-white border-0 focus:ring-0 text-gray-800 text-lg resize-none"
                                        placeholder="여기에 텍스트를 입력하세요..."
                                        style={{outline: 'none'}}
                                        value={userText}
                                        onChange={onUserTextChanged}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="w-96">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            <div className="border-b border-gray-200 px-6 py-4">
                                <h2 className="text-lg font-semibold text-gray-900">AI 제안</h2>
                            </div>

                            <div className="p-4 space-y-4 max-h-[calc(100vh-240px)] overflow-y-auto">
                                {isLoading ? "분석 중..." : (suggestionResponse || "AI가 제안하는 문장 개선 내용이 이곳에 표시됩니다.")}
                                {/*{suggestions.map((suggestion) => (
                                        <div key={suggestion.id}
                                             className="bg-gray-50 rounded-xl p-4 space-y-3 hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-indigo-600">
                                                  {suggestion.type}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 text-sm">
                                                {suggestion.content}
                                            </p>

                                            <div className="space-y-2">
                                                <div className="bg-white rounded-lg p-3 text-sm">
                                                    <div className="text-gray-500 mb-1">원문:</div>
                                                    <div className="text-gray-800">{suggestion.original}</div>
                                                </div>

                                                <div className="bg-indigo-50 rounded-lg p-3 text-sm">
                                                    <div className="text-indigo-600 mb-1">제안:</div>
                                                    <div className="text-gray-800">{suggestion.suggested}</div>
                                                </div>
                                            </div>

                                            <div className="flex justify-end space-x-2 pt-2">
                                                <button
                                                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                                                    무시
                                                </button>
                                                <button
                                                    className="px-3 py-1 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                                                    적용
                                                </button>
                                            </div>
                                        </div>
                                    ))}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        /*<main className="flex-1 min-h-screen">
            <div className="flex-1 p-6">
                <div className="bg-white rounded-lg shadow-sm p-6 h-full">
                    <textarea
                        className="w-full h-full min-h-[500px] resize-none border-0 focus:ring-0 text-gray-900 placeholder-gray-400"
                        placeholder="여기에 글을 작성해주세요..."
                        value={userText}
                        onChange={onUserTextChanged}/>
                </div>
            </div>

            <div className="w-[600px] bg-white border-l border-gray-200 p-6 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">AI 제안</h2>
                <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-blue-800 mb-2">문장 개선 제안</h3>
                        <p className="text-sm text-blue-700">
                            {isLoading ? "분석 중..." : (suggestionResponse || "AI가 제안하는 문장 개선 내용이 이곳에 표시됩니다.")}
                        </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-green-800 mb-2">문법 검사</h3>
                        <p className="text-sm text-green-700">
                            문법 관련 제안 사항이 이곳에 표시됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </main>*/
    );
};

export default Writing;