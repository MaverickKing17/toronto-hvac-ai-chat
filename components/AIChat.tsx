
import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="glass-panel mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-gradient-to-r from-primary to-slate-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">Rencon AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={18} />
            </button>
          </div>
          <div className="h-64 bg-white/80 p-4 overflow-y-auto flex flex-col gap-3">
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm text-slate-700 shadow-sm">
              Hello! I can help you with quotes, booking repairs, or checking rebate eligibility. How can I assist you today?
            </div>
          </div>
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <button className="bg-secondary text-white p-2 rounded-full hover:bg-secondary/90 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-sky-400 text-white p-4 rounded-full shadow-lg shadow-sky-500/30 transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-semibold">
          Chat with AI
        </span>
      </button>
    </div>
  );
};

export default AIChat;
