import React, { useState } from "react";
import "./CategoryMenu.css";

const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Plastic Furniture");
  const categories = [
    {
      name: "Foam",
      imageURL:
        "https://cdn.shopify.com/s/files/1/0501/4667/2807/collections/cat-03-1_330x330@2x.png?v=1608054049",
    },
    {
      name: "Plastic Furniture",
      imageURL: "https://fataplastic.com/wp-content/uploads/2021/06/FC-621.jpg",
    },
    {
      name: "Electronics",
      imageURL: "https://images.herzindagi.info/image/2020/Apr/Electronics.jpg",
    },
  ];
  return (
    <div className="Category">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`CategoryFlex ${
            selectedCategory === category.name && "Category-active"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <h3 className="CategoryName">{category.name}</h3>
          <img
            src={category.imageURL}
            alt={category.name}
            height={60}
            width={60}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
