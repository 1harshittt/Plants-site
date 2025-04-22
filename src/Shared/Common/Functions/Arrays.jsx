import plant1 from "../../../Assets/Images/plant1.webp";
import plant2 from "../../../Assets/Images/plant2.avif";
import plant3 from "../../../Assets/Images/plant3.webp";
import plant4 from "../../../Assets/Images/plant4.webp";
import plant5 from "../../../Assets/Images/plant5.webp";
import plant6 from "../../../Assets/Images/plant6.webp";
import plant7 from "../../../Assets/Images/plant7.webp";
import plant8 from "../../../Assets/Images/plant3.webp";
import heroimg2 from "../../../Assets/Images/heroimg-2.avif";
import plant9 from "../../../Assets/Images/plant2.avif";
import plant10 from "../../../Assets/Images/plant1.webp";
import plant11 from "../../../Assets/Images/plant4.webp";
import plant12 from "../../../Assets/Images/plant5.webp";
import plant13 from "../../../Assets/Images/plant6.webp";
import plant14 from "../../../Assets/Images/plant7.webp";
import plant15 from "../../../Assets/Images/plant8.webp";
import plant16 from "../../../Assets/Images/plant9.webp";
import plant17 from "../../../Assets/Images/plant10.avif";
import plant18 from "../../../Assets/Images/plant 11.webp";
import plant19 from "../../../Assets/Images/plant12.webp";

export const plants = [
  { id: 1, image: plant1, name: "ZZ plant supernova", price: "Rs. 299.00" },
  { id: 2, image: plant2, name: "Lavender", price: "Rs. 399.00" },
  { id: 3, image: plant3, name: "Snake Plant", price: "Rs. 499.00" },
  { id: 4, image: plant4, name: "Peace Lily", price: "Rs. 599.00" },
  { id: 5, image: plant5, name: "Aloe Vera", price: "Rs. 699.00" },
  { id: 6, image: plant6, name: "Spider Plant", price: "Rs. 799.00" },
  { id: 7, image: plant7, name: "Money Plant", price: "Rs. 899.00" },
  { id: 8, image: plant8, name: "Money Plant NOT", price: "Rs. 999.00" },
];

export const plantproducts = [
  { 
    id: 1, 
    image: plant9, 
    name: "Bird's nest fern", 
    price: "Rs. 999",
    category: "For Beginners"
  },
  { 
    id: 2, 
    image: plant10, 
    name: "Large calathea wavestar", 
    price: "Rs. 1999",
    category: "Pet Friendly Plants"
  },
  { 
    id: 3, 
    image: plant11, 
    name: "Staghorn fern", 
    price: "Rs. 2999",
    category: "Air Purifying Plants"
  },
  { 
    id: 4, 
    image: plant12, 
    name: "Large zz plant", 
    price: "Rs. 3999",
    category: "For Beginners"
  },
  { 
    id: 5, 
    image: plant13, 
    name: "Large peace lily", 
    price: "Rs. 4999",
    category: "Air Purifying Plants"
  },
  { 
    id: 6, 
    image: plant14, 
    name: "Ficus tineke", 
    price: "Rs. 5999",
    category: "Decor Plants"
  },
  {
    id: 7,
    image: plant14,
    name: "Large monstera deliciosa",
    price: "Rs. 6999",
    category: "Decor Plants"
  },
  { 
    id: 8, 
    image: plant15, 
    name: "Snake plant laurentii", 
    price: "Rs. 2999",
    category: "Air Purifying Plants"
  },
  { 
    id: 9, 
    image: plant16, 
    name: "Monstera deliciosa", 
    price: "Rs. 4999",
    category: "Pet Friendly Plants"
  },
  { 
    id: 10, 
    image: plant17, 
    name: "Large windmill palm", 
    price: "Rs. 1999",
    category: "Decor Plants"
  },
  { 
    id: 11, 
    image: plant18, 
    name: "Kalanchoe flapjack", 
    price: "Rs. 4999",
    category: "Flowering Plants"
  },
  { 
    id: 12, 
    image: plant19, 
    name: "Fiddle leaf fig", 
    price: "Rs. 6999",
    category: "Blooming Plants"
  },
];

export const product = [
  {
    id: 9,
    image: heroimg2,
    name: "Bird's nest fern",
    price: "Rs. 3,900.00 - 9999.00",
  },
];

export const allItems = [...plants, ...product, ...plantproducts]; // Combine all arrays into one
