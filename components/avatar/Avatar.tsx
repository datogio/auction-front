import Image from 'next/image';

export interface AvatarProps {
  size: 'sm' | 'md' | 'lg';
  image: string;
}

const sizezMap: Record<AvatarProps['size'], string> = {
  sm: 'h-5 w-5',
  md: 'h-10 w-10',
  lg: 'h-20 w-20',
};

const Avatar = (props: AvatarProps) => {
  return (
    <div
      className={`${
        sizezMap[props.size]
      } relative rounded-full overflow-hidden`}
    >
      <Image
        src={props.image}
        layout="fill"
        objectFit="cover"
        alt="User Image"
      />
    </div>
  );
};

export default Avatar;
