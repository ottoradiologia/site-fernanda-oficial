import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/translations';
import { BR, US } from 'country-flag-icons/react/3x2';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; Flag: React.ComponentType<{ className?: string }>; name: string }[] = [
    { code: 'pt', Flag: BR, name: 'Português' },
    { code: 'en', Flag: US, name: 'English' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => {
        const FlagComponent = lang.Flag;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center justify-center w-10 h-10 rounded transition-colors overflow-hidden ${
              language === lang.code
                ? 'bg-[#83b2ac] shadow-md ring-2 ring-[#83b2ac] ring-offset-2'
                : 'bg-white hover:bg-gray-100 border border-gray-200'
            }`}
            title={lang.name}
            aria-label={`Switch to ${lang.name}`}
          >
            <FlagComponent className="w-6 h-6 object-cover rounded" />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;

