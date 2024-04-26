import React from "react";

export default function About() {
  return (
    <>
      <div>
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>About Our Inventory Management System</h2>
            <div className="row">
              <div className="col-md-6">
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                  Welcome to our inventory management system, where efficiency meets simplicity. Our system is designed to empower businesses of all sizes to take control of their inventory processes with ease.
                </p>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                  With real-time tracking, intelligent analytics, and seamless integration capabilities, our platform offers a comprehensive solution to streamline your inventory operations from procurement to fulfillment.
                </p>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                  Whether you're a small business looking to optimize stock levels or a large enterprise managing complex supply chains, our flexible and scalable system adapts to your unique needs, ensuring smooth operations and maximum efficiency.
                </p>
                <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Technologies Used</h2>
                <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                  <li>MongoDB: NoSQL database for storing product data.</li>
                  <li>Express.js: Web application framework for Node.js.</li>
                  <li>React: Frontend library for building user interfaces.</li>
                  <li>Node.js: JavaScript runtime environment for server-side development.</li>
                </ul>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>Our goal is to provide you with a robust and user-friendly inventory management solution to help you optimize your business processes and maximize efficiency.</p>
              </div>
              <div className="col-md-6">
                <img src="../img/img4.jpg" alt="Inventory Management" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer py-5 bg-danger text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>About</h5>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: '1.6', color: '#fff' }}>
                Learn more about our inventory management system and how it can help streamline your business operations.
              </p>
            </div>
            <div className="col-md-4">
              <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>Contact Us</h5>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: '1.6', color: '#fff' }}>Email: info@inventorymanagement.com</p>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: '1.6', color: '#fff' }}>Phone: 123-456-7890</p>
            </div>
            <div className="col-md-4">
              <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/#" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', color: '#fff' }}>Facebook</a>
                </li>
                <li className="list-inline-item">
                  <a href="/#" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', color: '#fff' }}>Twitter</a>
                </li>
                <li className="list-inline-item">
                  <a href="/#" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', color: '#fff' }}>LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="bg-light" />
          <p className="text-white text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
            &copy; 2024 Inventory Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
