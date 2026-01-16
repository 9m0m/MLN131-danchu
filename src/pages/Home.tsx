import { ChevronDown, Users, Activity, Globe, MessageSquare, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css'; // MODULAR CSS

export function Home() {
    return (
        <div className="hm-main">
            {/* Hero Section */}
            <section className="hm-hero">
                <div className="hm-hero-pattern"></div>

                <div className="hm-hero-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hm-badge"
                    >
                        <Users className="w-4 h-4" />
                        <span>Tiếng nói của người dân từ thực tiễn</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="hm-hero-title"
                    >
                        DÂN CHỦ CƠ SỞ<br />
                        <span>QUYỀN LỰC NHÂN DÂN</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hm-hero-desc"
                    >
                        Dự án được tạo ra để biến kiến thức dân chủ cơ sở thành trải nghiệm học tập sống động,
                        dễ hiểu, dễ áp dụng trong thực tiễn.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="hm-btn-group"
                    >
                        <a href="#story" className="hm-btn-fill">
                            <span>Khám phá ngay</span>
                        </a>
                        <a href="/flipbook" className="hm-btn-outline">
                            <BookOpen className="w-4 h-4" />
                            <span>Đọc lý luận</span>
                        </a>
                    </motion.div>

                    <ChevronDown className="w-8 h-8 text-[#8b0000] mx-auto animate-bounce mt-8" />
                </div>
            </section>

            {/* Story Section */}
            <section id="story" className="hm-section hm-white-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="hm-section-title">Vì sao tạo ra sản phẩm này?</h2>
                        <p className="text-xl text-gray-600 font-serif italic text-center mt-4">
                            Kết nối kiến thức lý luận với trải nghiệm số để học nhanh hơn, nhớ lâu hơn và áp dụng tốt hơn.
                        </p>
                        <div className="hm-divider mt-6"></div>
                    </div>

                    <div className="hm-grid-3">
                        <div className="hm-feat-card">
                            <div className="hm-feat-number">1</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nguồn gốc & Mục tiêu</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Sản phẩm ra đời để hệ thống hóa nội dung MLN131, giúp người học tiếp cận lý luận một cách
                                trực quan thay vì chỉ đọc văn bản thuần túy.
                            </p>
                        </div>

                        <div className="hm-feat-card">
                            <div className="hm-feat-number alt">2</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Vì sao nên sử dụng?</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Bạn có thể học nhanh qua flipbook, ôn tập bằng quiz và tra cứu ý chính một cách mạch lạc,
                                giảm tải thời gian ghi nhớ rời rạc.
                            </p>
                        </div>

                        <div className="hm-feat-card">
                            <div className="hm-feat-number">3</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Tác dụng vượt ngoài giáo trình</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Tăng khả năng phản biện, kết nối thực tiễn địa phương và hình thành tư duy công dân số chủ động,
                                không chỉ dừng ở việc đọc tài liệu giấy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evaluation & Solutions Section */}
            <section id="evaluation" className="hm-section hm-bg-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="hm-section-title uppercase tracking-tight">Đánh giá & Giải pháp</h2>
                        <p className="text-xl text-gray-600 font-serif italic text-center">"Để tiếng nói người dân thực sự trở thành nguồn động lực phát triển"</p>
                        <div className="hm-divider mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="hm-eval-card good">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display flex items-center">
                                    <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">✓</span>
                                    Ưu điểm & Kết quả
                                </h3>
                                <ul className="space-y-3 text-gray-700 font-serif list-disc pl-5">
                                    <li>Nhận thức về dân chủ của người dân ngày càng được nâng cao.</li>
                                    <li>Cơ chế "Dân biết, dân bàn..." đi vào thực chất, tạo đồng thuận xã hội.</li>
                                    <li>Góp phần quan trọng vào công tác xây dựng, chỉnh đốn Đảng và bộ máy Nhà nước.</li>
                                </ul>
                            </div>

                            <div className="hm-eval-card bad">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display flex items-center">
                                    <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">!</span>
                                    Hạn chế & Thách thức
                                </h3>
                                <ul className="space-y-3 text-gray-700 font-serif list-disc pl-5">
                                    <li>Việc thực hiện dân chủ ở một số nơi còn mang tính hình thức.</li>
                                    <li>Vai trò giám sát, phản biện của một bộ phận người dân chưa phát huy hết tiềm năng.</li>
                                    <li>Tình trạng quan liêu, xa rời quần chúng của một bộ phận cán bộ vẫn còn tồn tại.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#1a0f0a] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-center border border-[#d4af37]/20">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">Live Assessment</div>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-[#d4af37] mb-8">Đề xuất Giải pháp 2026</h3>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <div className="mr-4 text-2xl group-hover:scale-110 transition-transform">📱</div>
                                    <div>
                                        <h4 className="font-bold text-[#d4af37]">Chuyển đổi số Dân chủ</h4>
                                        <p className="text-sm text-gray-400">Ứng dụng App di động để dân bầu chọn và giám sát dự án địa phương 24/7.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <div className="mr-4 text-2xl group-hover:scale-110 transition-transform">🏛️</div>
                                    <div>
                                        <h4 className="font-bold text-[#d4af37]">Nâng cao Trách nhiệm giải trình</h4>
                                        <p className="text-sm text-gray-400">Thiết lập kênh đối thoại trực tiếp hàng tháng giữa lãnh đạo và người dân.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <div className="mr-4 text-2xl group-hover:scale-110 transition-transform">🎓</div>
                                    <div>
                                        <h4 className="font-bold text-[#d4af37]">Giáo dục Chính trị Phổ thông</h4>
                                        <p className="text-sm text-gray-400">Đưa nội dung Dân chủ cơ sở vào chương trình đào tạo kỹ năng sống cho giới trẻ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Dashboard Section */}
            <section className="hm-section hm-dark-section relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-display font-bold text-[#d4af37] mb-4 uppercase leading-tight">Dữ liệu Thực tiễn 2026</h2>
                            <p className="text-gray-400 font-serif italic text-lg">Mô phỏng mức độ lan tỏa của Dân chủ cơ sở tại các địa phương điểm.</p>
                        </div>
                        <div className="hm-stat-pills">
                            <div className="hm-stat-item">
                                <Globe className="w-6 h-6 text-[#d4af37] mx-auto mb-2" />
                                <div className="text-2xl font-bold">63</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Tỉnh Thành</div>
                            </div>
                            <div className="hm-stat-item">
                                <Activity className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold">89%</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Hài lòng</div>
                            </div>
                        </div>
                    </div>

                    <div className="hm-grid-3">
                        <div className="hm-dash-card">
                            <MessageSquare className="w-10 h-10 text-[#d4af37] mb-6 hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 font-display text-[#d4af37] uppercase tracking-wide">Ý kiến đóng góp</h3>
                            <div className="h-2 w-full bg-white/5 rounded-full mb-4 overflow-hidden shadow-inner">
                                <div className="h-full bg-gradient-to-r from-[#d4af37] to-amber-200 w-[92%]"></div>
                            </div>
                            <p className="text-sm text-gray-400 font-serif leading-relaxed">92% dự án hạ tầng được dân thảo luận và đóng góp ý kiến từ giai đoạn quy hoạch (thực tiễn xã điểm).</p>
                        </div>

                        <div className="hm-dash-card">
                            <Globe className="w-10 h-10 text-[#d4af37] mb-6 hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 font-display text-[#d4af37] uppercase tracking-wide">Công khai Ngân sách</h3>
                            <div className="h-2 w-full bg-white/5 rounded-full mb-4 overflow-hidden shadow-inner">
                                <div className="h-full bg-gradient-to-r from-[#d4af37] to-amber-200 w-[85%]"></div>
                            </div>
                            <p className="text-sm text-gray-400 font-serif leading-relaxed">85% phường, xã số hóa việc công khai thu chi ngân sách qua nền tảng Chính quyền điện tử (E-Gov).</p>
                        </div>

                        <div className="hm-dash-card">
                            <Activity className="w-10 h-10 text-[#d4af37] mb-6 hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 font-display text-[#d4af37] uppercase tracking-wide">Giám sát Nhân dân</h3>
                            <div className="h-2 w-full bg-white/5 rounded-full mb-4 overflow-hidden shadow-inner">
                                <div className="h-full bg-gradient-to-r from-[#d4af37] to-amber-200 w-[78%]"></div>
                            </div>
                            <p className="text-sm text-gray-400 font-serif leading-relaxed">78% người dân thường xuyên sử dụng quyền giám sát thông qua Ban Thanh tra Nhân dân và Ban Giám sát đầu tư cộng đồng.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="hm-footer">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        {/* Logo Footer */}
                        <div className="bg-white p-1 rounded-lg overflow-hidden w-auto h-20 flex items-center justify-center border-2 border-[#d4af37]">
                            <img src="/logo.png" alt="MLN131 Logo" className="h-full w-auto object-contain" />
                        </div>
                        <span className="font-display font-bold text-3xl tracking-wide">MLN131</span>
                    </div>
                    <p className="text-white/70 font-serif text-lg leading-relaxed max-w-2xl mx-auto text-center">
                        Sản phẩm học tập môn MLN131 - Chủ nghĩa Xã hội Khoa học <br />
                        Đại học FPT - Hệ thống giáo dục tiên tiến
                    </p>
                    <div className="mt-8 pt-8 border-t border-white/5 text-white/30 text-xs uppercase tracking-[0.3em] font-sans">
                        &copy; 2026 Toàn bộ quyền sở hữu trí tuệ thuộc về nhóm nghiên cứu MLN131
                    </div>
                </div>
            </footer>
        </div>
    );
}
