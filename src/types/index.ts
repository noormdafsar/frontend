export interface Course {
    _id: string;
    name: string;
    authorName: string;
    rating: number;
    ratingCount: number;
    price: number;
    image: string;
    isBestSeller: boolean;
    shortDescription: string;
  }
  
  export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export interface ApiResponse {
    total: number;
    page: number;
    limit: number;
    courses: Course[];
  }
  