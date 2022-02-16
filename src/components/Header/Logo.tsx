import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './logo.module.scss';

const Logo = () => (
  <Link className={styles.logo} to="/">
    <FontAwesomeIcon icon={faYoutube} size="2x" color="#ff0000" />
    <p>NewTube</p>
  </Link>
);

export default Logo;
