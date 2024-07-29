export interface Product {
    id: number;
    title: string;
    description: string;
  price: number;
  image: string;
    // Add other properties if needed
  }
export interface Props{
  params: {
    category: string;
  };
  searchParams: {
    sort?: string; // Optional query parameter for sorting
  };
  }