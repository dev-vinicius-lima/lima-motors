import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type'
import styles from './styles.module.scss'
import Hero from '@/components/Hero'
import { Phone } from 'lucide-react'
import Container from '@/components/Container'
import Image from 'next/image'
import { Metadata } from 'next'

export const genererateMetaData = async ({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  try {
    const { objects }: PostProps = await getItemBySlug(slug)
    return {
      title: `LimaMotors - ${objects[0].title}`,
      description: objects[0].metadata.description.text,
      openGraph: {
        images: [`${objects[0].metadata.banner.url}`],
        siteName: 'LimaMotors',
        title: 'LimaMotors - sua oficina especializada!',
        description: 'Oficina de carros em Manaus-AM',
        url: `${process.env.NEXT_PUBLIC_URL}`,
        type: 'website',
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    }
  } catch (error) {
    return {
      title: 'LimaMotors - sua oficina especializada!',
      description: 'Oficina de carros em Manaus-AM',
    }
  }
}

const PageService = async ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  const { objects }: PostProps = await getItemBySlug(slug)

  return (
    <>
      <Hero
        heading={objects[0].title}
        bannerUrl={objects[0].metadata.banner.url}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>
            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              src={objects[0].metadata.banner.url}
              alt={objects[0].title}
              quality={100}
              priority
              fill
              sizes="(max-width:700px) 100vw, (max-height:1024px) 60vw, 75vh"
              className={styles.imageAbout}
            />
          </div>
        </section>
      </Container>
    </>
  )
}

export default PageService
