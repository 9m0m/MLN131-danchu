import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookOpen, Star, Quote } from 'lucide-react';
import './Flipbook.css';

interface PageProps {
    number?: number;
    children: React.ReactNode;
    title?: string;
    className?: string;
    side?: 'left' | 'right';
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className={`fb-page-root ${props.className || ''}`} ref={ref}>
            <div className="fb-page-texture"></div>

            <div className="fb-page-content">
                {props.title && (
                    <div className="fb-page-header">
                        <h4>{props.title}</h4>
                    </div>
                )}

                <div className="fb-page-body">
                    {props.children}
                </div>

                {props.number && (
                    <div className="fb-page-number">
                        - {props.number} -
                    </div>
                )}
            </div>

            {/* Dynamic Binding Shadow based on orientation (Spine side) */}
            {props.side === 'left' ? (
                <div className="fb-spine-shadow fb-spine-shadow-left"></div>
            ) : (
                <div className="fb-spine-shadow fb-spine-shadow-right"></div>
            )}
        </div>
    );
});

Page.displayName = 'Page';

const Cover = forwardRef<HTMLDivElement, { children: React.ReactNode, type?: 'front' | 'back'; number?: number }>((props, ref) => {
    const coverType = props.type ?? 'front';
    return (
        <div className={`fb-cover-root fb-cover-${coverType}`} ref={ref}>
            <div className="fb-cover-corner fb-cover-corner-tl"></div>
            <div className="fb-cover-corner fb-cover-corner-br"></div>

            <div className={`fb-cover-inner fb-cover-inner-${coverType}`}>
                {props.children}
            </div>

            {props.number !== undefined && (
                <div className="fb-cover-number">- {props.number} -</div>
            )}
        </div>
    );
});
Cover.displayName = 'Cover';

const BlankPage = forwardRef<HTMLDivElement, { children?: React.ReactNode }>((props, ref) => {
    return (
        <div className="bg-[#1a0f0a] w-full h-full" ref={ref}>
            {props.children}
        </div>
    );
});
BlankPage.displayName = 'BlankPage';


