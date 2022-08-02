import styles from './AltTs.module.scss';

/* eslint-disable-next-line */
export interface AltTsProps {}

export function AltTs(props: AltTsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AltTs!</h1>
    </div>
  );
}

export default AltTs;
