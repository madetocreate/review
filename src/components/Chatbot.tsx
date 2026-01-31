'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const t = useTranslations('chatbot');
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', text: t('welcome') }]);
    }
  }, [open, messages.length, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const quickReplies = [
    { key: 'q1', label: t('q1') },
    { key: 'q2', label: t('q2') },
    { key: 'q3', label: t('q3') },
  ];

  const getResponse = (q: string): string => {
    const lower = q.toLowerCase();
    if (lower.includes('preis') || lower.includes('kost') || lower.includes('price') || lower.includes('precio'))
      return t('a1');
    if (lower.includes('funktion') || lower.includes('work') || lower.includes('funciona') || lower.includes('how'))
      return t('a2');
    if (lower.includes('branch') || lower.includes('industr') || lower.includes('wer'))
      return t('a3');
    return t('aDefault');
  };

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(msg) }]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ height: 480 }}
          >
            <div className="bg-accent text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <div className="font-semibold text-sm">{t('title')}</div>
                <div className="text-xs text-gray-400">{t('subtitle')}</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={'flex ' + (msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div
                    className={
                      'max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ' +
                      (msg.role === 'user'
                        ? 'bg-accent text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-700 rounded-bl-sm')
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.key}
                      onClick={() => handleSend(qr.label)}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 p-3 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('placeholder')}
                  className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-shadow animate-pulse"
      >
        {open ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
      </motion.button>
    </>
  );
}
