-- Drop tables if they exist
DROP TABLE IF EXISTS newsletter_subscribers;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users;

-- Create Users Table (Admin)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Create Clients Table
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    designation VARCHAR(255)
);

-- Create Contacts Table
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20),
    city VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Note: Admin user is created via seed_admin.js to ensure correct password hashing.


-- Seed Data for Projects (15 Real-world examples)
INSERT INTO projects (name, description, image_url) VALUES 
('Lumina Fintech', 'A comprehensive banking dashboard with real-time analytics and AI-driven insights.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Apex Architecture', 'Minimalist portfolio website for a high-end architectural firm.', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('EcoMarket', 'Sustainable e-commerce platform connecting local farmers with urban consumers.', 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Nebula Stream', 'High-performance video streaming service with adaptive bitrate technology.', 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('HealthVantage', 'Telehealth application for remote patient monitoring and consultations.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Urban Ride', 'Smart mobility app for city bikes and scooter sharing.', 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Culinary Masters', 'Cooking class platform featuring world-renowned chefs.', 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Zenith Learning', 'AI-powered LMS for personalized corporate training.', 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('CryptoVault', 'Secure cryptocurrency wallet with multi-chain support.', 'https://images.unsplash.com/photo-1621416894569-0f39e8462d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('TravelSphere', 'Immersive travel booking experience with VR previews.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('AgroTech Solutions', 'IoT dashboard for smart farm monitoring and automation.', 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Fashion Forward', 'AI stylist app that recommends outfits based on your wardrobe.', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('BlueOcean Shipping', 'Logistics management system for global freight forwarding.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('Mindful Space', 'Meditation and wellness app with progress tracking.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
('CyberGuard', 'Cybersecurity threat intelligence dashboard.', 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

-- Seed Data for Clients (12 Real-world examples)
INSERT INTO clients (name, description, designation, image_url) VALUES 
('Emily Carter', 'Nova delivered beyond our expectations. Their attention to detail is unmatched.', 'CMO, BrightPath', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Mark Thompson', 'The scalability of the solution they built allowed us to grow 300% in a year.', 'CTO, DataDriven', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Sophia Martinez', 'Professional, timely, and incredibly talented team. highly recommended.', 'CEO, InnovateX', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('James Wilson', 'Our new platform handles peak traffic effortlessly. Fantastic work.', 'VP Engineering, RetailGiant', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Olivia Davis', 'The UI/UX design is world-class. Our customers love the new experience.', 'Product Lead, Appify', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Daniel White', 'Great communication throughout the project. They truly care about success.', 'Founder, EcoStart', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Ava Brown', 'They turned our complex requirements into a simple, elegant solution.', 'Director, HealthPlus', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Liam Taylor', 'Technical expertise is top-notch. Solved issues our previous vendors couldn''t.', 'Tech Lead, SecureNet', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Isabella Moore', 'The ROI from this project has been significant. Worth every penny.', 'Marketing Director, GlobalTrade', 'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Lucas Anderson', 'A true partner in our digital transformation journey.', 'COO, LogisticsPro', 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Mia Thomas', 'Creative, responsive, and reliable. I wouldn''t work with anyone else.', 'Founder, CreativeSoul', 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
('Ethan Jackson', 'The admin dashboard they built saves us hours of work every week.', 'Manager, OpsDaily', 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80');

-- Seed Data for Contacts (10 Realistic entries)
INSERT INTO contacts (full_name, email, mobile, city) VALUES 
('Alice Walker', 'alice.walker@example.com', '555-0101', 'San Francisco'),
('Bob Harris', 'bob.harris@testmail.com', '555-0102', 'London'),
('Charlie Kim', 'charlie.k@domain.co', '555-0103', 'Seoul'),
('Diana Prince', 'diana.p@themyscira.net', '555-0104', 'Washington DC'),
('Evan Wright', 'evan.wright@sample.org', '555-0105', 'Toronto'),
('Fiona Gallagher', 'fiona.g@chicago.us', '555-0106', 'Chicago'),
('George Martin', 'george.m@writer.uk', '555-0107', 'Santa Fe'),
('Hannah Lee', 'hannah.lee@tech.io', '555-0108', 'Singapore'),
('Ian Scott', 'ian.scott@scotland.uk', '555-0109', 'Edinburgh'),
('Julia Roberts', 'julia.r@hollywood.com', '555-0110', 'Los Angeles');

-- Seed Data for Newsletter Subscribers (12 entries)
INSERT INTO newsletter_subscribers (email) VALUES 
('newsletter1@example.com'),
('subscriber.joe@test.com'),
('daily.reader@news.net'),
('tech.enthusiast@blog.io'),
('design.lover@creative.co'),
('startup.founder@unicorn.vc'),
('investor.relations@wealth.com'),
('coding.guru@dev.to'),
('travel.bug@world.map'),
('foodie.jen@kitchen.net'),
('fitness.pro@gym.life'),
('music.fan@tempo.fm');
