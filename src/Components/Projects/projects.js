import React from 'react';
import './projects.css';
import chatbotai from '../../Assets/chatbotai.jpg';
import creditcardfraud from '../../Assets/creditcardfraud.webp';
import ecommerce from '../../Assets/ecommerce .jpg';
const projects = [
  {
    id: 1,
    title: 'React-Spring-AI-Chatbot',
    description: 'A full-stack AI chatbot application that combines a sleek React frontend with a robust Spring Boot backend. Unlike typical client-only chatbots, this project leverages Spring Boot for secure API handling, session management, and scalable integration with AI models',
    imageUrl: chatbotai, // Corrected the imageUrl value to use the imported image directly
    link: 'https://github.com/hemika2110/React-Spring-AI-Chatbot',
  },
  {
    id: 2,
    title: 'Credit card Fraud Detection',
    description: 'Machine learning model for detecting fraudulent credit card transactions in real-time.',
    imageUrl: creditcardfraud, // You can use the same image or change it to another imported image
    link: 'https://github.com/hemika2110/Fraud-Detection---Credit-Card-Transactions',
  },
  {
    id: 3,
    title: 'Spring Ecommerce',
    description: 'ull-stack e-commerce web application with features like user authentication, product browsing, cart, and order management. Built the backend using Spring Boot and MySQL, and the frontend with React for a responsive shopping experience. Focused on clean architecture, secure data handling, and smooth API integration between client and server.',
    imageUrl: ecommerce, // You can use the same image or change it to another imported image
    link: '#',
  },
  
  // Add more projects as needed
];

function Projects() { // Changed function name from App to Projects
  return (
    <div className="App">
      <header>
        <h1>My Projects</h1>
      </header>

      <section className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Learn More</a>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; Hemika Amilineni</p>
      </footer>
    </div>
  );
}

export default Projects; // Exporting Projects component instead of App
