import { HomeProps } from '@/utils/home.type'
import styles from './styles.module.scss'
import Image from 'next/image'

const Services = ({ object }: HomeProps) => {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="imagem ilustrativa sobre a empresa"
            quality={100}
            priority
            fill
            sizes="(max-width:700px) 100vw, (max-height:1024px) 60vw, 75vh"
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="imagem ilustrativa do serviço"
                quality={100}
                priority
                fill
                sizes="(max-width:700px) 100vw, (max-height:1024px) 60vw, 75vh"
                src={service.image.url}
              />
            </div>

            <p className={styles.descriptionService}>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Services
