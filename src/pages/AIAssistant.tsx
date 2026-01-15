import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertCircle, Loader2, Info } from 'lucide-react';
import { Mistral } from '@mistralai/mistralai';
import { ChatMessage, AI_CONFIG } from '../config/ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './AIAssistant.css'; // MODULAR CSS

export function AIAssistant() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: AI_CONFIG.initialGreeting,
            timestamp: Date.now(),
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_MISTRAL_ACCESS_TOKEN;

        if (!apiKey) {
            setError('Chưa cấu hình API Key. Vui lòng thêm VITE_MISTRAL_ACCESS_TOKEN vào file .env');
            setIsLoading(false);
            return;
        }

        try {
            const client = new Mistral({ apiKey });

            const chatResponse = await client.chat.complete({
                model: AI_CONFIG.model,
                temperature: AI_CONFIG.temperature,
                maxTokens: AI_CONFIG.maxTokens,
                messages: [
                    {
                        role: 'system',
                        content: AI_CONFIG.systemPrompt
                    },
                    ...messages.map(m => ({ role: m.role, content: m.content })),
                    { role: 'user', content: userMessage.content }
                ],
            });

            const assistantMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: (chatResponse.choices && chatResponse.choices[0].message.content) as string || 'Xin lỗi, tôi không thể trả lời lúc này.',
                timestamp: Date.now(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            console.error(err);
            setError('Đã có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="ai-root-container">
            <div className="ai-bg-pattern"></div>

            <div className="ai-main-wrapper">
                <div className="ai-header-pc">
                    <h1 className="ai-header-title">Trợ lý ảo MLN131</h1>
                    <p className="text-gray-500 font-serif italic text-sm">Hệ thống chuyển đổi số Triết học - Học viện FPT</p>
                </div>

                <div className="ai-chat-card">
                    <div className="ai-message-area custom-scrollbar">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`ai-message-row ${msg.role === 'user' ? 'ai-row-user' : ''}`}
                            >
                                <div
                                    className={`ai-avatar ${msg.role === 'user' ? 'ai-avatar-user' : 'ai-avatar-bot'}`}
                                >
                                    {msg.role === 'user' ? <User className="w-5 h-5 md:w-6 md:h-6" /> : <Bot className="w-5 h-5 md:w-6 md:h-6" />}
                                </div>

                                <div
                                    className={`ai-bubble ${msg.role === 'user' ? 'ai-bubble-user' : 'ai-bubble-bot'}`}
                                >
                                    <div className={`prose prose-sm md:prose-base max-w-none ${msg.role === 'user' ? 'prose-invert' : 'prose-slate'}`}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({ ...props }) => <h1 className="text-xl md:text-2xl font-bold text-[#8b0000] mb-4 mt-2" {...props} />,
                                                h2: ({ ...props }) => <h2 className="text-lg md:text-xl font-bold text-[#8b0000] mb-3 mt-4" {...props} />,
                                                h3: ({ ...props }) => <h3 className="text-base md:text-lg font-bold text-[#8b0000] mb-2 mt-3" {...props} />,
                                                p: ({ ...props }) => <p className="mb-4 leading-relaxed whitespace-pre-wrap" {...props} />,
                                                ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />,
                                                li: ({ ...props }) => <li className="marker:text-[#d4af37]" {...props} />,
                                                hr: () => <hr className="my-6 border-[#d4af37]/20" />
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="ai-message-row">
                                <div className="ai-avatar ai-avatar-bot">
                                    <Bot className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="ai-bubble ai-bubble-bot">
                                    <Loader2 className="w-6 h-6 animate-spin text-[#d4af37]" />
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center justify-center text-red-600 bg-red-50 p-4 rounded-2xl mx-auto max-w-md border border-red-100 mb-4 shadow-sm">
                                <AlertCircle className="w-5 h-5 mr-3" />
                                <span className="font-medium">{error}</span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="ai-input-section">
                        <form onSubmit={handleSubmit} className="ai-input-form">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Hãy đặt câu hỏi triết học tại đây..."
                                className="ai-input-field font-sans"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="ai-send-btn"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" /> : <Send className="w-5 h-5 md:w-6 md:h-6" />}
                            </button>
                        </form>

                        <div className="ai-disclaimer">
                            <Info className="w-3 h-3 text-[#d4af37]/60" />
                            <span className="font-serif italic text-center">
                                Thông tin do AI tạo ra chỉ mang tính chất tham khảo.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
