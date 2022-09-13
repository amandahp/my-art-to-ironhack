import axios from "axios"

export const searchArt = async (term) => {
  const requestUrl = `https://api.artic.edu/api/v1/artworks/search?q=${term}&fields=image_id,title,description`
  const { data } = await axios.get(requestUrl)
  return data.data
}