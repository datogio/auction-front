import Image from 'next/image';
import fromImgToUrl from '../utils/fromImgToUrl';

export interface IAvatar {
  firstName: string;
  lastName: string;
  image?: image.Response;
}

const Avatar = ({ firstName, lastName, image }: IAvatar) => {
  return (
    <div className="relative w-20 h-20">
      {image?.url ? (
        <Image
          src={fromImgToUrl(image)}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      ) : (
        <div className="w-[100%] h-[100%] bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
          {firstName[0].toUpperCase()}
          {lastName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
