// components/ChatInputSection.js
'use client'
import { useState } from 'react'

export default function ChatInputSection() {
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Sending message:', inputValue)
      setInputValue('')
      // Add logic to handle the message (e.g., send to API)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <section className="relative py-24 flex items-center justify-center chat-gradient min-h-[400px]">
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        <div className="relative w-full flex items-center">
          <input
            type="text"
            placeholder="Ask me anything"
            className="search-input flex-grow"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="send-button ml-4 flex-shrink-0"
            onClick={handleSend}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        {/* Play/Pause button from screenshot */}
        <button className="absolute bottom-8 right-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white/80 hover:bg-white/30 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  )
}
