import Spacer from '@components/Sidebar/Spacer';
import Menu from '@components/Sidebar/Menu';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Spacer height={56} />
    <Menu />
  </aside>
);

export default Sidebar;
