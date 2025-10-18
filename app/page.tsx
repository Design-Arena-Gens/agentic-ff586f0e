'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request received! We will contact you shortly to confirm.')
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>LUXE HAIR SALON</h1>
          <div className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Transform Your Look</h2>
          <p>Expert stylists. Premium products. Exceptional results.</p>
          <a href="#booking" className={styles.ctaButton}>Book Now</a>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>✂️</div>
            <h3>Hair Cutting</h3>
            <p>Precision cuts tailored to your style</p>
            <span className={styles.price}>From $45</span>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🎨</div>
            <h3>Hair Coloring</h3>
            <p>Expert coloring and highlights</p>
            <span className={styles.price}>From $85</span>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💆</div>
            <h3>Styling</h3>
            <p>Special occasion styling</p>
            <span className={styles.price}>From $60</span>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>✨</div>
            <h3>Treatments</h3>
            <p>Deep conditioning and repair</p>
            <span className={styles.price}>From $35</span>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💇</div>
            <h3>Blowout</h3>
            <p>Professional blow dry styling</p>
            <span className={styles.price}>From $40</span>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>👰</div>
            <h3>Bridal Services</h3>
            <p>Complete bridal hair packages</p>
            <span className={styles.price}>From $150</span>
          </div>
        </div>
      </section>

      <section id="gallery" className={styles.gallery}>
        <h2>Our Work</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <span>Hair Coloring</span>
          </div>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
            <span>Modern Cuts</span>
          </div>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
            <span>Styling</span>
          </div>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
            <span>Treatments</span>
          </div>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
            <span>Bridal Hair</span>
          </div>
          <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'}}>
            <span>Extensions</span>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.booking}>
        <h2>Book Your Appointment</h2>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="haircut">Hair Cutting</option>
              <option value="coloring">Hair Coloring</option>
              <option value="styling">Styling</option>
              <option value="treatment">Treatments</option>
              <option value="blowout">Blowout</option>
              <option value="bridal">Bridal Services</option>
            </select>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Book Appointment
          </button>
        </form>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Visit Us</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>📍 Location</h3>
            <p>123 Style Avenue<br />Downtown City, ST 12345</p>
          </div>
          <div className={styles.contactCard}>
            <h3>📞 Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className={styles.contactCard}>
            <h3>⏰ Hours</h3>
            <p>Mon-Fri: 9am-7pm<br />Sat: 9am-6pm<br />Sun: 10am-5pm</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Luxe Hair Salon. All rights reserved.</p>
      </footer>
    </div>
  )
}
