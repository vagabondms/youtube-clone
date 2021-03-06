import Icon from '@components/Header/Icon';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';
import Chip from './Chip';

import styles from './Chips.module.scss';

const transformUnit = 320;
const transformMargin = 0;

const Tags = () => {
  const [transform, setTransform] = useState<number>(0);
  const [isLastExposed, setIsLastExposed] = useState<boolean>(false);
  const [isFirstExposed, setIsFirstExposed] = useState<boolean>(false);

  const last = useRef(false);

  const view = useRef<null | HTMLDivElement>(null);
  const container = useRef<null | HTMLDivElement>(null);

  const onLeftClick = () => {
    const leftDiff =
      (view.current as HTMLDivElement).getBoundingClientRect().left -
      (container.current as HTMLDivElement).getBoundingClientRect().left;

    setTransform(
      (prev) =>
        prev +
        (leftDiff < transformUnit ? leftDiff + transformMargin : transformUnit),
    );
  };

  const onRightClick = () => {
    const rightDiff =
      (container.current as HTMLDivElement).getBoundingClientRect().right -
      (view.current as HTMLDivElement).getBoundingClientRect().right;

    setTransform(
      (prev) =>
        prev -
        (rightDiff < transformUnit
          ? rightDiff + transformMargin
          : transformUnit),
    );
  };

  useEffect(() => {
    /* eslint-disable-next-line */
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        switch (entry.target.id) {
          case 'lastChip':
            setIsLastExposed(entry.isIntersecting);
            last.current = entry.isIntersecting;
            break;
          case 'firstChip':
            setIsFirstExposed(entry.isIntersecting);
            break;
          default:
            break;
        }
      });
    };
    const options = {
      root: view.current,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);

    const { children } = container.current as HTMLDivElement;
    observer.observe(children[0]);
    observer.observe(children[children.length - 1]);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      if (isLastExposed && !isFirstExposed) {
        const nextTransform =
          (view.current as HTMLDivElement).getBoundingClientRect().right -
          (container.current as HTMLDivElement).getBoundingClientRect().right -
          transformMargin;

        setTransform((prev) => {
          if (prev + nextTransform < 0) {
            return prev + nextTransform;
          }
          return 0;
        });
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [isLastExposed, isFirstExposed]);

  return (
    <nav className={styles.chips}>
      <div className={styles.chipsView} ref={view}>
        <div
          style={{ display: isFirstExposed ? 'none' : 'flex' }}
          className={styles.left}
        >
          <button onClick={onLeftClick} type="button" className={styles.icon}>
            <Icon className={styles.icon} icon={faChevronLeft} />
          </button>
        </div>
        <div
          ref={container}
          className={styles.chipsContainer}
          style={{ transform: `translateX(${transform}px)` }}
        >
          <Chip text="??????" id="firstChip" />
          <Chip text="?????????" />
          <Chip text="??????" />
          <Chip text="??????" />
          <Chip text="???????????????" />
          <Chip text="??????" />
          <Chip text="????????????" />
          <Chip text="??????" />
          <Chip text="?????? ????????????" />
          <Chip text="?????? ??????" />
          <Chip text="????????????" />
          {/* <Chip text="?????? ???????????? ??????" />
          <Chip text="??????" />
          <Chip text="?????? ??????" />
          <Chip text="?????? ???????????? ?????????" /> */}
          <Chip text="????????? ?????????" />
          <Chip text="????????? ?????? ?????????" id="lastChip" />
        </div>
        <div
          style={{ display: isLastExposed ? 'none' : 'flex' }}
          className={styles.right}
        >
          <button onClick={onRightClick} type="button" className={styles.icon}>
            <Icon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Tags;
