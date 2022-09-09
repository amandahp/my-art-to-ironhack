import axios from "axios"

export const getArt = async () => {
  const requestUrl = 'https://api.artic.edu/api/v1/artworks/search?limit=100&fields=image_id,title,description'
  const { data } = await axios.get(requestUrl)
  return data.data
}