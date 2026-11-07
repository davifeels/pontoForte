import React, { useEffect } from 'react';
import BrandGuide from './BrandGuide';

export default function BrandGuideModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#0B0F17] border border-slate-800 rounded-3xl shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <BrandGuide isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}
