import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <header className="section" style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Transforming Ideas into Reality
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                        We build premium web solutions that engage, convert, and inspire.
                    </p>
                </header>
                <Projects />
                <Clients />
                <ContactForm />
                <Newsletter />
                <footer style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', borderTop: '1px solid #e2e8f0', marginTop: '40px' }}>
                    &copy; 2025 Nova Project. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
