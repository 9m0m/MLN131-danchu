// Tương tác của người dùng có thể là click, hover, hoặc input
export type UserInteraction = 'click' | 'hover' | 'input' | 'submit';

// Cấu trúc cơ bản cho các item trong Menu
export interface MenuItem {
    id: string;
    label: string;
    path: string;
    isActive?: boolean;
}

// Cấu trúc chung cho các response từ API (nếu cần mở rộng sau này)
export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}
