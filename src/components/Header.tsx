import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronDown, ChevronUp, SlidersHorizontal, X} from 'lucide-react';
import {useState} from "react";

export const Header = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSystemPromptOpen, setIsSystemPromptOpen] = useState(true);
    const [isAdvancedParamsOpen, setIsAdvancedParamsOpen] = useState(true);

    return (
        <header className="bg-white shadow-sm">
            <div className="px-8 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">🐜개미는 뚠뚠 🐜 오늘도 뚠뚠 🐜 열심히 일을 하네🐜</h1>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SlidersHorizontal className="w-4 h-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96 p-4">
                        <div className="space-y-4">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800">LLM Arguments</h2>
                                <DropdownMenuItem className="h-8 w-8 p-0 flex items-center justify-center">
                                    <X className="w-5 h-5"/>
                                </DropdownMenuItem>
                            </div>

                            {/* Prompt */}
                            <div>
                                <button
                                    onClick={() => setIsSystemPromptOpen(!isSystemPromptOpen)}
                                    className="w-full flex justify-between items-center py-2 text-gray-800 hover:bg-gray-50"
                                >
                                    <span className="font-medium">System Prompt</span>
                                    {isSystemPromptOpen ? (
                                        <ChevronUp className="w-5 h-5"/>
                                    ) : (
                                        <ChevronDown className="w-5 h-5"/>
                                    )}
                                </button>
                                {isSystemPromptOpen && (
                                    <input
                                        type="text"
                                        placeholder="Enter system prompt"
                                        className="w-full mt-2 p-2 border border-gray-200 rounded-md text-sm text-gray-600"
                                    />
                                )}
                            </div>

                            {/* Advanced Params */}
                            <div>
                                <button
                                    onClick={() => setIsAdvancedParamsOpen(!isAdvancedParamsOpen)}
                                    className="w-full flex justify-between items-center py-2 text-gray-800 hover:bg-gray-50"
                                >
                                    <span className="font-medium">Advanced Params</span>
                                    {isAdvancedParamsOpen ? (
                                        <ChevronUp className="w-5 h-5"/>
                                    ) : (
                                        <ChevronDown className="w-5 h-5"/>
                                    )}
                                </button>
                                {isAdvancedParamsOpen && (
                                    <div className="mt-2 space-y-3">
                                        {[
                                            'Stream Chat Response',
                                            'Seed',
                                            'Stop Sequence',
                                            'Temperature',
                                            'Mirostat',
                                            'Mirostat Eta',
                                            'Mirostat Tau',
                                            'Top K',
                                            'Top P',
                                            'Min P',
                                            'Frequency Penalty',
                                            'Repeat Last N',
                                            'Tfs Z',
                                            'Context Length',
                                            'Batch Size (num_batch)',
                                            'Tokens To Keep On Context Refresh (num_keep)',
                                            'Max Tokens (num_predict)',
                                            'use_mmap (Ollama)',
                                            'use_mlock (Ollama)',
                                            'num_thread (Ollama)',
                                            'num_gpu (Ollama)'
                                        ].map((param) => (
                                            <div key={param} className="flex justify-between items-center py-1">
                                                <span className="text-gray-700 text-sm">{param}</span>
                                                <span className="text-gray-500 text-sm">Default</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
