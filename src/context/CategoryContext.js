import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIndexByKeyValue } from "../help/arrayHelp";

const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
  const navigate = useNavigate();
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(null);
  const categories = [
    {
      id: "category-01",
      name: "News",
      color: "#299EC3",
      filePath: "data/category/newsArticles.json",
    },
    {
      id: "category-02",
      name: "Business",
      color: "#EE6151",
      filePath: "data/category/businessArticle.json",
    },
    {
      id: "category-03",
      name: "Sport",
      color: "#84C14F",
      filePath: "data/category/sportArticle.json",
    },
    {
      id: "category-04",
      name: "Life",
      color: "#5DCFF3",
      filePath: "data/category/lifeArticle.json",
    },
    {
      id: "category-05",
      name: "Tech",
      color: "#FCC44D",
      filePath: "data/category/techArticle.json",
    },
    {
      id: "category-06",
      name: "Travel",
      color: "#A99765",
      filePath: "data/category/travelArticle.json",
    },
  ];

  const setActivePageIndexByCategortyId = (categoryId) => {
    const categoryIndex = getIndexByKeyValue(categories, "id", categoryId);
    setCategoryActiveIndex(categoryIndex);
  };

  const openArticle = (article) => {
    navigate("/Single", { state: { article: article } });
    window.scrollTo(0, 0);
  };

  const resetCategoryIndex = () => {
    setCategoryActiveIndex(null);
    navigate("/");
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryActiveIndex,
        setCategoryActiveIndex,
        categories,
        resetCategoryIndex,
        setActivePageIndexByCategortyId,
        openArticle,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
