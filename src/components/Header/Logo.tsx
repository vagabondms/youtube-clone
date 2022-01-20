import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <FontAwesomeIcon icon={faYoutube} size="2x" color="#ff0000" />
    <p>NewTube</p>
  </div>
);

export default Logo;
