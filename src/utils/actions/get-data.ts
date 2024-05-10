import { redirect } from 'next/navigation'
export const getDataHome = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/663bd4ea9d4852270e6b71a3?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } },
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export const getSubMenu = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&props=slug,title`,
      { next: { revalidate: 120 } },
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    throw new Error('Failed to fetch sub menu data')
  }
}

export const getItemBySlug = async (ItemSlug: string) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`
  // definindo objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: ItemSlug,
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string,
  })

  const url = `${baseUrl}?${queryParams.toString()}`

  try {
    const response = await fetch(url, { next: { revalidate: 120 } })
    if (!response.ok) {
      throw new Error('Failed to fetch item by slug')
    }
    return response.json()
  } catch (error) {
    redirect('/')
  }
}
