import Icon from '@components/Header/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './Menuitem.module.scss';

type MenuItemProps = {
  text: string;
  icon: IconProp;
};

const MenuItem = ({ icon, text }: MenuItemProps) => (
  <div className={styles.menuItem}>
    <Icon icon={icon} />
    <div className={styles.text}>{text}</div>
  </div>
);

export default MenuItem;
