import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Footer from '@/components/Home/Footer'
import Services from '@/components/Home/Services'
import SubMenu from '@/components/Home/SubMenu'
import { getDataHome, getSubMenu } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/home.type'
import { SubMenuProps } from '@/utils/subMenu.type'
import { Phone } from 'lucide-react'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const menu: SubMenuProps = await getSubMenu()
  return (
    <main>
      <SubMenu menu={menu} />
      <Hero
        heading={object.metadata.heading}
        bannerUrl={object.metadata.banner.url}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  )
}
