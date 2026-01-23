// ============================================
// VISUAL NOVEL GAME - "CON ĐƯỜNG VIỆT NAM"
// Component chính của game
// ============================================

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { stages, endings } from '../data/gameData';
import { GameState, Choice, EndingType, ChoiceHistory, ChoiceEffects } from '../types/game';
import './VisualNovel.css';

// ============================================
// INITIAL GAME STATE
// ============================================
const initialGameState: GameState = {
  currentStage: 0,
  stats: {
    economy: 25,
    happiness: 25,
    trust: 25
  },
  choices: [],
  ending: null,
  isPlaying: false,
  showingResult: false
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Tính toán ending dựa trên chỉ số cuối cùng
function calculateEnding(stats: ChoiceEffects): EndingType {
  const below25Count = Object.values(stats).filter(v => v < 25).length;
  
  if (below25Count === 0) return 'best';
  if (below25Count === 1) return 'bad1';
  if (below25Count === 2) return 'bad2';
  return 'hidden';
}

// Xác định chỉ số nào bị thấp (cho bad ending 1)
function getLowStat(stats: ChoiceEffects): 'economy' | 'happiness' | 'trust' | null {
  if (stats.economy < 25) return 'economy';
  if (stats.happiness < 25) return 'happiness';
  if (stats.trust < 25) return 'trust';
  return null;
}

// Giới hạn giá trị chỉ số (0-100)
function clampStat(value: number): number {
  return Math.max(0, Math.min(100, value));
}

// ============================================
// STAT BAR COMPONENT
// ============================================
interface StatBarProps {
  icon: string;
  label: string;
  value: number;
  statKey: 'economy' | 'happiness' | 'trust';
  change?: number;
}

function StatBar({ icon, label, value, statKey, change }: StatBarProps) {
  // Xác định màu dựa trên giá trị
  const getStatusClass = () => {
    if (value < 15) return 'danger';
    if (value < 25) return 'warning';
    return '';
  };

  return (
    <div className="vn-stat-item">
      <div className="vn-stat-label">
        <span className={`pixel-icon pixel-icon-${icon}`}></span>
        <span>{label}</span>
        {change !== undefined && change !== 0 && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-bold ${change > 0 ? 'text-green-400' : 'text-red-400'}`}
          >
            {change > 0 ? `+${change}` : change}
          </motion.span>
        )}
      </div>
      <div className="vn-stat-bar-bg">
        <motion.div
          className={`vn-stat-bar-fill stat-${statKey} ${getStatusClass()}`}
          initial={{ width: 0 }}
          animate={{ width: `${clampStat(value)}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="vn-stat-value">{Math.round(value)}</span>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// CHOICE BUTTON COMPONENT
// ============================================
interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
  disabled?: boolean;
}

function ChoiceButton({ choice, onClick, disabled }: ChoiceButtonProps) {
  // Ẩn hiệu ứng - chỉ hiển thị sau khi chọn trong popup
  return (
    <motion.button
      className="vn-choice-btn"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="vn-choice-id">{choice.id}</div>
      <div className="vn-choice-content">
        <div className="vn-choice-text">{choice.text}</div>
        <div className="vn-choice-desc">{choice.description}</div>
      </div>
    </motion.button>
  );
}

// ============================================
// START SCREEN COMPONENT
// ============================================
interface StartScreenProps {
  onStart: () => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      className="vn-start-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Trang trí sao */}
      <span className="vn-star-decoration vn-star-1">⭐</span>
      <span className="vn-star-decoration vn-star-2">✨</span>
      <span className="vn-star-decoration vn-star-3">⭐</span>
      <span className="vn-star-decoration vn-star-4">✨</span>
      <span className="vn-star-decoration vn-star-5">⭐</span>

      <motion.h1
        className="vn-pixel-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        VƯƠNG QUỐC<br />AURELIA
      </motion.h1>

      <motion.p
        className="vn-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        ～ Visual Novel về Triết học Chính trị ～
      </motion.p>

      <motion.div
        className="vn-flag-decoration"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        ⚔️
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center gap-4 mt-4"
      >
        <p className="text-gray-300 text-center max-w-md px-4" style={{ fontFamily: 'VT323, monospace', fontSize: '1.25rem' }}>
          Trải nghiệm 5 giai đoạn lịch sử quan trọng của vương quốc Aurelia.<br />
          Mỗi quyết định của bạn sẽ định hình tương lai quốc gia.
        </p>

        <motion.button
          className="vn-pixel-btn"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶ BẮT ĐẦU HÀNH TRÌNH
        </motion.button>

        <div className="flex gap-6 mt-6 text-sm text-gray-400" style={{ fontFamily: 'VT323, monospace' }}>
          <span><span className="pixel-icon pixel-icon-economy"></span> Kinh tế</span>
          <span><span className="pixel-icon pixel-icon-happiness"></span> Hạnh phúc</span>
          <span>🤝 Niềm tin</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// RESULT POPUP COMPONENT
// ============================================
interface ResultPopupProps {
  choice: Choice;
  historicalNote: string;
  onContinue: () => void;
}

function ResultPopup({ choice, historicalNote, onContinue }: ResultPopupProps) {
  const effects = [
    { key: 'economy', label: 'Kinh tế', value: choice.effects.economy, icon: 'economy' },
    { key: 'happiness', label: 'Hạnh phúc', value: choice.effects.happiness, icon: 'happiness' },
    { key: 'trust', label: 'Niềm tin', value: choice.effects.trust, icon: 'trust' }
  ];

  return (
    <motion.div
      className="vn-result-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="vn-result-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3 className="vn-result-title">
          ✅ LỰA CHỌN: {choice.id}
        </h3>

        <div className="vn-result-changes">
          {effects.map(e => (
            <div key={e.key} className="vn-result-stat">
              <span className="vn-result-stat-name">
                <span className={`pixel-icon pixel-icon-${e.icon}`}></span> {e.label}
              </span>
              <span className={`vn-result-stat-change ${e.value >= 0 ? 'positive' : 'negative'}`}>
                {e.value > 0 ? `+${e.value}` : e.value}
              </span>
            </div>
          ))}
        </div>

        <div className="vn-historical-note">
          <p className="vn-historical-note-text">{historicalNote}</p>
        </div>

        <motion.button
          className="vn-pixel-btn"
          onClick={onContinue}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          TIẾP TỤC ▶
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// GAME STAGE COMPONENT
// ============================================
interface GameStageProps {
  gameState: GameState;
  onChoice: (choice: Choice) => void;
  recentChanges?: ChoiceEffects;
}

function GameStage({ gameState, onChoice, recentChanges }: GameStageProps) {
  const currentStageData = stages[gameState.currentStage];

  if (!currentStageData) return null;

  return (
    <motion.div
      className="vn-fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Game Header với Stage Indicator */}
      <div className="vn-game-header">
        <div className="vn-stage-indicator">
          <span>GIAI ĐOẠN {gameState.currentStage + 1}/5</span>
          <div className="vn-stage-dots">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`vn-stage-dot ${
                  i < gameState.currentStage
                    ? 'completed'
                    : i === gameState.currentStage
                    ? 'current'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bars */}
      <div className="vn-stats-container">
        <StatBar
          icon="economy"
          label="Kinh tế"
          value={gameState.stats.economy}
          statKey="economy"
          change={recentChanges?.economy}
        />
        <StatBar
          icon="happiness"
          label="Hạnh phúc"
          value={gameState.stats.happiness}
          statKey="happiness"
          change={recentChanges?.happiness}
        />
        <StatBar
          icon="trust"
          label="Niềm tin"
          value={gameState.stats.trust}
          statKey="trust"
          change={recentChanges?.trust}
        />
      </div>

      {/* Story Box */}
      <div className="vn-story-container">
        <div className="vn-story-header">
          <h2 className="vn-story-title">{currentStageData.title}</h2>
          <p className="vn-story-period"><span className="pixel-icon pixel-icon-calendar"></span> {currentStageData.period}</p>
        </div>

        <div className="vn-story-body">
          {/* Bối cảnh lịch sử */}
          <div className="vn-context-box">
            <h3 className="vn-context-title">
              📜 BỐI CẢNH LỊCH SỬ
            </h3>
            <p className="vn-context-text">{currentStageData.context}</p>
          </div>

          {/* Tình huống */}
          <div className="vn-situation-box">
            <p className="vn-situation-text">{currentStageData.situation}</p>
          </div>

          {/* Các lựa chọn */}
          <div className="vn-choices-container">
            {currentStageData.choices.map((choice: Choice) => (
              <ChoiceButton
                key={choice.id}
                choice={choice}
                onClick={() => onChoice(choice)}
                disabled={gameState.showingResult}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// ENDING SCREEN COMPONENT
// ============================================
interface EndingScreenProps {
  gameState: GameState;
  onRestart: () => void;
}

function EndingScreen({ gameState, onRestart }: EndingScreenProps) {
  const endingType = gameState.ending || 'best';
  const endingData = endings[endingType];
  const lowStat = endingType === 'bad1' ? getLowStat(gameState.stats) : null;

  // Helper function to convert emoji to pixel icon class
  const getPixelIconClass = (emoji: string): string => {
    const iconMap: Record<string, string> = {
      '🏆': 'trophy',
      '⚠️': 'warning',
      '💥': 'explosion',
      '☠️': 'skull'
    };
    return iconMap[emoji] || 'trophy';
  };

  // Lấy nội dung chi tiết cho bad ending 1
  const getBad1Content = () => {
    if (endingType === 'bad1' && lowStat) {
      const statDetails: Record<string, string[]> = {
        economy: [
          "💸 Kinh tế sụp đổ",
          "Lãnh địa nghèo nàn, thiếu hụt ngân sách trầm trọng. Không đủ tiền xây dựng cơ sở hạ tầng, y tế, giáo dục. Nhiều gia đình di cư sang Lãnh địa khác. Dù có dân chủ, nhưng 'dân chủ đói khát' không bền vững."
        ],
        happiness: [
          "😢 Lãnh dân bất mãn",
          "Lãnh dân bất mãn, hay xảy ra biểu tình, đình công. Mặc dù có kinh tế và niềm tin, nhưng cuộc sống khổ cực. Nhiều chính sách tốt nhưng không được ủng hộ vì dân không hài lòng. Lãnh địa bất ổn, khó phát triển lâu dài."
        ],
        trust: [
          "💔 Niềm tin tan vỡ",
          "Lãnh dân không tin vào Hội đồng, quan lại, hệ thống pháp luật. Tham nhũng tràn lan, không ai hợp tác với chính quyền. Mặc dù có tiền, nhưng không thể thực thi chính sách vì dân không tuân theo. Xã hội tan rã, mỗi người lo cho mình."
        ]
      };
      return statDetails[lowStat];
    }
    return null;
  };

  const bad1Content = getBad1Content();

  // Xác định màu của giá trị stat cuối
  const getStatValueClass = (value: number) => {
    if (value >= 25) return 'good';
    if (value >= 15) return 'warning';
    return 'bad';
  };

  return (
    <motion.div
      className="vn-ending-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Trang trí sao cho best ending */}
      {endingType === 'best' && (
        <>
          <span className="vn-star-decoration vn-star-1">🌟</span>
          <span className="vn-star-decoration vn-star-2">✨</span>
          <span className="vn-star-decoration vn-star-3">🌟</span>
          <span className="vn-star-decoration vn-star-4">✨</span>
          <span className="vn-star-decoration vn-star-5">🌟</span>
        </>
      )}

      <motion.div
        className="vn-ending-card"
        style={{
          borderColor:
            endingType === 'best'
              ? '#ffd700'
              : endingType === 'bad1'
              ? '#f59e0b'
              : endingType === 'bad2'
              ? '#ef4444'
              : '#4b5563'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`vn-ending-header bg-gradient-to-r ${endingData.color}`}
        >
          <motion.div
            className="vn-ending-emoji"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div 
              className={`pixel-icon pixel-icon-${getPixelIconClass(endingData.emoji)}`}
              style={{width: '64px', height: '64px', margin: '0 auto'}}
            ></div>
          </motion.div>
          <h2 className="vn-ending-title">{endingData.title.replace(/🏆|⚠️|💥|☠️/gu, '').trim()}</h2>
        </div>

        <div className="vn-ending-body">
          <div className="vn-ending-content">
            {/* Nội dung ending chính */}
            {endingData.content.map((paragraph: string, i: number) => (
              <motion.div
                key={i}
                className={`vn-ending-md ${i === endingData.content.length - 1 ? 'vn-ending-meta' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.3 }}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {paragraph}
                </ReactMarkdown>
              </motion.div>
            ))}

            {/* Nội dung chi tiết cho bad ending 1 */}
            {bad1Content && (
              <motion.div
                className="mt-6 p-4 bg-yellow-900/30 rounded-lg border-2 border-yellow-600 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {bad1Content.map((text: string, i: number) => (
                  <p
                    key={i}
                    className={i === 0 ? 'font-bold text-yellow-400 mb-2' : 'text-gray-300'}
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            )}
          </div>

          {/* Thống kê cuối cùng */}
          <motion.div
            className="vn-final-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="vn-final-stat-item">
              <div className="pixel-icon pixel-icon-economy" style={{width: '32px', height: '32px'}}></div>
              <div className={`vn-final-stat-value ${getStatValueClass(gameState.stats.economy)}`}>
                {Math.round(gameState.stats.economy)}
              </div>
              <div className="vn-final-stat-label">Kinh tế</div>
            </div>
            <div className="vn-final-stat-item">
              <div className="pixel-icon pixel-icon-happiness" style={{width: '32px', height: '32px'}}></div>
              <div className={`vn-final-stat-value ${getStatValueClass(gameState.stats.happiness)}`}>
                {Math.round(gameState.stats.happiness)}
              </div>
              <div className="vn-final-stat-label">Hạnh phúc</div>
            </div>
            <div className="vn-final-stat-item">
              <div className="pixel-icon pixel-icon-trust" style={{width: '32px', height: '32px'}}></div>
              <div className={`vn-final-stat-value ${getStatValueClass(gameState.stats.trust)}`}>
                {Math.round(gameState.stats.trust)}
              </div>
              <div className="vn-final-stat-label">Niềm tin</div>
            </div>
          </motion.div>

          {/* Lịch sử lựa chọn */}
          <motion.div
            className="vn-choices-history"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h4 className="vn-history-title">📋 LỊCH SỬ LỰA CHỌN</h4>
            <div className="vn-history-list">
              {gameState.choices.map((choice, i) => (
                <div key={i} className="vn-history-item">
                  GĐ{choice.stageId}: {choice.choiceId}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nút hành động */}
          <motion.div
            className="vn-ending-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <motion.button
              className="vn-pixel-btn"
              onClick={onRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 CHƠI LẠI
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// MAIN GAME COMPONENT
// ============================================
export function VisualNovel() {
  // State chính của game
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  
  // State tạm để hiển thị kết quả lựa chọn
  const [lastChoice, setLastChoice] = useState<Choice | null>(null);
  const [recentChanges, setRecentChanges] = useState<ChoiceEffects | undefined>(undefined);

  // Bắt đầu game mới
  const handleStart = useCallback(() => {
    setGameState({
      ...initialGameState,
      isPlaying: true
    });
    setLastChoice(null);
    setRecentChanges(undefined);
  }, []);

  // Xử lý lựa chọn của người chơi
  const handleChoice = useCallback((choice: Choice) => {
    setLastChoice(choice);
    setRecentChanges(choice.effects);
    
    // Cập nhật stats
    setGameState(prev => ({
      ...prev,
      stats: {
        economy: clampStat(prev.stats.economy + choice.effects.economy),
        happiness: clampStat(prev.stats.happiness + choice.effects.happiness),
        trust: clampStat(prev.stats.trust + choice.effects.trust)
      },
      choices: [
        ...prev.choices,
        {
          stageId: stages[prev.currentStage].id,
          choiceId: choice.id,
          effects: choice.effects
        } as ChoiceHistory
      ],
      showingResult: true
    }));
  }, []);

  // Tiếp tục sang giai đoạn tiếp theo
  const handleContinue = useCallback(() => {
    setGameState(prev => {
      const nextStage = prev.currentStage + 1;
      
      // Nếu đã hết 5 giai đoạn, tính ending
      if (nextStage >= 5) {
        const ending = calculateEnding(prev.stats);
        return {
          ...prev,
          currentStage: nextStage,
          ending,
          showingResult: false
        };
      }
      
      return {
        ...prev,
        currentStage: nextStage,
        showingResult: false
      };
    });
    
    setLastChoice(null);
    // Giữ recentChanges thêm một chút để animation
    setTimeout(() => setRecentChanges(undefined), 1000);
  }, []);

  // Khởi động lại game
  const handleRestart = useCallback(() => {
    setGameState(initialGameState);
    setLastChoice(null);
    setRecentChanges(undefined);
  }, []);

  return (
    <div className="vn-game-container">
      <AnimatePresence mode="wait">
        {/* Màn hình bắt đầu */}
        {!gameState.isPlaying && (
          <StartScreen key="start" onStart={handleStart} />
        )}

        {/* Gameplay - 5 giai đoạn */}
        {gameState.isPlaying && gameState.currentStage < 5 && !gameState.ending && (
          <GameStage
            key={`stage-${gameState.currentStage}`}
            gameState={gameState}
            onChoice={handleChoice}
            recentChanges={recentChanges}
          />
        )}

        {/* Màn hình kết thúc */}
        {gameState.isPlaying && gameState.ending && (
          <EndingScreen
            key="ending"
            gameState={gameState}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>

      {/* Popup kết quả sau mỗi lựa chọn */}
      <AnimatePresence>
        {gameState.showingResult && lastChoice && (
          <ResultPopup
            choice={lastChoice}
            historicalNote={stages[gameState.currentStage]?.historicalNote || ''}
            onContinue={handleContinue}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default VisualNovel;
