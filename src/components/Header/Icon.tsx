import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import styles from './icon.module.scss';

interface IconProps extends FontAwesomeIconProps {
  padding?: number;
}

const Icon = ({ icon, padding = 8, ...rest }: IconProps) => (
  <div className={styles.icon} style={{ padding }}>
    <FontAwesomeIcon icon={icon} size="lg" {...rest} />
  </div>
);

export default Icon;
