const ProductsPage = ({ onNavigate }) => {
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const products = [
        {
            id: 1,
            name: "Розумна лампа Philips Hue",
            price: "1499 грн",
            image: "https://images.unsplash.com/photo-1565828680392-4c13d6c9c2e3?ixlib=rb-4.0.3",
            description: "Створіть особливу атмосферу у вашій оселі",
            category: "Освітлення"
        },
        {
            id: 2,
            name: "Термостат Nest",
            price: "4999 грн",
            image: "https://images.unsplash.com/photo-1567030849710-a40047038b19?ixlib=rb-4.0.3",
            description: "Розумне управління кліматом",
            category: "Клімат"
        },
        {
            id: 3,
            name: "Камера безпеки Ring",
            price: "3299 грн",
            image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3",
            description: "Безпека вашого дому 24/7",
            category: "Безпека"
        },
        {
            id: 4,
            name: "Розумний замок Yale",
            price: "5999 грн",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
            description: "Зручний доступ без ключів",
            category: "Безпека"
        },
        {
            id: 5,
            name: "Розумна розетка TP-Link",
            price: "699 грн",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
            description: "Контролюйте електроприлади віддалено",
            category: "Розетки"
        }
    ];

    const [filteredProducts, setFilteredProducts] = React.useState(products);
    const categories = ['all', ...new Set(products.map(product => product.category))];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    return (
        <div className="container">
            <header className="header">
                <nav className="nav">
                    <div className="logo">
                        <i className="fas fa-home"></i>
                        SmartHome Hub
                    </div>
                    <div className="navLinks">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Головна</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Продукти</a>
                        <button className="cartButton">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cartCount">0</span>
                        </button>
                    </div>
                </nav>
            </header>
            <main className="productsMain">
                <div className="categories">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`categoryButton ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category === 'all' ? 'Всі' : category}
                        </button>
                    ))}
                </div>
                <div className="productGrid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="productCard" onClick={() => onNavigate('product', product.id)}>
                            <div className="productImage" style={{backgroundImage: `url(${product.image})`}}>
                                <div className="productOverlay">
                                    <button className="quickView">
                                        <i className="fas fa-eye"></i>
                                    </button>
                                    <button className="addToCart" onClick={(e) => { e.stopPropagation(); }}>
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="productInfo">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="productFooter">
                                    <span className="price">{product.price}</span>
                                    <button className="buyButton" onClick={(e) => { e.stopPropagation(); }}>Купити</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};
