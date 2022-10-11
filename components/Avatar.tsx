import Image from 'next/image';
import fromImgToUrl from '../utils/fromImgToUrl';

export interface IAvatar {
  firstName: string;
  lastName: string;
  image?: image.Response;
}

const COLORS = [
  'bg-green-500',
  'bg-blue-500',
  'bg-red-500',
  'bg-cyan-500',
  'bg-purple-500',
];

const COLOR_MAPS: Record<number, string> = COLORS.reduce(
  (acc, color, index) => {
    return (acc = { ...acc, [index]: color });
  },
  {}
);

const containsNonLatinCodepoints = (s: string): boolean => {
  return /[^\u0000-\u00ff]/.test(s);
};

const Avatar = ({ firstName, lastName, image }: IAvatar) => {
  return (
    <div className="relative w-20 h-20">
      {image?.url ? (
        <Image
          src={fromImgToUrl(image)}
          layout="fill"
          objectFit="cover"
          alt="avatar image"
          className="rounded-full"
        />
      ) : (
        <div
          className={`${
            COLOR_MAPS[Math.floor(Math.random() * COLORS.length)]
          } w-[100%] h-[100%] rounded-full flex items-center justify-center text-white text-2xl`}
        >
          {containsNonLatinCodepoints(firstName[0])
            ? firstName[0]
            : firstName[0].toUpperCase()}
          {containsNonLatinCodepoints(lastName[0])
            ? lastName[0]
            : lastName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
