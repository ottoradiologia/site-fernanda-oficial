import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Paraíso, São Paulo - SP`)}`;

// Lista dos estacionamentos próximos, com link para cada endereço no Google Maps
const ParkingList = ({ showNote = true }: { showNote?: boolean }) => {
  const { t } = useLanguage();
  const parking = t.pages.contact.parking;

  if (!parking) return null;

  return (
    <div>
      <ul className="space-y-3">
        {parking.items.map((item) => {
          const [name, address = name] = item.split(' — ');
          return (
            <li key={item} className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4A7570] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">{name}</p>
                <a
                  href={mapsUrl(address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4f7f78] underline underline-offset-2 hover:text-[#4A7570]"
                >
                  {address}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      {showNote && (
        <p className="text-sm text-gray-500 italic mt-4">{parking.note}</p>
      )}
    </div>
  );
};

export default ParkingList;
