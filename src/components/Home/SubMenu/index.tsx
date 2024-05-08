'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const SubMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // garantindo que feche o menu mobile
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenuMobile = () => {
    setIsOpen(!isOpen)
  }
  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenuMobile}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
        {isOpen && (
          <button onClick={toggleMenuMobile} className={styles.closebutton}>
            <X size={54} color="#121212" />
          </button>
        )}
        <li>
          <Link href={'/post/pagina1'}>Pagina 1</Link>
        </li>
        <li>
          <Link href={'/post/pagina2'}>Pagina 2</Link>
        </li>
      </ul>
    </section>
  )
}

export default SubMenu
