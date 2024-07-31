export interface Product {
    id: number;
    title: string;
    description: string;
  price: number;
  image: string;
  key: number;
    // Add other properties if needed
}

export interface Props{
  params: {
    category: string;
   
  };
  searchParams: {
    sort?: string;
    search: string;// Optional query parameter for sorting & searching
    
  };
  }