export interface AltTsProps {
  someProp: number
}

export function AltTs(props) {
  const displayValue = props.someProp * 2
  return <div>AltTS Component: {displayValue}</div>;
}

export default AltTs;
