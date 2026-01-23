// ============================================
// TRANG GAMES - Trung tâm trò chơi
// ============================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ArrowLeft, Play, Star, Clock, Users } from 'lucide-react';
import { VisualNovel } from './VisualNovel';
import './Games.css';

// Danh sách các game có sẵn
const gameList = [
    {
        id: 'visual-novel',
        title: 'Vương Quốc Aurelia',
        description: 'Trải nghiệm 5 giai đoạn lịch sử quan trọng của vương quốc giả tưởng Aurelia. Mỗi quyết định của bạn sẽ định hình tương lai quốc gia.',
        icon: '⚔️',
        category: 'Visual Novel',
        difficulty: 'Khó',
        duration: '15-20 phút',
        features: ['5 giai đoạn lịch sử', '4 kết thúc khác nhau', '3 chỉ số quản lý'],
        isNew: true,
        isAvailable: true
    },
    {
        id: 'quiz-philosophy',
        title: 'Đố Vui Triết Học',
        description: 'Kiểm tra kiến thức triết học Mác-Lênin qua các câu hỏi trắc nghiệm thú vị.',
        icon: '🧠',
        category: 'Quiz Game',
        difficulty: 'Dễ - Khó',
        duration: '5-10 phút',
        features: ['Nhiều cấp độ', 'Bảng xếp hạng', 'Gợi ý thông minh'],
        isNew: false,
        isAvailable: false
    },
    {
        id: 'debate-sim',
        title: 'Tranh Luận Triết Học',
        description: 'Tham gia tranh luận với AI về các chủ đề triết học kinh điển.',
        icon: '💬',
        category: 'Simulation',
        difficulty: 'Khó',
        duration: '15-20 phút',
        features: ['AI thông minh', 'Nhiều chủ đề', 'Phân tích chi tiết'],
        isNew: false,
        isAvailable: false
    }
];

export function Games() {
    // State để theo dõi game đang chơi
    const [activeGame, setActiveGame] = useState<string | null>(null);

    // Nếu đang chơi Visual Novel
    if (activeGame === 'visual-novel') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                {/* Nút quay lại */}
                <motion.button
                    className="fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all"
                    onClick={() => setActiveGame(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft size={20} />
                    <span>Thoát Game</span>
                </motion.button>
                
                <VisualNovel />
            </div>
        );
    }

    // Trang danh sách game
    return (
        <div className="gm-container">
            {/* Header */}
            <motion.div 
                className="gm-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Gamepad2 className="gm-icon" />
                <h1 className="gm-title">Trung Tâm Trò Chơi</h1>
                <p className="gm-subtitle">
                    Học triết học qua các trò chơi tương tác thú vị
                </p>
            </motion.div>

            {/* Game Grid */}
            <div className="gm-grid">
                {gameList.map((game, index) => (
                    <motion.div
                        key={game.id}
                        className={`gm-card ${!game.isAvailable ? 'gm-card-disabled' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={game.isAvailable ? { scale: 1.02, y: -5 } : {}}
                    >
                        {/* Badge */}
                        {game.isNew && (
                            <div className="gm-badge-new">
                                <Star size={12} /> MỚI
                            </div>
                        )}
                        {!game.isAvailable && (
                            <div className="gm-badge-soon">
                                SẮP RA MẮT
                            </div>
                        )}

                        {/* Icon */}
                        <div className="gm-card-icon">{game.icon}</div>

                        {/* Content */}
                        <h3 className="gm-card-title">{game.title}</h3>
                        <span className="gm-card-category">{game.category}</span>
                        <p className="gm-card-desc">{game.description}</p>

                        {/* Meta Info */}
                        <div className="gm-card-meta">
                            <span className="gm-meta-item">
                                <Clock size={14} /> {game.duration}
                            </span>
                            <span className="gm-meta-item">
                                <Users size={14} /> {game.difficulty}
                            </span>
                        </div>

                        {/* Features */}
                        <div className="gm-card-features">
                            {game.features.map((feature, i) => (
                                <span key={i} className="gm-feature-tag">
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* Play Button */}
                        <motion.button
                            className={`gm-play-btn ${!game.isAvailable ? 'gm-play-btn-disabled' : ''}`}
                            onClick={() => game.isAvailable && setActiveGame(game.id)}
                            disabled={!game.isAvailable}
                            whileHover={game.isAvailable ? { scale: 1.05 } : {}}
                            whileTap={game.isAvailable ? { scale: 0.95 } : {}}
                        >
                            <Play size={18} />
                            {game.isAvailable ? 'CHƠI NGAY' : 'SẮP RA MẮT'}
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Footer Info */}
            <motion.div 
                className="gm-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p>💡 Các trò chơi được thiết kế để giúp bạn hiểu sâu hơn về triết học Mác-Lênin và lịch sử Việt Nam.</p>
            </motion.div>
        </div>
    );
}
