import Menu from '@components/Sidebar/Menu';
import { HTMLAttributes } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const Sidebar = ({ open, ...rest }: SidebarProps) => (
  <aside className={styles.sidebar} {...rest}>
    <Menu />
  </aside>
);

export default Sidebar;
