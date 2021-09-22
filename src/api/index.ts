export class Api {
  static async getPageData(page: number) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://us-central1-umbrella-stage.cloudfunctions.net/dummy-clients?page=${page}`
    )
    return response.json()
  }
}
