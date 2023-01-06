import Image from 'next/image';

export interface AvatarProps {
  size: 'sm' | 'md' | 'lg';
  firstName: string;
  lastName: string;
  image: string;
}

const sizezMap: Record<AvatarProps['size'], string> = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8',
  lg: 'h-20 w-20 text-3xl',
};

const Avatar = (props: AvatarProps) => {
  return (
    <div
      className={`${sizezMap[props.size]} ${
        !props.image &&
        'bg-blue-500 flex items-center justify-center text-white'
      } relative rounded-full overflow-hidden`}
    >
      {props.image ? (
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="User Image"
        />
      ) : (
        <div>
          {props.firstName[0].toUpperCase()}
          {props.lastName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
