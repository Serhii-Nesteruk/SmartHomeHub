import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>SmartHome Hub</div>
          <div className={styles.navLinks}>
            <a href="#products">Продукти</a>
            <a href="#categories">Категорії</a>
            <a href="#about">Про нас</a>
            <a href="#contact">Контакти</a>
          </div>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Розумний дім - Розумне життя</h1>
            <p>Перетворіть свій дім на інтелектуальний простір із нашими інноваційними гаджетами</p>
            <button className={styles.ctaButton}>Переглянути каталог</button>
          </div>
        </section>

        <section className={styles.features}>
          <h2>Популярні категорії</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <i className="fas fa-lightbulb"></i>
              <h3>Розумне освітлення</h3>
              <p>Керуйте освітленням через смартфон</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-temperature-high"></i>
              <h3>Клімат-контроль</h3>
              <p>Оптимальна температура у кожній кімнаті</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Безпека</h3>
              <p>Системи відеоспостереження та сигналізації</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-plug"></i>
              <h3>Розумні розетки</h3>
              <p>Контроль електроприладів віддалено</p>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Чому обирають нас</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <i className="fas fa-truck"></i>
              <h3>Швидка доставка</h3>
              <p>По всій Україні</p>
            </div>
            <div className={styles.benefitItem}>
              <i className="fas fa-headset"></i>
              <h3>Технічна підтримка</h3>
              <p>24/7 допомога експертів</p>
            </div>
            <div className={styles.benefitItem}>
              <i className="fas fa-shield-alt"></i>
              <h3>Гарантія якості</h3>
              <p>Від виробника</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>SmartHome Hub</h4>
            <p>Ваш надійний партнер у створенні розумного дому</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Контакти</h4>
            <p>Email: info@smarthome.ua</p>
            <p>Тел: +380 44 123 45 67</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Соціальні мережі</h4>
            <div className={styles.socialLinks}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 SmartHome Hub. Всі права захищені
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
