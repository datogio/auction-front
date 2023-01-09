export interface IdentityDetailsProps {
  size: 'md' | 'lg';
  headline: string;
  details: string;
}

const headlineSizesMap: Record<IdentityDetailsProps['size'], string> = {
  md: 'text-sm',
  lg: 'text-2xl',
};

const detailsSizesMap: Record<IdentityDetailsProps['size'], string> = {
  md: 'text-xs',
  lg: 'text-sm',
};

const IdentityDetails = (props: IdentityDetailsProps) => {
  return (
    <div>
      <div className={`${headlineSizesMap[props.size]} flex font-bold`}>
        {props.headline}
      </div>
      <div className={`${detailsSizesMap[props.size]} opacity-60`}>
        {props.details}
      </div>
    </div>
  );
};

export default IdentityDetails;
