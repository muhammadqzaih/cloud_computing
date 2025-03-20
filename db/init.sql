CREATE DATABASE IF NOT EXISTS urgentNewsDB;

USE urgentNewsDB;

CREATE TABLE IF NOT EXISTS News (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

INSERT INTO News (title, content) VALUES
('Breaking: Tech Boom', 'The tech industry sees a surge in innovation.'),
('Stock Market Updates', 'Markets fluctuate amid economic shifts.'),
('New Space Discovery', 'Scientists discover a new exoplanet.'),
('AI Advancements', 'AI surpasses human performance in some areas.'),
('Climate Change', 'Experts warn about rising temperatures.'),
('Global Events', 'Major events happening worldwide.'),
('Health Breakthrough', 'New treatment for chronic illness found.'),
('Cybersecurity', 'Hackers target major corporations.'),
('Sports Highlights', 'Latest sports news and scores.'),
('Economic Forecast', 'Economists predict upcoming trends.');
