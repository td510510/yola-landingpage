import { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import toggleScroll from '@/utils/toggleScroll'
import PlayIcon from '../../public/svg/play.svg'
import styles from './Features.module.scss'

const Features = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useOnClickOutside(videoRef, () => setIsPlayingVideo(false))

  const playVideo = () => {
    setIsPlayingVideo(true)
    if (videoRef && videoRef.current) {
      videoRef.current.play()
    }
  }

  useEffect(() => {
    toggleScroll(isPlayingVideo)
  }, [isPlayingVideo])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.video}>
          <video src="/videos/yoga.mp4" />
          <div className={styles.playIcon} onClick={playVideo}>
            <PlayIcon />
          </div>
        </div>
        <div className={styles.contents}>
          <h2>The Better Way to Start Yoga</h2>
          <div className={styles.description}>
            <p>Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.</p>
            <Button classStyles={styles.button} text='Get Started' />
          </div>
        </div>
      </div>
      <div className={`${styles.videoPlay} ${!isPlayingVideo ? styles.hide : ''}`}>
        <video src="/videos/yoga2.mp4" ref={videoRef} loop />
      </div>
    </div>
  )
}

export default Features