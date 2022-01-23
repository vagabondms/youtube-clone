import styles from './title.module.scss';

type TitleProps = {
  text: string;
};

const MenuItem = ({ text }: TitleProps) => (
  <div className={styles.title}>
    <div className={styles.text}>{text}</div>
  </div>
);

export default MenuItem;
