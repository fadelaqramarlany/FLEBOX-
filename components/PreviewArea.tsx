
import React, { useState } from 'react';
import Markdown from 'react-markdown';

interface PreviewAreaProps {
  title: string;
  content: string;
  isLoading?: boolean;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ title, content, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-[40px] shadow-xl border border-slate-100 animate-pulse">
        <div className="h-10 bg-slate-200 rounded-xl w-3/4 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-slate-200 rounded-full w-full"></div>
          <div className="h-4 bg-slate-200 rounded-full w-5/6"></div>
          <div className="h-4 bg-slate-200 rounded-full w-full"></div>
          <div className="h-4 bg-slate-200 rounded-full w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-12 rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden transition-all hover:shadow-2xl hover:border-indigo-50">
      <div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{title}</h2>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            copied
              ? 'bg-green-100 text-green-700'
              : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              <span>Disalin</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              <span>Salin</span>
            </>
          )}
        </button>
      </div>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-indigo-900 prose-p:text-slate-600 prose-strong:text-indigo-700 prose-li:text-slate-600 marker:text-indigo-400">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};
