import { useState } from 'react';
import { Landmark, Flag, CalendarDays, Globe2, X, Image } from 'lucide-react';
import './Museum.css';

const timeline = [
    {
        era: '1945–1975',
        title: 'Khởi nguồn dân chủ nhân dân',
        description: 'Hình thành Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân; đặt nền tảng cho cơ chế dân chủ mới.',
        detail:
            'Cơ chế dân chủ nhân dân được xác lập sau Cách mạng Tháng Tám, nhấn mạnh quyền làm chủ của Nhân dân trong quản trị và giám sát xã hội.',
        image: {
            alt: 'Tuyên ngôn Độc lập và những ngày đầu của nhà nước mới',
            sourceLabel: 'Bảo tàng Lịch sử Quốc gia (gợi ý nguồn ảnh)',
        },
        icon: <Flag className="ms-era-icon" />,
    },
    {
        era: '1976–1986',
        title: 'Thống nhất & củng cố hệ thống',
        description: 'Hoàn thiện bộ máy quản lý, mở rộng vai trò giám sát của Nhân dân trong xây dựng chính quyền.',
        detail:
            'Giai đoạn củng cố bộ máy nhà nước sau thống nhất; nhấn mạnh việc hoàn thiện cơ chế tiếp dân, phản biện và giám sát tại cơ sở.',
        image: {
            alt: 'Hoạt động xây dựng chính quyền địa phương giai đoạn sau thống nhất',
            sourceLabel: 'Lưu trữ Quốc gia (gợi ý nguồn ảnh)',
        },
        icon: <CalendarDays className="ms-era-icon" />,
    },
    {
        era: '1986–2000',
        title: 'Đổi mới & phát huy dân chủ',
        description: 'Đổi mới toàn diện, mở rộng quyền làm chủ và tạo kênh đối thoại giữa chính quyền và người dân.',
        detail:
            'Đổi mới mở ra cơ chế đối thoại hai chiều; các mô hình “dân biết, dân bàn, dân làm, dân kiểm tra” được phát huy mạnh hơn.',
        image: {
            alt: 'Đổi mới quản trị và phát triển cộng đồng',
            sourceLabel: 'Tư liệu báo chí (gợi ý nguồn ảnh)',
        },
        icon: <Globe2 className="ms-era-icon" />,
    },
    {
        era: '2001–nay',
        title: 'Dân chủ cơ sở hiện đại',
        description: 'Luật hóa cơ chế “Dân biết, dân bàn, dân làm, dân kiểm tra” gắn với chuyển đổi số cộng đồng.',
        detail:
            'Từ các văn bản quy phạm đến Luật Thực hiện dân chủ cơ sở, mục tiêu là minh bạch hóa thông tin, tăng trách nhiệm giải trình và ứng dụng công nghệ số.',
        image: {
            alt: 'Chuyển đổi số phục vụ dân chủ cơ sở',
            sourceLabel: 'Cổng thông tin Chính phủ (gợi ý nguồn ảnh)',
        },
        icon: <Landmark className="ms-era-icon" />,
    },
];

const highlights = [
    {
        year: '1945',
        label: 'Tuyên ngôn Độc lập',
        detail: 'Khẳng định quyền làm chủ của Nhân dân, đặt nền tảng cho nhà nước dân chủ mới.',
    },
    {
        year: '1998',
        label: 'Chỉ thị về dân chủ cơ sở',
        detail: 'Mở rộng các kênh tham gia, giám sát và công khai trong cộng đồng dân cư.',
    },
    {
        year: '2013',
        label: 'Hiến pháp 2013',
        detail: 'Khẳng định quyền con người, quyền công dân và cơ chế Nhân dân làm chủ.',
    },
    {
        year: '2022',
        label: 'Luật Thực hiện dân chủ cơ sở',
        detail: 'Thể chế hóa các nguyên tắc dân chủ, tăng tính minh bạch và trách nhiệm giải trình.',
    },
];

export function Museum() {
    const [activeItem, setActiveItem] = useState<(typeof timeline)[number] | null>(null);

    return (
        <div className="ms-wrapper">
            <div className="ms-hero">
                <div className="ms-hero-pattern"></div>
                <div className="ms-hero-content">
                    <div className="ms-badge">
                        <Landmark className="w-4 h-4" />
                        <span>Bảo tàng Dân chủ cơ sở</span>
                    </div>
                    <h1 className="ms-title">Dòng chảy lịch sử & dấu mốc dân chủ</h1>
                    <p className="ms-subtitle">
                        Rút gọn timeline để phục vụ thuyết trình: nắm nhanh bối cảnh, điểm ngoặt và ý nghĩa lịch sử
                        của dân chủ cơ sở ở Việt Nam.
                    </p>
                </div>
            </div>

            <section className="ms-section">
                <h2 className="ms-section-title">Timeline tổng quan</h2>
                <div className="ms-timeline">
                    {timeline.map((item) => (
                        <button
                            key={item.era}
                            type="button"
                            className="ms-timeline-card"
                            onClick={() => setActiveItem(item)}
                        >
                            <div className="ms-timeline-top">
                                <div className="ms-era-badge">{item.era}</div>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="ms-card-cta">Xem chi tiết</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="ms-section ms-dark">
                <h2 className="ms-section-title">Các sự kiện then chốt</h2>
                <div className="ms-highlight-grid">
                    {highlights.map((item) => (
                        <div key={item.year} className="ms-highlight-card">
                            <div className="ms-highlight-year">{item.year}</div>
                            <div>
                                <h4>{item.label}</h4>
                                <p>{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {activeItem && (
                <div className="ms-modal" role="dialog" aria-modal="true">
                    <div className="ms-modal-backdrop" onClick={() => setActiveItem(null)}></div>
                    <div className="ms-modal-card">
                        <button className="ms-modal-close" onClick={() => setActiveItem(null)} aria-label="Đóng">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="ms-modal-header">
                            <span className="ms-modal-era">{activeItem.era}</span>
                            <h3>{activeItem.title}</h3>
                            <p>{activeItem.detail}</p>
                        </div>
                        <div className="ms-modal-media">
                            <div className="ms-modal-image">
                                <Image className="ms-modal-image-icon" />
                                <span>Placeholder hình ảnh</span>
                                <p>{activeItem.image.alt}</p>
                            </div>
                            <div className="ms-modal-source">
                                <span>Nguồn ảnh</span>
                                <p>{activeItem.image.sourceLabel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
