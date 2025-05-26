import Image from 'next/image';
import LinearEqualizer from '@/app/components/LinearEqualizer';
import CircularProgress from '@/app/components/CircularProgress';

export default function Page() {
  return (
    <div className="bg-dotted grid h-full min-h-screen grid-cols-3 p-4">
      <div>
        <div className="flex h-fit flex-row items-center gap-4">
          <Image
            src="/login/glob.png"
            width={137}
            height={137}
            alt="Picture of the author"
          />
          <LinearEqualizer
            className="h-[200px] w-full"
            lineCount={13}
            lineHeight={1}
            gap={5}
            color="#e6e6e6"
            containerHeight={100}
            transitionDuration={4000}
            speed={4000}
          />
        </div>
        <div className="flex h-fit flex-row items-center gap-4">
          <CircularProgress
            targetPercentage={75}
            size={200}
            strokeWidth={12}
            color="#ff0000"
            duration={3000}
          />
          <LinearEqualizer
            className="h-[200px] w-full"
            lineCount={13}
            lineHeight={1}
            gap={5}
            color="#e6e6e6"
            containerHeight={100}
            transitionDuration={4000}
            speed={4000}
          />
        </div>
      </div>
      <div className="bg-blue-100 p-4"></div>;
      <div className="bg-green-100 p-4"></div>;
    </div>
  );
}
