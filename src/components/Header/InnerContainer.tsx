import { CSSProperties, ReactElement } from 'react';
import container from './innerContainer.module.scss';

type InnerContainerProps = {
  children: ReactElement | ReactElement[];
  style?: CSSProperties;
  className?: string;
};

const InnerContainer = ({
  children,
  style = {},
  className = '',
}: InnerContainerProps) => (
  <div className={`${container.container} ${className}`} style={style}>
    {children}
  </div>
);

export default InnerContainer;
