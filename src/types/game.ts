// ============================================
// ĐỊNH NGHĨA TYPES CHO GAME VISUAL NOVEL
// "Con đường Việt Nam" - Visual Novel Game
// ============================================

// Hiệu ứng của mỗi lựa chọn lên các chỉ số
export interface ChoiceEffects {
  economy: number;    // Kinh tế
  happiness: number;  // Hạnh phúc
  trust: number;      // Niềm tin
}

// Một lựa chọn trong game
export interface Choice {
  id: 'A' | 'B' | 'C';
  text: string;           // Nội dung lựa chọn
  description: string;    // Mô tả chi tiết hơn
  effects: ChoiceEffects; // Tác động lên chỉ số
}

// Một giai đoạn lịch sử trong game
export interface Stage {
  id: number;
  title: string;          // Tiêu đề giai đoạn
  period: string;         // Thời kỳ (VD: "1945-1954")
  context: string;        // Bối cảnh lịch sử
  situation: string;      // Tình huống đặt ra
  choices: Choice[];      // 3 lựa chọn A, B, C
  historicalNote: string; // Ghi chú lịch sử thực tế
}

// Loại ending
export type EndingType = 'best' | 'bad1' | 'bad2' | 'hidden';

// Thông tin ending
export interface Ending {
  type: EndingType;
  title: string;
  emoji: string;
  content: string[];      // Nội dung ending (nhiều đoạn)
  color: string;          // Màu chủ đạo
}

// Chỉ số đặc biệt bị thấp (cho bad ending 1)
export type LowStat = 'economy' | 'happiness' | 'trust' | null;

// Lịch sử lựa chọn của người chơi
export interface ChoiceHistory {
  stageId: number;
  choiceId: 'A' | 'B' | 'C';
  effects: ChoiceEffects;
}

// State chính của game
export interface GameState {
  currentStage: number;   // 0-4 (index), 5 = ending
  stats: ChoiceEffects;   // 3 chỉ số hiện tại
  choices: ChoiceHistory[]; // Lịch sử lựa chọn
  ending: EndingType | null;
  isPlaying: boolean;     // Đang chơi hay chưa bắt đầu
  showingResult: boolean; // Đang hiển thị kết quả lựa chọn
}

// Props cho các component
export interface StatBarProps {
  label: string;
  value: number;
  icon: string;
  maxValue?: number;
}

export interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
  disabled?: boolean;
}
