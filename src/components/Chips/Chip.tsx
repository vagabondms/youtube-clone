import { forwardRef, HTMLProps } from 'react';
import styles from './Chip.module.scss';

interface ChipProps extends HTMLProps<HTMLDivElement> {
  text: string;
}

const Chip = forwardRef(({ text, ...rest }: ChipProps, ref: any) => (
  <div ref={ref} className={styles.chip} {...rest}>
    {text}
  </div>
));

Chip.displayName = 'Chip';

export default Chip;
