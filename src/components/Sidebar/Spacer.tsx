import styles from './spacer.module.scss';

type SpacerProps = {
  line?: boolean;
  height?: number;
};

const Spacer = ({ line = false, height = 20 }: SpacerProps) => (
  <div style={{ height }} className={styles.spacer}>
    {line && <div className={styles.line} />}
  </div>
);

export default Spacer;
