import { BookOpen, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIUsage() {
    return (
        <div className="min-h-screen bg-[#1a0f0a] pt-20 pb-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#d4af37] mb-6 uppercase">Ứng dụng AI & Cam kết Học thuật</h1>
                    <div className="w-32 h-1.5 bg-[#d4af37] mx-auto rounded-full mb-8"></div>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Dự án MLN131 ứng dụng các công nghệ trí tuệ nhân tạo tiên tiến để hỗ trợ quá trình học tập, phát triển và sáng tạo nội dung, đảm bảo tính chính xác và trải nghiệm người dùng tốt nhất.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Content Generation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all hover:bg-white/10"
                    >
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">NotebookLM</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Hỗ trợ tổng hợp kiến thức chuyên sâu và soạn thảo ngân hàng câu hỏi trắc nghiệm trực tiếp từ Giáo trình MLN131 chính thống. Giúp đảm bảo tính chính xác của nội dung ôn tập.
                        </p>
                    </motion.div>

                    {/* Development Assistant */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all hover:bg-white/10"
                    >
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">GitHub Copilot</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Trợ lý lập trình thông minh giúp xây dựng cấu trúc website, tối ưu hóa mã nguồn và đảm bảo hiệu năng vận hành mượt mà trên mọi thiết bị.
                        </p>
                    </motion.div>

                    {/* Creative Design */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all hover:bg-white/10"
                    >
                        <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 text-yellow-400">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Gemini Image Gen</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Công cụ tạo sinh hình ảnh minh họa và Logo dự án, mang lại trải nghiệm thị giác hiện đại, đồng bộ và phù hợp với chủ đề Dân chủ Cơ sở.
                        </p>
                    </motion.div>
                </div>

                {/* Academic Commitment Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-8 bg-[#d4af37]/10 rounded-2xl border border-[#d4af37]/30 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#d4af37]"></div>
                    <h3 className="text-[#d4af37] font-display font-bold text-xl mb-3">CAM KẾT CHẤT LƯỢNG NỘI DUNG</h3>
                    <p className="text-white/90 font-serif italic text-lg md:text-xl">
                        "Toàn bộ nội dung Quiz và kiến thức chuyên môn được trích xuất nguyên bản từ GIAO TRINH CNXHKH_2021 giáo trình chủ nghĩa xã hội khoa học."
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
