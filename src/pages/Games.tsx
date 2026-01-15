import { Gamepad2 } from 'lucide-react';
import './Games.css'; // MODULAR CSS

export function Games() {
    return (
        <div className="gm-container">
            <Gamepad2 className="gm-icon" />
            <h2 className="gm-title">Trò chơi đang phát triển</h2>
            <p>Tính năng này sẽ sớm ra mắt với các trò chơi tương tác thú vị về chủ đề triết học.</p>
        </div>
    );
}
