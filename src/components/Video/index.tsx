import { RefObject } from 'react';
import styles from './Video.module.scss';

interface VideoProps {
  src: string;
  videoRef: RefObject<HTMLVideoElement>;
}

export function Video({ src, videoRef }: VideoProps) {
  return <video className={styles.video} src={src} autoPlay muted ref={videoRef}></video>;
}
