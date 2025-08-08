import React from 'react';
import { format } from 'date-fns';

export default function Timeline({ events = [], items = [] }) {
  // Use events if provided, otherwise fall back to items for backward compatibility
  const timelineData = events.length > 0 ? events : items;

  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-500">No timeline events to display</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-200">
      {timelineData.map((item, index) => (
        <div key={index} className="relative flex items-center">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full z-10 ${
            item.iconBg || 'bg-slate-200'
          }`}>
            <item.icon className={`w-5 h-5 ${item.iconColor || 'text-slate-600'}`} />
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between items-center">
              <h4 className={`font-semibold ${
                item.isCompleted ? 'text-slate-800' : 'text-slate-500'
              }`}>
                {item.title}
              </h4>
              {(item.timestamp || item.date) && (
                <span className="text-xs text-slate-500">
                  {format(new Date(item.timestamp || item.date), 'MMM dd, yyyy')}
                </span>
              )}
            </div>
            <p className={`text-sm mt-1 ${
              item.isCompleted ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}