import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from 'lucide-react';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  { value: 'te', label: 'తెలుగు (Telugu)' },
  { value: 'ta', label: 'தமிழ் (Tamil)' },
  { value: 'hi', label: 'हिन्दी (Hindi)' },
  { value: 'ml', label: 'മലയാളം (Malayalam)' },
];

export default function LanguageSelector({ language, setLanguage, readOnly = false }) {
  if (readOnly) {
    // Show current language without allowing changes on sub-pages
    const currentLang = languages.find(lang => lang.value === language);
    return (
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Globe className="w-4 h-4" />
        <span>{currentLang?.label || 'English'}</span>
        <span className="text-xs hidden md:block">(Change on main manual page)</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-slate-500" />
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-48 border-slate-300 bg-white">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map(lang => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}