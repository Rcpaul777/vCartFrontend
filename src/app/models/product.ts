export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  

    
    constructor(id, name, description = '', price = 0, imageUrl = "https://cdn.mos.cms.futurecdn.net/C2aBJXBcwHB5vK3A77kPrA.jpg") {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
}
