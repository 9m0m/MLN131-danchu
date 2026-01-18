import { useState } from 'react';
import { Landmark, X, Image, ChevronRight, Users, Award } from 'lucide-react';
import './Museum.css';

const detailedEvents = [
    {
        year: 'Cổ Đại',
        period: 'Thế kỷ VII-VI TCN',
        title: 'Ra đời thuật ngữ "Dân chủ"',
        location: 'Hy Lạp cổ đại',
        description: 'Thuật ngữ "demokratos" được hình thành từ "demos" (nhân dân) + "kratos" (cai trị)',
        keyPoints: [
            'Dân chủ chủ nô xuất hiện dành cho công dân tự do',
            'Đại hội nhân dân quyết định bằng giơ tay hoặc hoan hô',
            'Nô lệ và phụ nữ bị tước quyền dân chủ',
            'Là giai đoạn dân chủ đầu tiên gắn với nhà nước'
        ],
        figures: ['Plato', 'Aristoteles', 'Perikles'],
        significance: 'Đánh dấu sự ra đời chính thức của khái niệm dân chủ trong lịch sử nhân loại',
        image: {
            url: '/ra_doi_thuat_ngu_dan_chu.png',
            alt: 'Nền dân chủ Hy Lạp cổ đại',
            sourceLabel: 'Everest - Lịch sử các nền dân chủ',
            sourceUrl: 'https://everest.org.vn/lich-su-cac-nen-dan-chu/'
        }
    },
    {
        year: 'Trung Đại',
        period: '500-1400',
        title: '"Thời kỳ đen tối" của dân chủ',
        location: 'Châu Âu phong kiến',
        description: 'Sự thống trị tuyệt đối của nhà nước chuyên chế phong kiến',
        keyPoints: [
            'Ý chí nhà vua là tối cao - không có bước tiến dân chủ',
            'Quyền lực tập trung hoàn toàn ở tầng lớp quý tộc',
            'Không có cơ chế tham gia của nhân dân',
            'Kéo dài hơn 1000 năm với ít thay đổi'
        ],
        figures: ['Charlemagne', 'Louis XIV'],
        significance: 'Giai đoạn lùi xa nhất của dân chủ trong lịch sử',
        image: {
            url: '/thoi_ki_den_toi.jpg',
            alt: 'Thời kỳ Trung cổ phong kiến',
            sourceLabel: 'Wikipedia - Trung kỳ Trung Châu Âu',
            sourceUrl: 'https://vi.wikipedia.org/wiki/Trung_k%E1%BB%B3_Trung_C%E1%BB%95'
        }
    },
    {
        year: 'Cận Đại',
        period: 'Cuối thế kỷ XIV - XV',
        title: 'Sự xuất hiện của tư sản và tư tưởng tiến bộ',
        location: 'Châu Âu (Ý, Pháp, Anh)',
        description: 'Giai cấp tư sản xuất hiện với những tư tưởng về tự do, bình đẳng',
        keyPoints: [
            'Sự phát triển của thương mại và công nghiệp',
            'Những tư tưởng nhân văn & Khai sáng',
            'Mở đường cho nền dân chủ tư sản',
            'Thách thức quyền lực của quý tộc'
        ],
        figures: ['John Locke', 'Montesquieu', 'Jean-Jacques Rousseau'],
        significance: 'Bước ngoặt lớn: từ phong kiến sang tư sản - sự quan tâm tới quyền con người',
        image: {
            url: '/su_xuat_hien_cua_tu_san.jpg',
            alt: 'Thời kỳ Phục hưng và Khai sáng',
            sourceLabel: 'Wikipedia - Thời kỳ Khai Sáng',
            sourceUrl: 'https://vi.wikipedia.org/wiki/Th%E1%BB%9Di_k%E1%BB%B3_Khai_S%C3%A1ng'
        }
    },
    {
        year: '1871',
        period: 'Năm 1871',
        title: 'Công xã Pari - Mầm mống đầu tiên',
        location: 'Pháp - Thành phố Pari',
        description: 'Thực tiễn đấu tranh giai cấp tạo mầm mống dân chủ xã hội chủ nghĩa',
        keyPoints: [
            'Nhân dân Pari tổ chức chính quyền tự quản',
            'Lần đầu tiên nhân dân lao động làm chủ quyền lực',
            'Bị chấm dứt sau 72 ngày nhưng để lại di sản lớn',
            'Truyền cảm hứng cho phong trào cách mạng toàn thế giới'
        ],
        figures: ['Karl Marx', 'Friedrich Engels'],
        significance: 'Khởi đầu của dân chủ xã hội chủ nghĩa dưới hình thức thực tiễn',
        image: {
            url: '/cong_xa_paris.jpg',
            alt: 'Công xã Paris 1871',
            sourceLabel: 'Tư liệu văn kiến - Công xã Pari 1870',
            sourceUrl: 'https://tulieuvankien.dangcongsan.vn/ho-so-su-kien-nhan-chung/su-kien-va-nhan-chung/cong-xa-pari-1870-3313'
        }
    },
    {
        year: '1917',
        period: 'Tháng Mười 1917',
        title: 'Cách mạng Tháng Mười Nga',
        location: 'Nga - Liên Xô',
        description: 'Nhà nước xã hội chủ nghĩa đầu tiên ra đời trên thế giới',
        keyPoints: [
            'Thành công cách mạng Tháng Mười dẫn tới sự ra đời Liên Xô',
            'Dân chủ xã hội chủ nghĩa chính thức được xác lập',
            'Quyền lực thuộc về tầng lớp lao động - công nhân nông dân',
            'Mở ra thời đại mới cho nhân dân lao động toàn thế giới'
        ],
        figures: ['Lenin', 'Stalin'],
        significance: 'Bước ngoặt lịch sử: dân chủ xã hội chủ nghĩa từ lý thuyết trở thành thực tiễn',
        image: {
            url: '/cach_mang_thang_10.jpg',
            alt: 'Cách mạng Tháng Mười Nga',
            sourceLabel: 'QDND - Cách mạng Tháng Mười Nga',
            sourceUrl: 'https://www.qdnd.vn/quoc-te/doi-song/cach-mang-thang-muoi-nga-khai-mo-mot-thoi-dai-moi-750340'
        }
    },
    {
        year: '1945',
        period: 'Tháng Tám 1945',
        title: 'Cách mạng Tháng Tám - Dân chủ nhân dân xác lập',
        location: 'Việt Nam',
        description: 'Chế độ dân chủ nhân dân được xác lập sau cuộc Cách mạng Tháng Tám',
        keyPoints: [
            'Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân',
            'Kết thúc thế kỷ bị áp bức của đế quốc Pháp',
            'Tuyên ngôn Độc lập khẳng định quyền con người',
            'Đặt nền tảng cho dân chủ Việt Nam hiện đại'
        ],
        figures: ['Hồ Chí Minh', 'Võ Nguyên Giáp'],
        significance: 'Khoảnh khắc lịch sử: người Việt trở thành chủ nhân đất nước của mình',
        image: {
            url: '/cach_mang_thang_8.jpg',
            alt: 'Cách mạng Tháng Tám 1945 Việt Nam',
            sourceLabel: 'QDND - Ngày 19/8/1945 Cách mạng Tháng Tám',
            sourceUrl: 'https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-19-8-1945-cach-mang-thang-tam-thanh-cong-700812'
        }
    },
    {
        year: '1946',
        period: '06/01/1946',
        title: 'Tổng tuyển cử đầu tiên',
        location: 'Nước Việt Nam Dân chủ Cộng hòa',
        description: 'Cuộc bầu cử lịch sử - nhân dân tự do lựa chọn đại biểu',
        keyPoints: [
            'Lần đầu tiên trong lịch sử Việt Nam có tổng tuyển cử',
            'Toàn bộ quốc dân tự do lựa chọn những người có tài, có đức',
            'Thể hiện quyền dân chủ trực tiếp của công dân',
            'Bầu cử cho Quốc hội nước Việt Nam Dân chủ Cộng hòa'
        ],
        figures: ['Hồ Chí Minh'],
        significance: 'Khẳng định quyền bầu cử của nhân dân - nền tảng của dân chủ',
        image: {
            url: '/tong_tuyen_cu_dau_tien.jpg',
            alt: 'Tổng tuyển cử 1946 Việt Nam',
            sourceLabel: 'QDND - Ngày 6/1/1946 Tổng tuyển cử đầu tiên',
            sourceUrl: 'https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-6-1-1946-ngay-dien-ra-cuoc-tong-tuyen-cu-dau-tien-682156'
        }
    },
    {
        year: '1986',
        period: 'Tháng Tư 1986',
        title: 'Đại hội VI - Đổi mới toàn diện',
        location: 'Việt Nam',
        description: 'Đưa ra đường lối đổi mới - "Lấy dân làm gốc"',
        keyPoints: [
            'Khai trương chính sách đổi mới toàn diện',
            'Phát huy tối đa vai trò sáng tạo của nhân dân',
            '"Dân biết, dân bàn, dân làm, dân kiểm tra"',
            'Phát triển kinh tế gắn với phát huy dân chủ'
        ],
        figures: ['Nguyễn Văn Linh', 'Trần Phú'],
        significance: 'Bước ngoặt: từ quản lý hành chính sang dân chủ tham gia',
        image: {
            url: '/dai_hoi_VI.jpg',
            alt: 'Đại hội VI - Đổi mới 1986',
            sourceLabel: 'QDND - Đại hội VI - Đổi mới 1986',
            sourceUrl: 'https://www.qdnd.vn/chinh-tri/tin-tuc/cac-ky-dai-hoi-cua-dang-va-nhung-dau-an-lich-su-dai-hoi-lan-thu-vi-khoi-xuong-va-lanh-dao-su-nghiep-doi-moi-dat-nuoc-813798'
        }
    },
    {
        year: '2013',
        period: 'Năm 2013',
        title: 'Hiến pháp 2013 - Hoàn thiện cơ chế',
        location: 'Việt Nam',
        description: 'Hiến pháp mới khẳng định vai trò lãnh đạo của Đảng và dân chủ nhân dân',
        keyPoints: [
            'Khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam',
            'Nâng cao quyền con người và quyền công dân',
            'Hoàn thiện cơ chế nhân dân làm chủ',
            'Cân bằng giữa chuyên quyền và dân chủ'
        ],
        figures: ['Nguyễn Phú Trọng'],
        significance: 'Cơ sở pháp lý cho dân chủ xã hội chủ nghĩa tại Việt Nam',
        image: {
            url: '/hien_phap_2013.jpg',
            alt: 'Hiến pháp 2013 Việt Nam',
            sourceLabel: 'Luật Việt Nam - Hiến pháp 2013',
            sourceUrl: 'https://luatvietnam.vn/linh-vuc-khac/nhung-noi-dung-trong-hien-phap-2013-duoc-sua-doi-883-102009-article.html'
        }
    },
    {
        year: '2022',
        period: 'Năm 2022',
        title: 'Luật Thực hiện dân chủ cơ sở',
        location: 'Việt Nam',
        description: 'Luật hóa các nguyên tắc dân chủ, tăng tính minh bạch và trách nhiệm',
        keyPoints: [
            'Thể chế hóa nguyên tắc dân chủ cơ sở',
            'Tăng tính minh bạch và công khai thông tin',
            'Nâng cao trách nhiệm giải trình của chính quyền',
            'Mở rộng quyền tham gia của cộng đồng địa phương'
        ],
        figures: ['Quốc hội Việt Nam'],
        significance: 'Hoàn thiện hành lang pháp lý cho dân chủ Việt Nam hiện đại',
        image: {
            url: '/luat_thuc_hien_dan_chu_co_so.jpeg',
            alt: 'Luật Thực hiện dân chủ cơ sở 2022',
            sourceLabel: 'Thư viện pháp luật - Luật Thực hiện dân chủ cơ sở 2022',
            sourceUrl: 'https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/luat-thuc-hien-dan-chu-o-co-so-2022-vua-duoc-ban-hanh-co-hieu-luc-khi-nao-pham-vi-thuc-hien-dan-chu-57746.html'
        }
    }
];

