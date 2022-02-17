import Icon from '@components/Header/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes } from 'react';
import styles from './menuItem.module.scss';

interface MenuItemProps extends HTMLAttributes<HTMLAnchorElement> {
  icon: IconProp;
  text: string;
}

const MenuItem = ({ icon, text, ...rest }: MenuItemProps) => (
  <a className={styles.menuItem} {...rest}>
    <Icon padding={0} icon={icon} />
    <div className={styles.text}>{text}</div>
  </a>
);

export default MenuItem;
