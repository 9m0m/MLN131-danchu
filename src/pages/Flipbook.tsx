import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookOpen, Quote, Check, Users, Building, Scale, Lightbulb } from 'lucide-react';
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
                            <img src="/logo3.png" alt="Logo" className="fb-cover-star h-20 w-20 object-contain" />
                            <span className="fb-cover-kicker">Giáo trình môn học</span>
                            <h1 className="fb-cover-title">Chương 4</h1>
                            <h2 className="fb-cover-subtitle">Dân chủ Xã hội Chủ nghĩa & Nhà nước Xã hội Chủ nghĩa</h2>
                            <div className="fb-cover-divider"></div>
                            <p className="fb-cover-footer">Giáo trình MLN131</p>
                        </Cover>

                        {/* INDEX 2: TRANG LÓT (LEFT) */}
                        <Page side="left" number={1} title="Lời Ngỏ">
                            <div className="fb-intro-content">
                                <img src="/logo3.png" alt="Logo" className="fb-intro-star h-16 w-16 object-contain mx-auto" />
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

                        {/* PAGE 1A: QUAN NIỆM VÀ LỊCH SỬ DÂN CHỦ - Phần 1 */}
                        <Page side="right" number={2} title="I. Quan niệm Dân chủ">
                            <div className="space-y-6 px-3">
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-[#8b0000] mb-3">1. Nguồn gốc thuật ngữ</h4>
                                    <p className="text-sm leading-relaxed">
                                        Xuất hiện thế kỷ <strong>VII - VI TCN</strong> tại Hy Lạp cổ đại; kết hợp từ:
                                    </p>
                                    <div className="space-y-3 mt-4">
                                        <div className="fb-greek-term">
                                            <div className="fb-greek-box text-sm py-2 px-3">Δῆμος</div>
                                            <p className="fb-greek-def text-sm">Demos: Nhân dân</p>
                                        </div>
                                        <div className="fb-greek-term">
                                            <div className="fb-greek-box text-sm py-2 px-3">Κράτος</div>
                                            <p className="fb-greek-def text-sm">Kratos: Cai trị</p>
                                        </div>
                                    </div>
                                    <p className="text-sm italic mt-4 text-gray-600">
                                        → Nghĩa là nhân dân cai trị hay quyền lực thuộc về nhân dân.
                                    </p>
                                </div>
                                
                                <div className="fb-dashed-box text-sm">
                                    <strong>Quan điểm Mác - Lênin:</strong> Dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân nhà nước.
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 1B: QUAN NIỆM - Phần 2 */}
                        <Page side="left" number={3} title="I. Quan niệm Dân chủ (tt)">
                            <div className="space-y-5 px-3">
                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">2. Ba phương diện của Dân chủ</h4>
                                    <div className="space-y-4">
                                        <div className="fb-list-item">
                                            <div className="fb-list-number text-sm">1</div>
                                            <p className="fb-list-text text-sm"><strong>Quyền lực:</strong> Dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân nhà nước.</p>
                                        </div>
                                        <div className="fb-list-item">
                                            <div className="fb-list-number text-sm">2</div>
                                            <p className="fb-list-text text-sm"><strong>Chế độ xã hội:</strong> Là một hình thái nhà nước, một chính thể dân chủ.</p>
                                        </div>
                                        <div className="fb-list-item">
                                            <div className="fb-list-number text-sm">3</div>
                                            <p className="fb-list-text text-sm"><strong>Tổ chức:</strong> Là một nguyên tắc (tập trung dân chủ) trong quản lý xã hội.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">3. Hai tính chất</h4>
                                    <div className="space-y-3">
                                        <div className="bg-gray-50 p-3 rounded border-l-4 border-[#d4af37]">
                                            <p className="text-sm"><strong>Phạm trù lịch sử:</strong> Gắn liền với nhà nước và sẽ mất đi khi nhà nước tiêu vong.</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded border-l-4 border-[#d4af37]">
                                            <p className="text-sm"><strong>Phạm trù vĩnh viễn:</strong> Là giá trị nhân loại chung về tự do và giải phóng con người.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 2A: CÁC NỀN DÂN CHỦ - Phần 1 */}
                        <Page side="right" number={4} title="II. Các nền Dân chủ (Phần 1)">
                            <div className="space-y-4 px-3 text-sm">
                                <div className="fb-card">
                                    <div className="fb-card-icon text-2xl">🏛️</div>
                                    <div>
                                        <p className="fb-card-title text-sm">Dân chủ nguyên thủy</p>
                                        <p className="fb-card-text text-xs">Xuất hiện trong xã hội cộng sản nguyên thủy, bầu thủ lĩnh qua "Đại hội nhân dân".</p>
                                    </div>
                                </div>

                                <div className="fb-card">
                                    <div className="fb-card-icon text-2xl">⚔️</div>
                                    <div>
                                        <p className="fb-card-title text-sm">Dân chủ chủ nô</p>
                                        <p className="fb-card-text text-xs">Nền dân chủ cho thiểu số (chủ nô và công dân tự do), còn nô lệ bị tước quyền.</p>
                                    </div>
                                </div>

                                <div className="fb-card">
                                    <div className="fb-card-icon text-2xl">👑</div>
                                    <div>
                                        <p className="fb-card-title text-sm">Chế độ phong kiến</p>
                                        <p className="fb-card-text text-xs">Không có bước tiến dân chủ đáng kể; nhà nước chuyên chế coi ý chí vua chúa là tối cao.</p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 2B: CÁC NỀN DÂN CHỦ - Phần 2 */}
                        <Page side="left" number={5} title="II. Các nền Dân chủ (Phần 2)">
                            <div className="space-y-5 px-3">
                                <div className="fb-card">
                                    <div className="fb-card-icon text-2xl">🏦</div>
                                    <div>
                                        <p className="fb-card-title text-sm">Dân chủ tư sản</p>
                                        <p className="fb-card-text text-xs mb-2">Bước tiến lớn về tự do, bình đẳng nhưng dựa trên chế độ tư hữu.</p>
                                        <ul className="text-xs space-y-1 list-disc list-inside text-gray-600">
                                            <li>Vẫn là nền dân chủ cho thiểu số</li>
                                            <li>Người nắm tư liệu sản xuất chi phối</li>
                                            <li>Bất bình đẳng về kinh tế dẫn đến bất bình đẳng chính trị</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="fb-card bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-[#d4af37]">
                                    <div className="fb-card-icon text-2xl">⭐</div>
                                    <div>
                                        <p className="fb-card-title text-sm text-[#8b0000]">Dân chủ Xã hội Chủ nghĩa</p>
                                        <p className="fb-card-text text-xs mb-2">Ra đời sau Cách mạng Tháng Mười Nga (1917).</p>
                                        <p className="text-xs font-semibold text-[#8b0000]">→ Nền dân chủ cho đại đa số nhân dân lao động</p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 3A: BẢN CHẤT DÂN CHỦ XHCN - Phần 1 */}
                        <Page side="right" number={6} title="III. Bản chất Dân chủ XHCN (1)">
                            <div className="space-y-5 px-3">
                                <div className="mb-4">
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3 flex items-center gap-2">
                                        <Users size={18} />
                                        1. Bản chất chính trị
                                    </h4>
                                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-[#8b0000]">
                                        <p className="text-sm leading-relaxed mb-3">
                                            Dưới sự lãnh đạo của <strong>giai cấp công nhân</strong> thông qua <strong>Đảng Cộng sản</strong>; nhân dân làm chủ mọi mặt đời sống.
                                        </p>
                                        <div className="fb-quote-box text-xs italic">
                                            V.I. Lênin khẳng định: "Dân chủ XHCN gấp triệu lần dân chủ tư sản"
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3 flex items-center gap-2">
                                        <Building size={18} />
                                        2. Bản chất kinh tế
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <p className="flex items-start gap-2">
                                            <Check size={16} className="text-[#d4af37] mt-1 flex-shrink-0" />
                                            <span>Dựa trên chế độ <strong>sở hữu xã hội</strong> về tư liệu sản xuất chủ yếu</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <Check size={16} className="text-[#d4af37] mt-1 flex-shrink-0" />
                                            <span>Thực hiện phân phối lợi ích chủ yếu <strong>theo kết quả lao động</strong></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 3B: BẢN CHẤT DÂN CHỦ XHCN - Phần 2 */}
                        <Page side="left" number={7} title="III. Bản chất Dân chủ XHCN (2)">
                            <div className="space-y-5 px-3">
                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3 flex items-center gap-2">
                                        <Lightbulb size={18} />
                                        3. Bản chất tư tưởng - văn hóa
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <p className="flex items-start gap-2">
                                            <Check size={16} className="text-[#d4af37] mt-1 flex-shrink-0" />
                                            <span>Lấy hệ tư tưởng <strong>Mác - Lênin</strong> làm chủ đạo</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <Check size={16} className="text-[#d4af37] mt-1 flex-shrink-0" />
                                            <span>Kế thừa tinh hoa <strong>văn hóa dân tộc</strong> và nhân loại</span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3 flex items-center gap-2">
                                        <Scale size={18} />
                                        4. Mối quan hệ pháp lý
                                    </h4>
                                    <div className="fb-dashed-box text-sm">
                                        Dân chủ đi đôi với <strong>kỷ luật, kỷ cương</strong> và phải được <strong>thể chế hóa bằng pháp luật</strong>.
                                    </div>
                                </div>

                                <div className="mt-6 bg-gradient-to-br from-yellow-50 to-red-50 p-4 rounded-lg border border-[#d4af37]">
                                    <p className="text-xs text-center font-semibold text-[#8b0000] italic">
                                        "Dân chủ XHCN là nền dân chủ cao nhất, bảo đảm quyền lực thực sự của nhân dân"
                                    </p>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 4A: NHÀ NƯỚC XHCN - Phần 1 */}
                        <Page side="right" number={8} title="IV. Nhà nước XHCN (1)">
                            <div className="space-y-5 px-3">
                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">1. Sự ra đời</h4>
                                    <p className="text-sm leading-relaxed bg-gray-50 p-3 rounded">
                                        Là kết quả <strong>cách mạng của giai cấp vô sản</strong> và nhân dân lao động dưới sự lãnh đạo của Đảng.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">2. Bản chất</h4>
                                    <div className="space-y-3">
                                        <div className="fb-list-item">
                                            <div className="fb-list-number text-sm">1</div>
                                            <p className="fb-list-text text-sm">Là <strong>công cụ</strong> thực hiện quyền lực của nhân dân</p>
                                        </div>
                                        <div className="fb-list-item">
                                            <div className="fb-list-number text-sm">2</div>
                                            <p className="fb-list-text text-sm">Là kiểu nhà nước mới: <strong>thống trị của đa số</strong> đối với thiểu số bóc lột</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">3. Tính chất "nửa nhà nước"</h4>
                                    <p className="text-sm leading-relaxed">
                                        Chức năng <strong>trấn áp thu hẹp</strong>, chức năng <strong>tổ chức và xây dựng</strong> kinh tế - xã hội trở thành chủ yếu.
                                    </p>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 4B: NHÀ NƯỚC XHCN - Phần 2 */}
                        <Page side="left" number={9} title="IV. Nhà nước XHCN (2)">
                            <div className="space-y-5 px-3">
                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">4. Chức năng</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="bg-red-50 p-3 rounded border-l-4 border-[#8b0000]">
                                            <p className="font-semibold mb-1">Đối nội:</p>
                                            <p>Tổ chức xây dựng kinh tế, văn hóa, xã hội; bảo vệ quyền lợi nhân dân</p>
                                        </div>
                                        <div className="bg-yellow-50 p-3 rounded border-l-4 border-[#d4af37]">
                                            <p className="font-semibold mb-1">Đối ngoại:</p>
                                            <p>Bảo vệ chủ quyền quốc gia; hợp tác quốc tế; hội nhập</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400">
                                            <p className="font-semibold mb-1">Trấn áp:</p>
                                            <p>Chống âm mưu chống phá; bảo vệ an ninh quốc gia (thu hẹp dần)</p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded border-l-4 border-green-600">
                                            <p className="font-semibold mb-1">Xây dựng:</p>
                                            <p>Phát triển kinh tế - xã hội (then chốt và quyết định)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="fb-quote-box text-xs">
                                    <strong>Mối quan hệ biện chứng:</strong> Dân chủ là cơ sở xây dựng nhà nước; Nhà nước là công cụ thực thi quyền làm chủ của nhân dân.
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 5A: DÂN CHỦ XHCN TẠI VIỆT NAM - Phần 1 */}
                        <Page side="right" number={10} title="V. Dân chủ XHCN ở Việt Nam (1)">
                            <div className="space-y-5 px-3">
                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">1. Lịch sử hình thành</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <div className="font-bold text-[#d4af37] text-lg">1945</div>
                                            <p>Xác lập sau <strong>Cách mạng Tháng Tám</strong></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="font-bold text-[#d4af37] text-lg">1976</div>
                                            <p>Tên nước đổi thành <strong>Cộng hòa XHCN Việt Nam</strong></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="font-bold text-[#d4af37] text-lg">1986</div>
                                            <p><strong>Đại hội VI:</strong> Đề ra đường lối đổi mới, nhấn mạnh "lấy dân làm gốc"</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-[#8b0000] mb-3">2. Bản chất</h4>
                                    <div className="fb-dashed-box text-sm text-center">
                                        <p className="font-bold text-base text-[#8b0000] mb-2">Dân giàu, Nước mạnh</p>
                                        <p className="font-bold text-base text-[#8b0000]">Dân chủ, Công bằng, Văn minh</p>
                                        <p className="mt-3 text-xs italic">Mọi quyền lực thuộc về nhân dân, dân làm chủ</p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 5B: DÂN CHỦ XHCN TẠI VIỆT NAM - Phần 2 */}
                        <Page side="left" number={11} title="V. Dân chủ XHCN ở Việt Nam (2)">
                            <div className="space-y-5 px-3">
                                <h4 className="text-base font-bold text-[#8b0000] mb-3">3. Hai hình thức thực hiện dân chủ</h4>
                                
                                <div className="fb-card bg-gradient-to-r from-red-50 to-white">
                                    <div className="fb-card-icon text-2xl">🏛️</div>
                                    <div>
                                        <p className="fb-card-title text-sm">1. Dân chủ gián tiếp (đại diện)</p>
                                        <p className="fb-card-text text-xs mb-2">Qua các cơ quan đại diện:</p>
                                        <ul className="text-xs space-y-1 list-disc list-inside ml-2">
                                            <li><strong>Quốc hội</strong> (nhiệm kỳ 5 năm)</li>
                                            <li><strong>HĐND</strong> các cấp</li>
                                            <li>Các cơ quan nhà nước khác</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="fb-card bg-gradient-to-r from-yellow-50 to-white">
                                    <div className="fb-card-icon text-2xl">👥</div>
                                    <div>
                                        <p className="fb-card-title text-sm">2. Dân chủ trực tiếp</p>
                                        <p className="fb-card-text text-xs mb-2">Phương châm tại cơ sở:</p>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <div className="text-xs bg-white p-2 rounded border border-[#d4af37] text-center font-semibold">Dân biết</div>
                                            <div className="text-xs bg-white p-2 rounded border border-[#d4af37] text-center font-semibold">Dân bàn</div>
                                            <div className="text-xs bg-white p-2 rounded border border-[#d4af37] text-center font-semibold">Dân làm</div>
                                            <div className="text-xs bg-white p-2 rounded border border-[#d4af37] text-center font-semibold">Dân kiểm tra</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 6A: NHÀ NƯỚC PHÁP QUYỀN - Phần 1 */}
                        <Page side="right" number={12} title="VI. Nhà nước Pháp quyền (1)">
                            <div className="space-y-4 px-3">
                                <p className="text-sm font-semibold text-center text-[#8b0000] mb-4">6 đặc trưng Nhà nước Pháp quyền XHCN Việt Nam</p>
                                
                                <div className="space-y-3 text-sm">
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">1</div>
                                        <p className="fb-list-text text-xs">Xây dựng nhà nước <strong>của dân, do dân, vì dân</strong>; nhân dân lao động làm chủ</p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">2</div>
                                        <p className="fb-list-text text-xs">Quản lý xã hội bằng <strong>Hiến pháp và pháp luật</strong>; thượng tôn pháp luật</p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">3</div>
                                        <p className="fb-list-text text-xs">Quyền lực nhà nước là <strong>thống nhất</strong>, có sự phân công, phối hợp và kiểm soát giữa các quyền <strong>lập pháp, hành pháp, tư pháp</strong></p>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 6B: NHÀ NƯỚC PHÁP QUYỀN - Phần 2 */}
                        <Page side="left" number={13} title="VI. Nhà nước Pháp quyền (2)">
                            <div className="space-y-3 px-3">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <div className="fb-list-number text-xs w-6 h-6 flex items-center justify-center">4</div>
                                        <p className="flex-1 text-xs leading-tight">Do <strong>Đảng Cộng sản Việt Nam</strong> lãnh đạo</p>
                                    </div>
                                    
                                    <div className="flex items-start gap-2">
                                        <div className="fb-list-number text-xs w-6 h-6 flex items-center justify-center">5</div>
                                        <p className="flex-1 text-xs leading-tight">Tôn trọng <strong>quyền con người, quyền công dân</strong></p>
                                    </div>
                                    
                                    <div className="flex items-start gap-2">
                                        <div className="fb-list-number text-xs w-6 h-6 flex items-center justify-center">6</div>
                                        <p className="flex-1 text-xs leading-tight">Nguyên tắc <strong>tập trung dân chủ</strong></p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center my-4">
                                    <div className="flex items-center justify-center flex-shrink-0" style={{ width: '80px', height: '80px', aspectRatio: '1' }}>
                                        <img src="/logo3.png" alt="Logo" className="max-w-full max-h-full object-contain opacity-80" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="bg-[#8b0000] text-white text-center py-2 px-3 rounded text-xs font-bold">Đảng lãnh đạo</div>
                                    <div className="text-center text-gray-400 text-xl">↓</div>
                                    <div className="bg-[#d4af37] text-white text-center py-2 px-3 rounded text-xs font-bold">Nhà nước quản lý</div>
                                    <div className="text-center text-gray-400 text-xl">↓</div>
                                    <div className="bg-white border-2 border-[#d4af37] text-[#8b0000] text-center py-2 px-3 rounded text-xs font-bold">Nhân dân làm chủ</div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 7: GIẢI PHÁP PHÁT HUY DÂN CHỦ */}
                        <Page side="right" number={14} title="VII. Giải pháp phát huy Dân chủ">
                            <div className="px-3">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex items-center justify-center flex-shrink-0" style={{ width: '64px', height: '64px', aspectRatio: '1' }}>
                                        <img src="/logo3.png" alt="Logo" className="max-w-full max-h-full object-contain opacity-70" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                        <span className="text-base">💼</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#8b0000]">Kinh tế</p>
                                            <p className="text-[10px] leading-tight">Hoàn thiện thể chế thị trường XHCN</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                        <span className="text-base">🚩</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#8b0000]">Chính trị</p>
                                            <p className="text-[10px] leading-tight">Xây dựng Đảng trong sạch, vững mạnh</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                        <span className="text-base">⚖️</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#8b0000]">Nhà nước</p>
                                            <p className="text-[10px] leading-tight">Xây dựng nhà nước pháp quyền</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                        <span className="text-base">🤝</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#8b0000]">Mặt trận</p>
                                            <p className="text-[10px] leading-tight">Giám sát và phản biện xã hội</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded">
                                        <span className="text-base">📚</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#8b0000]">Dân trí</p>
                                            <p className="text-[10px] leading-tight">Nâng cao văn hóa pháp luật</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE 8: GIẢI PHÁP HOÀN THIỆN NHÀ NƯỚC PHÁP QUYỀN */}
                        <Page side="left" number={15} title="VIII. Hoàn thiện Nhà nước">
                            <div className="space-y-4 px-3">
                                <p className="text-sm font-semibold text-[#8b0000] mb-3">5 giải pháp hoàn thiện Nhà nước Pháp quyền</p>
                                
                                <div className="space-y-3">
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">1</div>
                                        <p className="fb-list-text text-xs">Xây dựng Nhà nước dưới <strong>sự lãnh đạo của Đảng</strong></p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">2</div>
                                        <p className="fb-list-text text-xs"><strong>Cải cách hành chính</strong>, tinh gọn bộ máy, bãi bỏ thủ tục phiền hà</p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">3</div>
                                        <p className="fb-list-text text-xs">Xây dựng đội ngũ <strong>cán bộ, công chức</strong> trong sạch, có năng lực, bản lĩnh chính trị và đạo đức</p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">4</div>
                                        <p className="fb-list-text text-xs">Đấu tranh phòng, chống <strong>tham nhũng, lãng phí</strong> là nhiệm vụ cấp bách và lâu dài</p>
                                    </div>
                                    
                                    <div className="fb-list-item">
                                        <div className="fb-list-number text-sm">5</div>
                                        <p className="fb-list-text text-xs"><strong>Hoàn thiện hệ thống pháp luật</strong>, bảo đảm tính nghiêm minh và công bằng xã hội</p>
                                    </div>
                                </div>

                                <div className="fb-slogan-box mt-6">
                                    <p className="fb-slogan-text text-xs">Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân</p>
                                </div>
                            </div>
                        </Page>

                        {/* PAGE TỔNG KẾT */}
                        <Page side="right" number={16} title="Tổng kết">
                            <div className="flex flex-col h-full justify-center items-center text-center p-6">
                                <Quote className="w-16 h-16 text-[#d4af37] mb-8 opacity-30" />
                                <p className="text-lg font-serif italic text-[#8b0000] leading-relaxed mb-6">
                                    "Dân chủ vừa là mục tiêu, vừa là động lực của công cuộc xây dựng chủ nghĩa xã hội tại Việt Nam."
                                </p>
                                <div className="space-y-3 text-sm text-gray-600 mb-8">
                                    <p>✓ Quyền lực thuộc về nhân dân</p>
                                    <p>✓ Nhà nước của dân, do dân, vì dân</p>
                                    <p>✓ Pháp luật bảo vệ quyền và lợi ích chính đáng</p>
                                </div>
                                <div className="fb-end-badge">
                                    <img src="/logo3.png" alt="Logo" className="w-16 h-16 object-contain animate-pulse" />
                                </div>
                            </div>
                        </Page>

                        {/* BACK COVER */}
                        <Cover type="back" number={17}>
                            <img src="/logo3.png" alt="Logo" className="w-16 h-16 object-contain mb-8 opacity-40" />
                            <h3 className="fb-back-title text-3xl">HẾT</h3>
                            <div className="fb-back-divider"></div>
                            <p className="fb-back-subtitle text-base">MLN131 - Chủ nghĩa Xã hội Khoa học</p>
                            <p className="fb-back-footer text-xs mt-4">@ FPT University - 2026</p>
                        </Cover>

                        {/* BLANK PAGE */}
                        <BlankPage>
                            <div className="w-full h-full shadow-inner opacity-50"></div>
                        </BlankPage>
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
}
