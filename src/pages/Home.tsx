import { ChevronDown, Users, BookOpen } from 'lucide-react';
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
                        Tìm hiểu về quyền và trách nhiệm của công dân trong việc tham gia xây dựng và giám sát chính quyền địa phương. Học thông qua flipbook, quiz và trò chơi tương tác.
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

            {/* Story Section - Why Create This Product */}
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
                            <div className="hm-feat-number">01</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nguồn gốc & Mục tiêu</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Sản phẩm ra đời để hệ thống hóa nội dung MLN131, giúp người học tiếp cận lý luận một cách trực quan thay vì chỉ đọc văn bản thuần túy.
                            </p>
                        </div>

                        <div className="hm-feat-card">
                            <div className="hm-feat-number alt">02</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Vì sao nên sử dụng?</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Bạn có thể học nhanh qua flipbook, ôn tập bằng quiz và tra cứu ý chính một cách mạch lạc hơn, giảm tải thời gian ghi nhớ rời rạc.
                            </p>
                        </div>

                        <div className="hm-feat-card">
                            <div className="hm-feat-number">03</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Tác dụng vượt ngoài giáo trình</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Tăng khả năng phản biện, kết nối thực tiễn địa phương và hình thành tư duy công dân chủ động, không chỉ dừng ở việc đọc tài liệu giấy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic Selection Section */}
            <section className="hm-section hm-white-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="hm-section-title">Tại sao chọn "Dân chủ Cơ sở"?</h2>
                        <p className="text-xl text-gray-600 font-serif italic text-center mt-4">
                            "Dân là gốc rễ của nước, mọi việc phải dân làm chủ"
                        </p>
                        <div className="hm-divider mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="hm-feat-card">
                            <div className="hm-feat-number alt">01</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nguồn Gốc</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Dân chủ cơ sở là hình thái dân chủ cổ xưa nhất của dân tộc Việt. Mọi gia đình là nơi đầu tiên hình thành nhận thức dân chủ trong mỗi cá nhân.
                            </p>
                        </div>
                        <div className="hm-feat-card">
                            <div className="hm-feat-number">02</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Kết Nối</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Kết nối lý thuyết với thực tiễn đóng góp của người dân tại địa phương, giúp sinh viên thấu đáo vai trò công dân trong cộng đồng.
                            </p>
                        </div>
                        <div className="hm-feat-card">
                            <div className="hm-feat-number alt">03</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Hành Động</h3>
                            <p className="text-gray-700 leading-relaxed font-serif">
                                Kích thích thế hệ trẻ tham gia sự kiện cộng đồng, đóng góp ý kiến về chính sách nơi địa phương một cách tích cực và hiệu quả.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Democracy Principles Section */}
            <section className="hm-section hm-white-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="hm-section-title">Phương châm thực hiện dân chủ ở cơ sở</h2>
                        <p className="text-xl text-gray-600 font-serif italic text-center mt-4">
                            Dân chủ là của dân, do dân, vì dân
                        </p>
                        <div className="hm-divider mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân biết
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Nhà nước công khai, minh bạch thông tin về các vấn đề liên quan đến lợi ích và quyết định của nhân dân.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân bàn
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Người dân được tham gia thảo luận, đóng góp ý kiến, trí tuệ để xây dựng các chủ trương, chính sách.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân làm
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Nhân dân trực tiếp tham gia thực hiện các công việc, dự án tại địa phương.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân kiểm tra
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Người dân có quyền giám sát, đánh giá quá trình thực hiện và kết quả của các công việc.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân giám sát
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Nhân dân tham gia giám sát hoạt động của bộ máy nhà nước, cán bộ, công chức.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#8b0000] to-[#a00000] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#d4af37]">
                            <p className="text-2xl font-serif font-bold mb-4">
                                Dân thụ hưởng
                            </p>
                            <p className="text-sm text-gray-100 font-serif">
                                Nhân dân trực tiếp được hưởng thụ thành quả từ các hoạt động phát triển kinh tế - xã hội.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="hm-footer">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        {/* Logo Footer */}
                        <div className="flex items-center justify-center flex-shrink-0" style={{ width: '80px', height: '80px', aspectRatio: '1' }}>
                            <img src="/logo3.png" alt="MLN131 Logo" className="max-w-full max-h-full object-contain" />
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
