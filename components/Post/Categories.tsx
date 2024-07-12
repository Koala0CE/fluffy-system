import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}

const Categories: React.FC<CategoriesProps> = ({ categories, currentSlug }) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-black dark:text-white border-b-2 border-solid border-black dark:border-white py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((category) => (
        <Category
          key={category}
          link={`/categories/${category}`}
          name={category}
          active={currentSlug === slug(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