export function Museum() {
    const [activeEvent, setActiveEvent] = useState<(typeof detailedEvents)[number] | null>(null);

    return (
        <div className="ms-wrapper">
            <div className="ms-hero">
                <div className="ms-hero-pattern"></div>
                <div className="ms-hero-content">
                    <div className="ms-badge">
                        <Landmark className="w-4 h-4" />
                        <span>Bảo tàng Dân chủ cơ sở</span>
                    </div>
                    <h1 className="ms-title">Từ Dân chủ Cổ Đại đến Dân chủ Xã hội Chủ nghĩa</h1>
                    <p className="ms-subtitle">
                        Hành trình phát triển của dân chủ: từ Hy Lạp cổ đại, qua các bước ngoặt lịch sử, đến thực tiễn dân chủ hiện đại tại Việt Nam.
                    </p>
                </div>
            </div>

            <section className="ms-section">
                <h2 className="ms-section-title">Timeline - Hành trình phát triển dân chủ</h2>
                <div className="ms-detailed-timeline">
                    {detailedEvents.map((event) => (
                        <button
                            key={event.title}
                            type="button"
                            className="ms-event-item"
                            onClick={() => setActiveEvent(event)}
                        >
                            <div className="ms-event-marker"></div>
                            <div className="ms-event-content">
                                <div className="ms-event-year">{event.year}</div>
                                <h4>{event.title}</h4>
                                <p>{event.description}</p>
                                <span className="ms-event-cta">
                                    Xem chi tiết <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {activeEvent && (
                <div className="ms-modal" role="dialog" aria-modal="true">
                    <div className="ms-modal-backdrop" onClick={() => setActiveEvent(null)}></div>
                    <div className="ms-modal-card ms-modal-large">
                        <button className="ms-modal-close" onClick={() => setActiveEvent(null)} aria-label="Đóng">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="ms-modal-header">
                            <span className="ms-modal-era">{activeEvent.year}</span>
                            <span className="ms-modal-period">{activeEvent.period}</span>
                            <h3>{activeEvent.title}</h3>
                            <p className="ms-modal-location">📍 {activeEvent.location}</p>
                        </div>

                        <div className="ms-modal-body">
                            <div className="ms-modal-description">
                                <h4>Mô tả</h4>
                                <p>{activeEvent.description}</p>
                            </div>

                            <div className="ms-modal-keypoints">
                                <h4>Những điểm then chốt</h4>
                                <ul>
                                    {activeEvent.keyPoints.map((point, i) => (
                                        <li key={i}>
                                            <Award className="w-4 h-4" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ms-modal-figures">
                                <h4>Nhân vật quan trọng</h4>
                                <div className="ms-figures-grid">
                                    {activeEvent.figures.map((figure) => (
                                        <div key={figure} className="ms-figure-badge">
                                            <Users className="w-4 h-4" />
                                            {figure}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ms-modal-significance">
                                <h4>Ý nghĩa lịch sử</h4>
                                <p>{activeEvent.significance}</p>
                            </div>

                            <div className="ms-modal-media">
                                <div className="ms-modal-image">
                                    {activeEvent.image.url ? (
                                        <img src={activeEvent.image.url} alt={activeEvent.image.alt} />
                                    ) : (
                                        <>
                                            <Image className="ms-modal-image-icon" />
                                            <span>Hình ảnh lịch sử</span>
                                        </>
                                    )}
                                    <p>{activeEvent.image.alt}</p>
                                </div>
                                <div className="ms-modal-source">
                                    <span>Nguồn ảnh</span>
                                    {activeEvent.image.sourceUrl ? (
                                        <a href={activeEvent.image.sourceUrl} target="_blank" rel="noopener noreferrer" className="ms-source-link">
                                            {activeEvent.image.sourceLabel}
                                        </a>
                                    ) : (
                                        <p>{activeEvent.image.sourceLabel}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
