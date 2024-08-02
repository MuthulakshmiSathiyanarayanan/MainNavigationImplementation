export interface Product {
  length: number;
    id: number;
    title: string;
    description: string;
  price: number;
  image: string;
  key: number;
    // Add other properties if needed
}
export interface ProductDetailsProps {
  map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode;
  products: Product[]; // Expecting a single Product object
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