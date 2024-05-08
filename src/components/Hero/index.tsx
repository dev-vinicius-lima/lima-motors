import Image from 'next/image'
import styles from './styles.module.scss'
import { ReactNode } from 'react'
type HeroProps = {
  heading: string
  buttonUrl: string
  buttonTitle: string
  bannerUrl: string
  icon: ReactNode
}
const Hero = ({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon,
}: HeroProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          src={bannerUrl}
          alt={heading}
          quality={100}
          fill
          className={styles.banner}
        />
      </div>
    </main>
  )
}

export default Hero
