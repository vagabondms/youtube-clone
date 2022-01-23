import Icon from '@components/Header/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './menuItem.module.scss';

type MenuItemProps = {
  icon: IconProp;
  text: string;
};

const MenuItem = ({ icon, text }: MenuItemProps) => (
  <a href="/" className={styles.menuItem}>
    <Icon padding={0} icon={icon} />
    <div className={styles.text}>{text}</div>
  </a>
);

export default MenuItem;
