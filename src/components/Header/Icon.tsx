import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import styles from './icon.module.scss';

const Icon = ({ icon, ...rest }: FontAwesomeIconProps) => (
  <div className={styles.icon}>
    <FontAwesomeIcon icon={icon} size="lg" {...rest} />
  </div>
);

export default Icon;
