//frontend/src/app/article.model.ts
export interface Article {
    store: string;
    category: string;
    classe: string;
    subclasse: string;
    code: string;
    image: string;
    name: string;
    brand: string;
    rating: number;
    reviews: number;
    summary: string;
    info: string;//550gr, 12ml, blanc
    price: number;
    availability: boolean;
    description: string;
    features: string;
    usage: string;
    createdAte: Date; 
    updatedAte: Date; 
  }
  