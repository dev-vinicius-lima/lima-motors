import Hero from '@/components/Hero'
import SubMenu from '@/components/Home/SubMenu'
import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/home.type'
import { Phone } from 'lucide-react'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  return (
    <main>
      <SubMenu />
      <Hero
        heading={object.metadata.heading}
        bannerUrl={object.metadata.banner.url}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#FFF" />}
      />
    </main>
  )
}
