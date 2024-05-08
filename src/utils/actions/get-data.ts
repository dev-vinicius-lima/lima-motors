export const getDataHome = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/663bd4ea9d4852270e6b71a3?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
