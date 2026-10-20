import {
  Card,
  CardImage,
  CardOverlay,
  CardHeader,
  CardContent,
  CardTitle,
  CardTags,
  CardTag,
} from '@shared/ui';
import { cn } from '@shared/lib';
import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Button } from '@shared/ui';
import Image from 'next/image';
import { useFavoritesStore } from '../store/useFavoritesStore';

interface TravelLogCardProps {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  tags: { label: string; icon: string }[];
  visitorsCount: number;
  isVisited?: boolean;
}

export function TravelLogCard({
  id,
  title,
  location,
  imageSrc,
  tags,
  visitorsCount,
  isVisited = false,
}: TravelLogCardProps) {
  const toggleVisited = useFavoritesStore((state) => state.toggleVisited);

  return (
    <Card className="bg-white shadow-none text-slate-800">
      <div className="h-65 relative w-full rounded-4xl  overflow-hidden flex flex-col">
        <CardImage
          src={imageSrc}
          alt={title}
          className={cn(isVisited && 'brightness-50')}
        />
        <CardOverlay className="from-black/90 via-black/20 to-transparent" />

        <CardHeader className="">
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/30 transition">
            <HeartIcon className="w-5 h-5 text-red-500 fill-red-500" />
          </div>
        </CardHeader>

        <CardContent className="p-4 flex-row items-end justify-end">
          <div className="flex items-center gap-4">
            <span className="text-white text-xs text-right opacity-90">
              ۱۲۰۰ نفر به این شهر سفر کردند
            </span>
            <div className="flex -space-x-2 space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        {/* مهر بازدید شده */}
        {isVisited && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 pointer-events-none">
            <Image
              src={'/images/visited_flag.svg'}
              alt="بازدید شده"
              width={200}
              height={150}
            />
          </div>
        )}
      </div>

      {/* بخش پایینی: محتوا و دکمه */}
      <div className="pt-3 flex flex-col gap-4">
        <div className="flex items-center font-yekta px-5">
          <CardTitle className="text-text-main">{title}</CardTitle>
          <span className="inline-flex bg-accent mx-2 w-px h-5"></span>
          <div className="flex items-center font-medium text-text-foreground text-sm gap-1">
            <MapPinIcon className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <CardTags className="px-5">
          {tags.map((tag, index) => (
            <CardTag
              key={index}
              className="bg-backgroun-secondary text-tertiary-hover gap-1 px-3 py-1 text-sm rounded-xl"
            >
              <span>{tag.label}</span>
              <span>{tag.icon}</span>
            </CardTag>
          ))}
        </CardTags>

        <Button
          rounded="full"
          size="large"
          onClick={() => toggleVisited(id)} // <--- اتصال اکشن
          className={cn(
            'font-bold text-sm transition-colors h-11',
            isVisited
              ? 'bg-success text-white hover:bg-[#057b56] active:bg-success'
              : 'bg-emerald-50 text-success hover:bg-emerald-100 hover:text-success active:bg-success/40 active:text-success',
          )}
        >
          {isVisited ? 'تیک سفر زده شد!' : 'تیک سفر رو بزن'}
        </Button>
      </div>
    </Card>
  );
}
