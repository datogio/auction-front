export interface IdentityDetailsProps {
  headline: string;
  details: string;
}

const IdentityDetails = (props: IdentityDetailsProps) => {
  return (
    <div>
      <div className="flex font-bold text-sm">{props.headline}</div>
      <div className="text-xs opacity-60">{props.details}</div>
    </div>
  );
};

export default IdentityDetails;
