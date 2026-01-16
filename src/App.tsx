import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { AIAssistant } from './pages/AIAssistant';
import { Flipbook } from './pages/Flipbook';
import { Quiz } from './pages/Quiz';
import { Games } from './pages/Games';
import { Museum } from './pages/Museum';
import { AIUsage } from './pages/AIUsage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="flipbook" element={<Flipbook />} />
          <Route path="museum" element={<Museum />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="games" element={<Games />} />
          <Route path="ai-usage" element={<AIUsage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
