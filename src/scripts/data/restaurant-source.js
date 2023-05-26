import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async listRestaurant () {
    try {
      const response = await fetch(API_ENDPOINT.LIST)
      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static async reviewRestaurant () {
    const response = await fetch(API_ENDPOINT.REVIEW)
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const result = await response.json()
    return result.restaurant
  }
}

export default RestaurantSource
