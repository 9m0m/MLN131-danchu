import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy, PlayCircle, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { questions, Question } from '../types/quiz';
import { motion } from 'framer-motion';
import './Quiz.css'; // MODULAR CSS

type QuizState = 'START' | 'QUIZ' | 'RESULT';

export function Quiz() {
    const [gameState, setGameState] = useState<QuizState>('START');
    const [username, setUsername] = useState('');
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(10).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Shuffle and pick 10 questions
    const initializeQuiz = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setRandomQuestions(shuffled.slice(0, 10));
        setCurrentQuestionIdx(0);
        setUserAnswers(new Array(10).fill(null));
        setIsSubmitted(false);
    };

    const handleStartQuiz = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;
        initializeQuiz();
        setGameState('QUIZ');
    };

    const handleAnswerSelect = (optionIdx: number) => {
        if (isSubmitted) return;
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIdx] = optionIdx;
        setUserAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIdx < 9) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIdx > 0) {
            setCurrentQuestionIdx(currentQuestionIdx - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        setGameState('RESULT');
    };

    const calculateScore = () => {
        let score = 0;
        randomQuestions.forEach((q, idx) => {
            if (userAnswers[idx] === q.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const resetQuiz = () => {
        setGameState('START');
        setUsername('');
    };

    const replayWithSameName = () => {
        initializeQuiz();
        setGameState('QUIZ');
    };

    // Render Start Screen
    if (gameState === 'START') {
        return (
            <div className="qz-screen-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="qz-start-card"
                >
                    <div className="text-center mb-8">
                        <div className="qz-start-icon-box">
                            <PlayCircle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="qz-start-title">HỆ THỐNG TRẮC NGHIỆM</h1>
                        <p className="text-gray-500 font-serif italic text-sm">Chương 4: Dân chủ XHCN & Nhà nước XHCN</p>
                    </div>

                    <form onSubmit={handleStartQuiz} className="space-y-6">
                        <div className="qz-input-group">
                            <label className="qz-input-label">Họ và Tên Thí sinh</label>
                            <div className="qz-input-wrapper">
                                <User className="qz-input-icon" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Nhập tên của bạn để bắt đầu..."
                                    className="qz-input-field"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="qz-btn-primary"
                        >
                            Bắt đầu Kiểm tra
                        </button>
                    </form>
                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Bộ đề ngẫu nhiên 10 câu từ 60 câu hỏi hệ thống</p>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Render Quiz Screen
    if (gameState === 'QUIZ') {
        const currentQ = randomQuestions[currentQuestionIdx];

        return (
            <div className="min-h-[calc(100vh-64px)] bg-[#fdfbf7] py-12 px-4 font-sans">
                <div className="qz-play-container">
                    {/* Header info */}
                    <div className="qz-header-info">
                        <div className="qz-user-info">
                            <div className="qz-user-icon">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-[#8b0000] uppercase tracking-wider">{username}</span>
                        </div>
                        <div className="qz-progress-box">
                            <div className="text-xs font-bold text-gray-400 uppercase">Tiến trình</div>
                            <div className="qz-progress-dots">
                                {userAnswers.map((ans, i) => (
                                    <div
                                        key={i}
                                        className={`qz-dot ${i === currentQuestionIdx ? 'bg-[#8b0000] scale-125' : ans !== null ? 'bg-[#d4af37]' : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="qz-main-card">
                        <div className="qz-card-body">
                            <div>
                                <div className="mb-8 min-h-[100px] md:min-h-[120px]">
                                    <span className="qz-q-meta">Câu hỏi {currentQuestionIdx + 1} / 10</span>
                                    <h3 className="qz-q-text">
                                        {currentQ.question}
                                    </h3>
                                </div>

                                <div className="qz-options-grid">
                                    {currentQ.options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerSelect(idx)}
                                            className={`qz-option-btn ${userAnswers[currentQuestionIdx] === idx ? 'selected' : ''}`}
                                        >
                                            <div className="qz-opt-label">
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className={`text-sm md:text-base font-medium leading-normal ${userAnswers[currentQuestionIdx] === idx ? 'text-[#8b0000]' : 'text-gray-700'}`}>
                                                {option}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Bar */}
                            <div className="qz-nav-row">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentQuestionIdx === 0}
                                    className="flex items-center gap-2 text-gray-400 hover:text-[#8b0000] disabled:opacity-0 transition-all font-bold uppercase text-[10px] md:text-xs tracking-widest p-2"
                                >
                                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /> Câu trước
                                </button>

                                {currentQuestionIdx === 9 ? (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={userAnswers.includes(null)}
                                        className="flex items-center gap-2 text-[#8b0000] hover:text-[#600000] font-bold uppercase text-[10px] md:text-xs tracking-widest p-2 transition-all disabled:opacity-30 active:scale-95"
                                    >
                                        Hoàn thành <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center gap-2 text-[#8b0000] hover:text-[#600000] font-bold uppercase text-[10px] md:text-xs tracking-widest p-2 transition-all active:translate-x-1"
                                    >
                                        Câu tiếp theo <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render Result Screen
    if (gameState === 'RESULT') {
        const score = calculateScore();
        return (
            <div className="qz-screen-container">
                <div className="max-w-4xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="qz-result-card"
                    >
                        <div className="mb-10">
                            <Trophy className="w-24 h-24 text-[#d4af37] mx-auto mb-6 drop-shadow-lg" />
                            <h2 className="text-4xl font-display font-bold text-[#8b0000] mb-2">CHÚC MỪNG {username.toUpperCase()}!</h2>
                            <p className="text-gray-500 font-serif italic text-lg">Bạn đã hoàn thành bài trắc nghiệm Chương 4</p>
                        </div>

                        <div className="qz-score-pills">
                            <div className="qz-score-circle">
                                <div className="text-sm uppercase tracking-widest font-bold mb-2">Điểm số</div>
                                <div className="text-6xl font-black">{score}<span className="text-2xl text-white/50">/10</span></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                                    <div className="text-xs font-bold text-green-600 uppercase mb-1">Đúng</div>
                                    <div className="text-3xl font-bold text-green-800">{score}</div>
                                </div>
                                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                    <div className="text-xs font-bold text-red-600 uppercase mb-1">Sai</div>
                                    <div className="text-3xl font-bold text-red-800">{10 - score}</div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Review Section */}
                        <div className="qz-review-list">
                            <h3 className="text-xl font-bold text-[#2d2d2d] mb-6 border-l-4 border-[#d4af37] pl-4">Xem lại đáp án</h3>
                            {randomQuestions.map((q, idx) => (
                                <div key={idx} className={`qz-review-item ${userAnswers[idx] === q.correctAnswer ? 'qz-correct' : 'qz-wrong'}`}>
                                    <div className="flex gap-3 items-start">
                                        {userAnswers[idx] === q.correctAnswer ? <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" /> : <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />}
                                        <div className="text-left flex-1">
                                            <p className="font-bold text-gray-800 mb-2">{idx + 1}. {q.question}</p>
                                            <div className="text-sm space-y-1">
                                                <p className="text-gray-600"><span className="font-bold">Bạn chọn:</span> {q.options[userAnswers[idx] as number]}</p>
                                                {userAnswers[idx] !== q.correctAnswer && (
                                                    <p className="text-green-700 font-bold"><span className="font-bold">Đáp án đúng:</span> {q.options[q.correctAnswer]}</p>
                                                )}
                                                <p className="mt-3 text-[#8b0000] italic bg-white/50 p-3 rounded-lg border border-dashed border-[#8b0000]/20 font-serif">
                                                    {q.explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={replayWithSameName}
                                className="px-8 py-4 bg-[#8b0000] text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg hover:bg-[#600000] transition-all"
                            >
                                <RefreshCw className="w-5 h-5 inline-block mr-2" /> Thử lại ngẫu nhiên
                            </button>
                            <button
                                onClick={resetQuiz}
                                className="px-8 py-4 bg-white text-[#8b0000] border-2 border-[#8b0000] rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
                            >
                                Đổi thí sinh
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return null;
}
