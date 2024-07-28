// pages/categories/[category].js
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Loading...'}</h1>
      {/* Add content based on the category */}
    </div>
  );
};

export default CategoryPage;
