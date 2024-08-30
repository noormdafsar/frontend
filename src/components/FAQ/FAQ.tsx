import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { FAQ as FAQType } from '../../types';

interface FAQProps {
  faq: FAQType;
}

export const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full text-left font-semibold"
      >
        {faq.question}
        <ChevronRight className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      {isExpanded && <p className="mt-2 text-gray-600">{faq.answer}</p>}
    </div>
  );
};
