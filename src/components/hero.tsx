// components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import styles from './styles/hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <h1 className="display-4 fw-bold mb-3">
                The Golden Standard For Gold Distribution
            </h1>
            <p className="lead mb-4">
                Experience the finest luxury goods, Its your time to shine.
            </p>
           <Link 
                href="/explore" 
                className="btn btn-primary px-4 py-2"
            >
                Dive in
            </Link>

        </section>
    );
};

export default Hero;