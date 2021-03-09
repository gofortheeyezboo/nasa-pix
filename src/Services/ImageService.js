import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class ImageService {
  async getImage(query) {
    const res = await nasaApi.get('apod?api_key=f6QgfrgvtGqa4SP9MDuAkcEbYsj8KAsbPmMkPuc6&date=' + query)
    console.log(res)
    AppState.image = res.data.url
  }
}

export const imageService = new ImageService()
