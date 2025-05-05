const ProductDetailsPage = ({ onNavigate, productId }) => {
    const products = [
        {
            id: 1,
            name: "Розумна лампа Philips Hue",
            price: "1499 грн",
            image: "https://images.unsplash.com/photo-1565828680392-4c13d6c9c2e3?ixlib=rb-4.0.3",
            description: "Створіть особливу атмосферу у вашій оселі",
            category: "Освітлення",
            detailedDescription: "Розумна LED лампа Philips Hue дозволяє створити ідеальну атмосферу у вашому домі. Змінюйте колір та яскравість світла, встановлюйте розклад роботи та керуйте освітленням через смартфон.",
            features: [
                "16 мільйонів кольорів",
                "Голосове керування",
                "Інтеграція з Apple HomeKit, Google Home та Amazon Alexa",
                "Термін служби до 25 000 годин",
                "Енергоефективність класу A+"
            ],
            specifications: {
                "Потужність": "9 Вт",
                "Світловий потік": "800 лм",
                "Цоколь": "E27",
                "Бездротовий протокол": "Zigbee",
                "Гарантія": "2 роки"
            }
        },
        {
            id: 2,
            name: "Термостат Nest",
            price: "4999 грн",
            image: "https://images.unsplash.com/photo-1567030849710-a40047038b19?ixlib=rb-4.0.3",
            description: "Розумне управління кліматом",
            category: "Клімат",
            detailedDescription: "Розумний термостат Nest вчиться у вас і автоматично налаштовує температуру для максимального комфорту та економії енергії. Елегантний дизайн та інтуїтивний інтерфейс роблять керування кліматом простим та приємним.",
            features: [
                "Автоматичне програмування",
                "Дистанційне керування через додаток",
                "Економія енергії до 30%",
                "Сумісність з більшістю систем опалення",
                "Датчик присутності"
            ],
            specifications: {
                "Живлення": "24В",
                "Wi-Fi": "802.11 b/g/n",
                "Дисплей": "2.08\" LCD",
                "Датчики": "Температура, Вологість, Присутність",
                "Гарантія": "2 роки"
            }
        },
        {
            id: 3,
            name: "Камера безпеки Ring",
            price: "3299 грн",
            image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3",
            description: "Безпека вашого дому 24/7",
            category: "Безпека",
            detailedDescription: "Камера безпеки Ring забезпечує цілодобовий захист вашого дому. HD-відео, нічне бачення та двосторонній аудіозв'язок дозволяють завжди бути в курсі того, що відбувається навколо вашого будинку.",
            features: [
                "1080p HD-відео",
                "Нічне бачення",
                "Двосторонній аудіозв'язок",
                "Сповіщення про рух",
                "Водонепроникний корпус"
            ],
            specifications: {
                "Роздільна здатність": "1920x1080",
                "Кут огляду": "140°",
                "Живлення": "Від мережі/акумулятор",
                "Зберігання даних": "Cloud",
                "Гарантія": "1 рік"
            }
        },
        {
            id: 4,
            name: "Розумний замок Yale",
            price: "5999 грн",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
            description: "Зручний доступ без ключів",
            category: "Безпека",
            detailedDescription: "Розумний замок Yale забезпечує безпечний та зручний доступ до вашого дому без використання ключів. Відкривайте двері за допомогою PIN-коду, відбитка пальця або смартфона.",
            features: [
                "Відкриття за допомогою PIN-коду",
                "Сканер відбитків пальців",
                "Керування через додаток",
                "Журнал доступу",
                "Тривожна сигналізація"
            ],
            specifications: {
                "Живлення": "4 батарейки AA",
                "Термін роботи": "до 12 місяців",
                "Підключення": "Bluetooth/Wi-Fi",
                "Матеріал": "Цинковий сплав",
                "Гарантія": "2 роки"
            }
        },
        {
            id: 5,
            name: "Розумна розетка TP-Link",
            price: "699 грн",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3",
            description: "Контролюйте електроприлади віддалено",
            category: "Розетки",
            detailedDescription: "Розумна розетка TP-Link дозволяє керувати електроприладами віддалено через смартфон. Встановлюйте розклад роботи, відстежуйте споживання енергії та економте на рахунках за електроенергію.",
            features: [
                "Віддалене керування",
                "Розклад роботи",
                "Моніторинг енергоспоживання",
                "Режим відсутності",
                "Голосове керування"
            ],
            specifications: {
                "Максимальне навантаження": "3680Вт",
                "Wi-Fi": "2.4 ГГц",
                "Струм": "16A",
                "Захист": "від перенапруги",
                "Гарантія": "2 роки"
            }
        }
    ];

    const product = products.find(p => p.id === parseInt(productId));
    const recommendedProducts = products
        .filter(p => p.id !== parseInt(productId) && p.category === product.category)
        .slice(0, 3);

    if (!product) {
        return <div>Товар не знайдено</div>;
    }

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

            <main className="productDetailsMain">
                <div className="productDetailsHero">
                    <div className="productImageGallery">
                        <div className="mainImage" style={{backgroundImage: `url(${product.image})`}}></div>
                    </div>
                    <div className="productInfo">
                        <div className="breadcrumbs">
                            <span onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>Головна</span>
                            <i className="fas fa-chevron-right"></i>
                            <span onClick={() => onNavigate('products')} style={{cursor: 'pointer'}}>Продукти</span>
                            <i className="fas fa-chevron-right"></i>
                            <span>{product.name}</span>
                        </div>
                        <h1>{product.name}</h1>
                        <div className="category">{product.category}</div>
                        <p className="description">{product.detailedDescription}</p>
                        <div className="price">{product.price}</div>
                        <div className="actions">
                            <button className="buyButton">
                                <i className="fas fa-shopping-cart"></i>
                                Додати в кошик
                            </button>
                            <button className="wishlistButton">
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="productDetails">
                    <div className="features">
                        <h2>Особливості</h2>
                        <ul>
                            {product.features.map((feature, index) => (
                                <li key={index}>
                                    <i className="fas fa-check"></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="specifications">
                        <h2>Характеристики</h2>
                        <table>
                            <tbody>
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="recommendedProducts">
                    <h2>Рекомендуємо для вас</h2>
                    <div className="productGrid">
                        {recommendedProducts.map(product => (
                            <div key={product.id} className="productCard" onClick={() => onNavigate('product', product.id)}>
                                <div className="productImage" style={{backgroundImage: `url(${product.image})`}}>
                                    <div className="productOverlay">
                                        <button className="quickView">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="productInfo">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="productFooter">
                                        <span className="price">{product.price}</span>
                                        <button className="buyButton" onClick={(e) => { e.stopPropagation(); }}>
                                            Купити
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
