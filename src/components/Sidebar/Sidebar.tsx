import Icon from '@components/Header/Icon';

import Logo from '@components/Header/Logo';
import Menu from '@components/Sidebar/Menu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HTMLAttributes } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  onClose(): void;
  isOpened: boolean;
}

const Sidebar = ({ onClose, isOpened, ...rest }: SidebarProps) => (
  <>
    <aside className={styles.sidebar} {...rest}>
      {isOpened && (
        <div className={styles.header}>
          <button className={styles.button} onClick={onClose} type="button">
            <Icon icon={faBars} />
          </button>
          <Logo />
        </div>
      )}
      <Menu />
    </aside>
    <div
      className={styles.background}
      style={isOpened ? { visibility: 'visible', zIndex: 1 } : {}}
    />
  </>
);

export default Sidebar;
