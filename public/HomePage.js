const HomePage = ({ onNavigate }) => {
  const products = [
    {
      id: 1,
      name: "Розумна лампа Philips Hue",
      price: "1499 грн",
      image: "https://images.unsplash.com/photo-1565828680392-4c13d6c9c2e3?ixlib=rb-4.0.3",
      description: "Створіть особливу атмосферу у вашій оселі"
    },
    {
      id: 2,
      name: "Термостат Nest",
      price: "4999 грн",
      image: "https://images.unsplash.com/photo-1567030849710-a40047038b19?ixlib=rb-4.0.3",
      description: "Розумне управління кліматом"
    },
    {
      id: 3,
      name: "Камера безпеки Ring",
      price: "3299 грн",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3",
      description: "Безпека вашого дому 24/7"
    }
  ];

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
            <a href="#categories">Категорії</a>
            <a href="#about">Про нас</a>
            <a href="#contact">Контакти</a>
            <button className="cartButton">
              <i className="fas fa-shopping-cart"></i>
              <span className="cartCount">0</span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <div className="heroOverlay"></div>
            <h1>Розумний дім - Затишне життя</h1>
            <p>Створіть особливу атмосферу у вашій оселі з нашими інноваційними гаджетами</p>
            <button className="ctaButton" onClick={() => onNavigate('products')}>
              <i className="fas fa-shopping-bag"></i>
              Переглянути каталог
            </button>
          </div>
        </section>

        <section className="features">
          <div className="sectionHeader">
            <h2>Популярні категорії</h2>
            <p>Оберіть категорію, яка вас цікавить</p>
          </div>
          <div className="featureGrid">
            <div className="featureCard">
              <div className="cardIcon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Розумне освітлення</h3>
              <p>Створіть ідеальну атмосферу в кожній кімнаті</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="cardLink">Дізнатись більше →</a>
            </div>
            <div className="featureCard">
              <div className="cardIcon">
                <i className="fas fa-temperature-high"></i>
              </div>
              <h3>Клімат-контроль</h3>
              <p>Підтримуйте комфортну температуру автоматично</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="cardLink">Дізнатись більше →</a>
            </div>
            <div className="featureCard">
              <div className="cardIcon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Безпека</h3>
              <p>Сучасні рішення для захисту вашої оселі</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="cardLink">Дізнатись більше →</a>
            </div>
            <div className="featureCard">
              <div className="cardIcon">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Розумні розетки</h3>
              <p>Економте електроенергію розумно</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="cardLink">Дізнатись більше →</a>
            </div>
          </div>
        </section>

        <section className="catalog" id="products">
          <div className="sectionHeader">
            <h2>Каталог товарів</h2>
            <p>Найпопулярніші товари цього місяця</p>
          </div>
          <div className="productGrid">
            {products.map(product => (
              <div key={product.id} className="productCard">
                <div className="productImage" style={{backgroundImage: `url(${product.image})`}}>
                  <div className="productOverlay">
                    <button className="quickView">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="addToCart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="productFooter">
                    <span className="price">{product.price}</span>
                    <button className="buyButton">Купити</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="ctaButton" onClick={() => onNavigate('products')}>
              Переглянути всі товари
            </button>
          </div>
        </section>

        <section className="benefits">
          <div className="sectionHeader-white">
            <h2>Чому обирають нас</h2>
            <p>Переваги покупки в SmartHome Hub</p>
          </div>
          <div className="benefitsGrid">
            <div className="benefitItem">
              <div className="benefitIcon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Швидка доставка</h3>
              <p>По всій Україні за 1-3 дні</p>
            </div>
            <div className="benefitItem">
              <div className="benefitIcon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Технічна підтримка</h3>
              <p>Допомога та консультації 24/7</p>
            </div>
            <div className="benefitItem">
              <div className="benefitIcon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Гарантія якості</h3>
              <p>Тільки сертифікована продукція</p>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletterContent">
            <h2>Отримувати новини та спеціальні пропозиції</h2>
            <p>Підпишіться на нашу розсилку та отримайте знижку 10% на перше замовлення</p>
            <form className="subscribeForm">
              <input type="email" placeholder="Введіть вашу email адресу" />
              <button type="submit">Підписатися</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerContent">
          <div className="footerSection">
            <h4>SmartHome Hub</h4>
            <p>Ваш надійний партнер у створенні розумного та затишного дому</p>
            <div className="socialLinks">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footerSection">
            <h4>Контакти</h4>
            <p><i className="fas fa-phone"></i> +380 44 123 45 67</p>
            <p><i className="fas fa-envelope"></i> info@smarthome.ua</p>
            <p><i className="fas fa-map-marker-alt"></i> м. Київ, вул. Хрещатик, 1</p>
          </div>
          <div className="footerSection">
            <h4>Інформація</h4>
            <ul>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Доставка і оплата</a></li>
              <li><a href="#">Гарантія</a></li>
              <li><a href="#">Повернення товару</a></li>
            </ul>
          </div>
          <div className="footerSection">
            <h4>Категорії</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Розумне освітлення</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Клімат-контроль</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Безпека</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Розумні розетки</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; 2024 SmartHome Hub. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
};
