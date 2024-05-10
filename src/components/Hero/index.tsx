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
  console.log(bannerUrl)
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
          priority
          fill
          sizes="(max-width:700px) 100vw, (max-height:1024px) 60vw, 75vh"
          className={styles.banner}
        />
      </div>
    </main>
  )
}

export default Hero
