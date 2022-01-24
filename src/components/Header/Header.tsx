import {
  faBars,
  faBell,
  faTh,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Icon from './Icon';
import styles from './Header.module.scss';
import InnerContainer from './InnerContainer';
import Logo from './Logo';
import Search from './Search';

const Header = () => (
  <header className={styles.header}>
    <InnerContainer>
      <button className={styles.button} type="button">
        <Icon icon={faBars} />
      </button>
      <Logo />
    </InnerContainer>
    <InnerContainer className={styles.middle}>
      <Search />
    </InnerContainer>
    <InnerContainer className={styles.end}>
      <button className={styles.button} type="button">
        <Icon icon={faVideo} />
      </button>
      <button className={styles.button} type="button">
        <Icon icon={faTh} />
      </button>
      <button className={styles.button} type="button">
        <Icon icon={faBell} />
      </button>
      <button className={styles.button} type="button">
        <Icon icon={faGithub} size="2x" />
      </button>
    </InnerContainer>
  </header>
);

export default Header;
