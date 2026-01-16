import { Link, useLocation } from 'react-router-dom';
import { Scale, BookOpen, Brain, PlayCircle, Menu, X, Bot, Gamepad2, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Header() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Trang chủ', icon: <Scale className="w-5 h-5" /> },
        { path: '/ai-assistant', label: 'Trợ lý AI', icon: <Brain className="w-5 h-5" /> },
        { path: '/flipbook', label: 'Flipbook', icon: <BookOpen className="w-5 h-5" /> },
        { path: '/museum', label: 'Bảo tàng', icon: <Landmark className="w-5 h-5" /> },
        { path: '/games', label: 'Trò chơi', icon: <Gamepad2 className="w-5 h-5" /> },
        { path: '/quiz', label: 'Quiz', icon: <PlayCircle className="w-5 h-5" /> },
        { path: '/ai-usage', label: 'AI Usage', icon: <Bot className="w-5 h-5" /> },
    ];

    return (
        <nav className="fixed top-0 w-full bg-[#8b0000] text-white shadow-md z-50 border-b-2 border-[#d4af37]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="bg-white p-1 rounded-lg overflow-hidden w-auto h-14 flex items-center justify-center border-2 border-[#d4af37]">
                             {/* Logo from public folder - User provided */}
                            <img src="/logo.png" alt="MLN131 Logo" className="h-full w-auto object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-lg leading-none tracking-wide text-[#d4af37]">MLN131</span>
                            <span className="text-xs text-white/80 font-medium tracking-wider">Dân chủ Cơ sở</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                                        ? 'text-[#d4af37] bg-black/20'
                                        : 'text-white/90 hover:text-[#d4af37] hover:bg-white/10'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-[#d4af37]"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#7a0000] border-t border-[#d4af37]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-3 ${location.pathname === item.path
                                        ? 'text-[#d4af37] bg-black/20'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
