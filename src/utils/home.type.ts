interface ServiceProps {
  image: {
    url: string
  }
  description: string
}

export type HomeProps = {
  object: {
    slug: string
    title: string
    metadata: {
      banner: {
        url: string
      }
      heading: string
      cta_button: {
        title: string
        url: string
      }
      about: {
        description: string
        banner: {
          url: string
        }
      }
      services: ServiceProps[]
      contact: {
        email: string
        phone: string
        adress: string
        time: string
      }
    }
  }
}
