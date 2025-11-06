import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// This is a placeholder. In a real app, the API key would be handled securely.
const API_KEY = process.env.API_KEY;

const Newsletter = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const resources = [
        {
            title: "How to Build an AI-Powered Organization",
            url: "https://hbr.org/2021/07/how-to-build-an-ai-powered-organization",
            summary: "A guide from Harvard Business Review on the cultural and strategic shifts necessary for successful AI integration."
        },
        {
            title: "Generative AI’s Act Two",
            url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/generative-ais-act-two",
            summary: "McKinsey explores the next wave of generative AI adoption and its impact on transforming business processes."
        },
        {
            title: "Why AI Will Save the World",
            url: "https://a16z.com/why-ai-will-save-the-world/",
            summary: "Marc Andreessen offers a powerful, optimistic case for the broad, positive impact of AI on society and industry."
        }
    ];

    return (
        <div className="newsletter-container">
            <header className="header">
                <img src="https://klugmans.com/wp-content/uploads/2023/10/klugmans-logo-white-retina.png" alt="Klugmans Logo" className="logo" />
                <h1>TechCoffee Corner</h1>
                <p>Your Weekly Briefing on Tech Innovation & Strategy</p>
            </header>

            <main className="content">
                <section className="section">
                    <h2>From Bottleneck to Breakthrough: A Niche Telco's AI-Powered Transformation</h2>
                    <p>In the world of bespoke services, efficiency can't come at the cost of the personal touch. This was the central challenge facing a thriving, multi-location phone service chain catering to the specialized Kosher market. Their success was built on community trust and meticulous service, but behind the scenes, a manual data verification process was consuming their most valuable asset: their managers' time.</p>
                    <blockquote>
                        Our store managers are the heart of our customer relationships. We realized they were spending hours each day on administrative tasks instead of on the floor, where they belong. The core issue was a manual data verification process that was tedious and prone to error. We needed a solution that understood our unique business rules and could give that time back to our team and our customers.
                    </blockquote>
                    <p>We developed a bespoke AI application that acts as a digital apprentice for each manager. The system seamlessly integrates into their workflow, automatically ingesting and cross-referencing new data against the company's complex service limits and market-specific rules. What was once a painstaking manual entry process has been transformed. Now, managers simply give a final, quick approval before the verified data is pushed directly to their CRM. It's not just automation; it's intelligent augmentation.</p>
                    <p>The impact was immediate and profound. With managerial hours freed up, customer engagement has soared. Building on this success, we're now co-developing the next phase: in-store, self-service tablets. This will empower customers to initiate their own data entry, which will flow directly into the AI for verification, further liberating staff to focus entirely on providing the exceptional, personal service their brand is known for.</p>
                </section>

                <section className="section">
                    <h2>AI in Motion: The Lighter Side of Logic</h2>
                    <div className="video-wrapper">
                        {!isVideoPlaying ? (
                            <div
                                className="video-placeholder"
                                role="button"
                                tabIndex={0}
                                aria-label="Play video about AI explaining cloud computing with sock puppets"
                                onClick={() => setIsVideoPlaying(true)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsVideoPlaying(true)}
                            >
                                <div className="video-thumbnail">
                                    <div className="play-button"></div>
                                </div>
                            </div>
                        ) : (
                            <video
                                src="https://videos.pexels.com/video-files/4782071/4782071-hd_1920_1080_25fps.mp4"
                                className="video-player"
                                controls
                                autoPlay
                                aria-label="An AI-generated video of sock puppets"
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                    <p>This week, our creative AI was asked to explain cloud computing... using only sock puppets. The result is as educational as it is unsettling. Enjoy a moment of levity, engineered by logic.</p>
                    <div className="idea-submission">
                        <p><strong>Have a funny prompt for our AI?</strong> We're always looking for the next challenge. Let's see what we can create together.</p>
                        <a href="#" className="cta-button secondary-cta">Submit Your Idea</a>
                    </div>
                     <p className="backup-ps">P.S. When it's not directing sock puppet epics, our AI is an expert in data backup and recovery strategies. <a href="#">Ask us how.</a></p>
                </section>

                <section className="section">
                    <h2>Service Offer of the Week</h2>
                    <div className="offer-card">
                        <h3>Full Phone AI Answering & Transfer Solution</h3>
                        <ul>
                            <li>AI-powered call answering and intelligent routing.</li>
                            <li>Full recording, summarization, and extended summary reports.</li>
                            <li>Complete chat logs for every interaction.</li>
                            <li>Support for up to 3 extensions (custom plans available).</li>
                        </ul>
                        <div className="price-details">
                            <div className="price">$199<span className="price-term">/mo</span></div>
                            <div className="price-term">Unlimited Calls | 2 Live-Agent Changes Included</div>
                            <div className="initial-fee">One-Time Setup & Brand Tuning: $3,000</div>
                            <a href="#" className="cta-button">Book a Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2>From the Tech Vanguard: Recommended Reading</h2>
                    <div className="resource-list">
                        {resources.map((res, index) => (
                            <div className="resource-card" key={index}>
                                <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
                                <p>{res.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Klugmans. All rights reserved.</p>
                <p>1200 River Ave Suite 17, Lakewood, NJ 08701</p>
                <p>
                    <a href="tel:+13477221555">(347) 722-1555</a> | <a href="mailto:office@klugmans.com">office@klugmans.com</a>
                </p>
                <p><a href="#">Unsubscribe</a></p>
            </footer>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Newsletter />);