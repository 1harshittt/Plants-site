import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { MdCategory } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/features/cart/cartSlice';
import { addToWishlist, selectWishlistItems } from '../../Redux/features/wishlist/wishlistSlice';
import toast from 'react-hot-toast';
import './Shop.scss';

// Import product images
import product1 from '../../Assets/Images/sec1img1.jpg';
import product2 from '../../Assets/Images/sec1img2.jpg';
import product3 from '../../Assets/Images/sec2-img1.jpg';
import product4 from '../../Assets/Images/sec2-img2.jpg';
import product5 from '../../Assets/Images/sec2-img3.jpg';
import product6 from '../../Assets/Images/sec3-img1.jpg';

const products = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    price: 129.99,
    category: "Vases",
    image: product1,
    description: "Elegant handcrafted vase with traditional patterns and a timeless design. Perfect for both fresh and dried flower arrangements.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Artisan Tea Set",
    price: 189.99,
    category: "Tea Sets",
    image: product2,
    description: "Complete tea set with 6 cups and teapot. Hand-painted with delicate floral motifs and gold trim.",
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: "Decorative Wall Plate",
    price: 79.99,
    category: "Wall Art",
    image: product3,
    description: "Hand-painted decorative plate for wall mounting. Features intricate Mediterranean-inspired patterns.",
    rating: 4.7,
    inStock: false
  },
  {
    id: 4,
    name: "Modern Ceramic Bowl Set",
    price: 149.99,
    category: "Dining",
    image: product4,
    description: "Set of 4 modern ceramic bowls with a minimalist design. Perfect for soups, salads, and everyday use.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Minimalist Flower Pot",
    price: 69.99,
    category: "Planters",
    image: product5,
    description: "Contemporary design planter for indoor plants. Features a sleek matte finish and drainage system.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 6,
    name: "Traditional Cookie Jar",
    price: 89.99,
    category: "Kitchen",
    image: product6,
    description: "Handmade ceramic cookie jar with lid. Decorated with classic patterns and a vintage-inspired design.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 7,
    name: "Ceramic Serving Platter",
    price: 159.99,
    category: "Dining",
    image: product1,
    description: "Large serving platter with raised edges and hand-painted Mediterranean motifs. Perfect for entertaining.",
    rating: 4.9,
    inStock: true
  },
  {
    id: 8,
    name: "Japanese Tea Cups Set",
    price: 99.99,
    category: "Tea Sets",
    image: product2,
    description: "Set of 4 authentic Japanese tea cups with textured exterior. Made using traditional techniques.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 9,
    name: "Decorative Ceramic Tiles",
    price: 199.99,
    category: "Wall Art",
    image: product3,
    description: "Set of 4 decorative ceramic tiles with Moroccan patterns. Perfect for creating a stunning wall feature.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 10,
    name: "Modern Sake Set",
    price: 129.99,
    category: "Tea Sets",
    image: product4,
    description: "Contemporary sake set including server and 4 cups. Features a unique geometric design.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 11,
    name: "Hanging Plant Holder",
    price: 49.99,
    category: "Planters",
    image: product5,
    description: "Macrame-inspired ceramic hanging planter. Perfect for displaying trailing plants.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 12,
    name: "Spice Jar Collection",
    price: 119.99,
    category: "Kitchen",
    image: product6,
    description: "Set of 6 ceramic spice jars with airtight bamboo lids. Includes custom labels.",
    rating: 4.9,
    inStock: true
  },
  {
    id: 13,
    name: "Abstract Ceramic Sculpture",
    price: 299.99,
    category: "Wall Art",
    image: product1,
    description: "Modern abstract sculpture perfect for home or office. Each piece is uniquely handcrafted.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 14,
    name: "Ceramic Wind Chimes",
    price: 79.99,
    category: "Garden",
    image: product2,
    description: "Hand-painted ceramic wind chimes with a melodic tone. Weather-resistant finish.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 15,
    name: "Rustic Dinner Set",
    price: 249.99,
    category: "Dining",
    image: product3,
    description: "Complete 12-piece dinner set with rustic finish. Includes plates, bowls, and side dishes.",
    rating: 4.9,
    inStock: true
  },
  {
    id: 16,
    name: "Ceramic Oil Diffuser",
    price: 89.99,
    category: "Home Decor",
    image: product4,
    description: "Electric ceramic oil diffuser with color-changing LED. Features intricate cutout design.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 17,
    name: "Designer Soap Dish",
    price: 39.99,
    category: "Bathroom",
    image: product5,
    description: "Modern ceramic soap dish with drainage. Available in matching bathroom accessories.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 18,
    name: "Ceramic Clock",
    price: 159.99,
    category: "Home Decor",
    image: product6,
    description: "Handcrafted ceramic wall clock with unique textured face. Silent movement mechanism.",
    rating: 4.8,
    inStock: true
  }
];

const categories = [
  "All",
  "Vases",
  "Tea Sets",
  "Wall Art",
  "Dining",
  "Planters",
  "Kitchen",
  "Garden",
  "Home Decor",
  "Bathroom"
];

const Shop = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [showFilters, setShowFilters] = useState(false);
  const [addingToCart, setAddingToCart] = useState({});

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, priceRange]);

  const handleAddToCart = (product) => {
    setAddingToCart(prev => ({ ...prev, [product.id]: true }));
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
    toast.success(`${product.name} added to cart`);
    setTimeout(() => {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  const handleAddToWishlist = (product) => {
    if (isInWishlist(product.id)) {
      toast.error(`${product.name} is already in wishlist`);
      return;
    }
    dispatch(addToWishlist(product));
    toast.success(`${product.name} added to wishlist`);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="shop-container">
      {/* Hero Section */}
      <section className="shop-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Collection</h1>
          <p>Discover our handcrafted ceramic pieces</p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button 
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FiFilter /> Filters
        </button>
      </section>

      {/* Filter Panel */}
      <motion.div 
        className={`filter-panel ${showFilters ? 'show' : ''}`}
        initial={false}
        animate={showFilters ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      >
        <div className="filter-content">
          <div className="category-filter">
            <h3><MdCategory /> Categories</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                placeholder="Min"
              />
              <span>to</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.section 
        className="products-grid"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="product-card"
            variants={fadeInUp}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-actions">
                <button 
                  className={`add-to-cart ${addingToCart[product.id] ? 'adding' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addingToCart[product.id]}
                >
                  <FiShoppingCart />
                  {addingToCart[product.id] ? 'Adding...' : 'Add to Cart'}
                </button>
                <button 
                  className={`add-to-wishlist ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                  onClick={() => handleAddToWishlist(product)}
                >
                  <FiHeart />
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="price-rating">
                <span className="price">${product.price.toFixed(2)}</span>
                <span className="rating">★ {product.rating}</span>
              </div>
              <div className="stock-status">
                <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Shop; 