export function Flipbook() {
    return (
        <div className="fb-main-container">
            {/* Subtle Background Pattern */}
            <div className="fb-bg-pattern"></div>

            {/* STABLE CONTAINER WITH UI RESTORATION & LARGE SCALE */}
            <div className="fb-container">
                <div className="fb-title-section">
                    <h1 className="fb-main-title">
                        <BookOpen className="fb-title-icon" />
                        Thư viện Lý luận Chính trị
                    </h1>
                    <p className="fb-sub-title">Chương 4: Dân chủ & Nhà nước XHCN</p>
                </div>

                <div className="fb-book-wrapper">
                    {/* @ts-expect-error - Library types mismatch */}
                    <HTMLFlipBook
                        width={600} // Reduced to fit viewport
                        height={800} // Reduced to fit viewport
                        size="stretch"
                        minWidth={315}
                        maxWidth={1600}
                        minHeight={420}
                        maxHeight={2000}
                        maxShadowOpacity={0.85}
                        showCover={false}
                        mobileScrollSupport={true}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={1200}
                        usePortrait={false}
                        startZIndex={1}
                        autoSize={true}
                        clickEventForward={true}
                        useMouseEvents={true}
                        swipeDistance={30}
                        showPageCorners={true}
                        disableFlipByClick={false}
                    >
                        {/* INDEX 0: TRANG TRỐNG ĐỂ OFFSET (LEFT) */}
                        <BlankPage />

                        {/* INDEX 1: TRANG BÌA TRƯỚC (RIGHT) */}
                        <Cover type="front" number={0}>
                            <Star className="fb-cover-star" />
                            <span className="fb-cover-kicker">Giáo trình môn học</span>
                            <h1 className="fb-cover-title">Chương 4</h1>
                            <h2 className="fb-cover-subtitle">Dân chủ Xã hội Chủ nghĩa & Nhà nước Xã hội Chủ nghĩa</h2>
                            <div className="fb-cover-divider"></div>
                            <p className="fb-cover-footer">Giáo trình MLN131</p>
                        </Cover>

                        {/* INDEX 2: TRANG LÓT (LEFT) */}
                        <Page side="left" number={1} title="Lời Ngỏ">
                            <div className="fb-intro-content">
                                <Star className="fb-intro-star" />
                                <h3 className="fb-intro-title">Triết học & Cuộc sống</h3>
                                <p className="fb-intro-quote">
                                    "Dân chủ là cái chìa khóa vạn năng có thể giải quyết mọi khó khăn."
                                </p>
                                <div className="fb-intro-divider"></div>
                                <p className="fb-intro-text">
                                    Tài liệu này được biên soạn nhằm giúp sinh viên hiểu rõ hơn về quyền làm chủ của nhân dân trong xã hội XHCN tại Việt Nam.
                                </p>
                            </div>
                        </Page>

                        {/* INDEX 3: TRANG NỘI DUNG (RIGHT) */}
                        <Page side="right" number={2} title="1. Quan niệm về Dân chủ">
                            <div className="fb-content-center">
                                <p className="mb-10 text-2xl font-serif">
                                    Thuật ngữ <strong className="fb-text-highlight">"dân chủ"</strong> xuất hiện sớm nhất trong tiếng Hy Lạp cổ đại:
                                </p>
                                <div className="space-y-6 mb-12">
                                    <div className="fb-greek-term">
                                        <div className="fb-greek-box">Δῆμος</div>
                                        <p className="fb-greek-def">Demos: Nhân dân</p>
                                    </div>
                                    <div className="fb-greek-term">
                                        <div className="fb-greek-box">Κράτος</div>
                                        <p className="fb-greek-def">Kratos: Quyền lực</p>
                                    </div>
                                </div>
                                <div className="fb-quote-box">
                                    Dân chủ là quyền lực thuộc về nhân dân, là quyền làm chủ của nhân dân đối với vận mệnh của mình.
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 4: LEFT */}
                        <Page side="left" number={3} title="2. Bản chất Dân chủ XHCN">
                            <div className="space-y-10 py-6 px-4">
                                <div className="fb-list-item">
                                    <div className="fb-list-number">1</div>
                                    <p className="fb-list-text"><strong>Bản chất giai cấp:</strong> Mang bản chất giai cấp công nhân, đặt dưới sự lãnh đạo của Đảng.</p>
                                </div>
                                <div className="fb-list-item">
                                    <div className="fb-list-number">2</div>
                                    <p className="fb-list-text"><strong>Bản chất chính trị:</strong> Là nền dân chủ rộng rãi nhất cho tuyệt đại đa số nhân dân lao động.</p>
                                </div>
                                <div className="fb-list-item">
                                    <div className="fb-list-number">3</div>
                                    <p className="fb-list-text"><strong>Bản chất kinh tế:</strong> Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu.</p>
                                </div>
                                <div className="fb-dashed-box">
                                    "Dân chủ XHCN là nền dân chủ cao hơn về chất so với các nền dân chủ trước đó."
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 5: RIGHT */}
                        <Page side="right" number={4} title="3. Hệ thống Chính trị XHCN">
                            <div className="h-full flex flex-col items-center justify-center p-6">
                                <div className="fb-diagram-container">
                                    <div className="fb-diagram-box fb-diagram-box-red">
                                        <p className="fb-diagram-text">Đảng lãnh đạo</p>
                                    </div>
                                    <div className="fb-diagram-connector">
                                        <div className="fb-diagram-line"></div>
                                    </div>
                                    <div className="fb-diagram-box fb-diagram-box-gold">
                                        <p className="fb-diagram-text">Nhà nước quản lý</p>
                                    </div>
                                    <div className="fb-diagram-connector">
                                        <div className="fb-diagram-line"></div>
                                    </div>
                                    <div className="fb-diagram-box fb-diagram-box-white">
                                        <p className="fb-diagram-text">Nhân dân làm chủ</p>
                                    </div>
                                </div>
                                <p className="mt-12 text-sm text-gray-400 italic font-serif tracking-wide text-center">Cơ chế vận hành tổng thể của hệ thống chính trị Việt Nam</p>
                            </div>
                        </Page>

                        {/* INDEX 6: LEFT */}
                        <Page side="left" number={5} title="4. Phương châm Cơ sở">
                            <div className="flex flex-col h-full items-center justify-center px-4">
                                <div className="fb-grid-2">
                                    {['Biết', 'Bàn', 'Làm', 'Kiểm tra', 'Giám sát', 'Thụ hưởng'].map((text) => (
                                        <div key={text} className="fb-grid-item group">
                                            <span className="fb-grid-label">Dân</span>
                                            <span className="fb-grid-value">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="fb-info-box">
                                    <p className="text-base font-serif italic text-gray-700 leading-relaxed">Đây là nguyên tắc đảm bảo sự tham gia thực chất của người dân vào quản lý nhà nước.</p>
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 7: RIGHT */}
                        <Page side="right" number={6} title="5. Hiến pháp & Pháp luật">
                            <div className="space-y-8 font-serif h-full flex flex-col justify-center px-4">
                                <div className="fb-card">
                                    <div className="fb-card-icon">⚖️</div>
                                    <div>
                                        <p className="fb-card-title">Thượng tôn Pháp luật</p>
                                        <p className="fb-card-text">Mọi tổ chức và cá nhân phải hoạt động trong khuôn khổ Hiến pháp.</p>
                                    </div>
                                </div>
                                <div className="fb-card">
                                    <div className="fb-card-icon">🔒</div>
                                    <div>
                                        <p className="fb-card-title">Quyền & Nghĩa vụ</p>
                                        <p className="fb-card-text">Dân chủ đi đôi với kỷ luật, kỷ cương và trách nhiệm công dân.</p>
                                    </div>
                                </div>
                                <div className="fb-card">
                                    <div className="fb-card-icon">🌍</div>
                                    <div>
                                        <p className="fb-card-title">Hội nhập & Phát triển</p>
                                        <p className="fb-card-text">Phát huy dân chủ trong bối cảnh toàn cầu hóa và kinh tế thị trường.</p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 8: LEFT */}
                        <Page side="left" number={7} title="Giải pháp Đột phá">
                            <div className="flex flex-col h-full justify-between py-8 px-4">
                                <div className="space-y-8">
                                    <p className="text-2xl font-serif">Để nâng cao chất lượng dân chủ cơ sở:</p>
                                    <ul className="fb-check-list">
                                        <li className="fb-check-item">
                                            <span className="fb-check-icon">✓</span>
                                            Cải cách thủ tục hành chính
                                        </li>
                                        <li className="fb-check-item">
                                            <span className="fb-check-icon">✓</span>
                                            Ứng dụng công nghệ số (Smart Village)
                                        </li>
                                        <li className="fb-check-item">
                                            <span className="fb-check-icon">✓</span>
                                            Công khai và minh bạch ngân sách
                                        </li>
                                        <li className="fb-check-item">
                                            <span className="fb-check-icon">✓</span>
                                            Tăng cường giám sát từ Mặt trận Tổ quốc
                                        </li>
                                    </ul>
                                </div>
                                <div className="fb-slogan-box">
                                    <p className="fb-slogan-text">Vì một xã hội dân chủ, công bằng, văn minh</p>
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 9: RIGHT */}
                        <Page side="right" number={8} title="Tổng kết">
                            <div className="flex flex-col h-full justify-center items-center text-center p-6">
                                <Quote className="w-20 h-20 text-[#d4af37] mb-10 opacity-30" />
                                <p className="fb-summary-quote">
                                    "Dân chủ vừa là mục tiêu, vừa là động lực của công cuộc xây dựng chủ nghĩa xã hội tại Việt Nam."
                                </p>
                                <div className="fb-end-badge">
                                    <Star className="w-20 h-20 text-[#d4af37] animate-pulse" />
                                </div>
                            </div>
                        </Page>

                        {/* INDEX 10: BACK COVER (LEFT) */}
                        <Cover type="back" number={9}>
                            <Star className="w-20 h-20 text-[#d4af37] mb-10 opacity-40" />
                            <h3 className="fb-back-title">HẾT</h3>
                            <div className="fb-back-divider"></div>
                            <p className="fb-back-subtitle">MLN131 - Chủ nghĩa Xã hội Khoa học</p>
                            <p className="fb-back-footer">@ FPT University - 2026</p>
                        </Cover>

                        {/* INDEX 11: MẶT SAU CỦA BÌA SAU (RIGHT) */}
                        <BlankPage>
                            <div className="w-full h-full shadow-inner opacity-50"></div>
                        </BlankPage>
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
}
