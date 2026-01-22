
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    // Logic to handle message sending would go here
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" role="complementary" aria-label="AI Chat Assistant">
      {isOpen && (
        <div 
          className="glass-panel mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300 border-0 ring-1 ring-slate-900/5"
          role="dialog"
          aria-modal="true"
          aria-label="Chat Window"
        >
          {/* Header with requested gradient */}
          <div className="bg-gradient-to-r from-accent to-secondary p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true"></div>
              <h2 className="font-semibold text-sm tracking-wide flex items-center gap-1">
                Rencon AI <Sparkles size={12} className="text-yellow-300" />
              </h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
          
          <div 
            className="h-72 bg-slate-50 p-4 overflow-y-auto flex flex-col gap-3"
            role="log" 
            aria-live="polite"
          >
            <div className="bg-white p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm text-slate-600 shadow-sm border border-slate-100">
              <p className="font-semibold text-accent text-xs mb-1">AI Assistant</p>
              Hello! I can help you with quotes, booking repairs, or checking rebate eligibility. How can I assist you today?
            </div>
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <input 
              ref={inputRef}
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about HVAC..." 
              aria-label="Type your message"
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-slate-900 placeholder-slate-400 transition-all"
            />
            <button 
              onClick={handleSend}
              aria-label="Send message"
              className="bg-accent text-white p-2.5 rounded-full hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-md shadow-orange-200"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        className="animate-in slide-in-from-bottom-20 fade-in duration-700 delay-500 bg-accent hover:bg-orange-600 text-white p-4 rounded-full shadow-xl shadow-orange-500/40 transition-all hover:scale-110 active:scale-95 group flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-accent/40"
      >
        <div className="relative">
           <MessageSquare className="w-6 h-6 relative z-10" aria-hidden="true" />
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border-2 border-accent"></span>
          </span>
        </div>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-bold text-sm">
          Chat With AI
        </span>
      </button>
    </div>
  );
};

export default AIChat;
    