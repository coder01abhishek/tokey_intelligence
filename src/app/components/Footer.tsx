// components/Footer.jsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    return (
        <footer className="bg-black text-gray-300 py-12 md:py-19 z-30">
            <div className="border-b border-white/20 pb-7.5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Left Section: Brand and Copyright */}
                    <div className="md:col-span-1 flex flex-col md:items-start text-left">
                        <Link href="/" className="text-[34px] font-bold text-white mb-4">
                            PROJECT TOKYO
                        </Link>
                        <p className="md:w-55 text-base w-full leading-6">
                            AI Companion Launchpad
                        </p>
                    </div>

                    {/* Right Sections: Navigation Links */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-left">

                            {/* Features Column */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                                <ul className="sm:space-y-4 space-y-3">
                                    <li><Link href="#home" className="hover:text-white text-[#ffffff] transition-colors duration-200">Home</Link></li>
                                    <li><Link href="#about" className="hover:text-white text-[#ffffff] transition-colors duration-200">About</Link></li>
                                    <li><Link href="#ai" className="hover:text-white text-[#ffffff] transition-colors duration-200">AI Characters</Link></li>
                                    <li><Link href="#work" className="hover:text-white text-[#ffffff] transition-colors duration-200">How It Works</Link></li>
                                </ul>   
                            </div>

                            {/* Resources Column */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                                <ul className="sm:space-y-5 space-y-3">
                                    <li><Link href="#modules" className="hover:text-white text-[#ffffff] transition-colors duration-200">Modules</Link></li>
                                    <li><Link href="#faq" className="hover:text-white text-[#ffffff] transition-colors duration-200">Faq</Link></li>
                                    <li>
                                        <button
                                            onClick={() => setShowTerms(true)}
                                            className=" hover:text-white transition text-[#ffffff]"
                                        >
                                            Terms & Conditions
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setShowPrivacy(true)}
                                            className=" hover:text-white transition text-[#ffffff]"
                                        >
                                            Privacy Policy
                                        </button>
                                    </li>
                                </ul>
                            </div>




                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-[24px] font-medium text-white sm:mt-10 mt-5 sm:mb-4 mb-2">Disclaimer</p>
                <p className="sm:text-[20px] text-base font-normal text-[#a0a0a0] leading-5">
                    Project Tokyo is an independent project and is not affiliated with, endorsed by, or officially connected to the city of Tokyo or any of its governing bodies. We chose the name &quot;Tokyo&quot; out of deep respect and love for Japanese culture, innovation, and technological advancement.
                </p>
            </div>

            {/* Terms Modal */}
            <Modal
                isOpen={showTerms}
                onClose={() => setShowTerms(false)}
                title="Risk Disclosure & Terms of Use"
            >
                <strong>Last Updated: July 9, 2025</strong>

                <div className="space-y-4 text-gray-300 mt-5 terms">
                    <p><strong>1. Purpose & Acknowledgment</strong></p>
                    <p>
                        Project Tokyo is an AI Companion Launchpad that enables users to create,
                        customize, and interact with AI driven characters. By accessing or using
                        Project Tokyo, you acknowledge that you are engaging with experimental AI
                        technology. Your use of the platform is voluntary and entirely at your own
                        risk.
                    </p>

                    <p><strong>2. AI Companions Are Not Advisors</strong></p>
                    <p>
                        AI companions, bots, or tools available through Project Tokyo operate
                        without human supervision. They are designed for entertainment, creative
                        expression, and conversational purposes only. They do not provide
                        professional, financial, medical, legal, or mental health advice. Users are
                        responsible for seeking qualified professionals when making real world
                        decisions.
                    </p>

                    <p><strong>3. Data & Conversations</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">
                            Interactions with AI companions may be stored or processed to improve performance, memory, or personalization. While we do not sell your data, please understand:
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            Conversations may be reviewed for safety, training, or debugging.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            Do not share sensitive personal, financial, or confidential information.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            AI outputs are probabilistic and may produce inaccurate, biased, or offensive content.
                        </li>
                    </ul>


                    <p><strong>4. Experimental Infrastructure & Bugs</strong></p>
                    <p>
                        Project Tokyo is under active development. Errors, outages, or faulty AI
                        behavior may occur. These issues could result in unexpected responses, lost
                        data, or broken features. By using Project Tokyo, you accept full
                        responsibility for all outcomes and acknowledge that you are engaging with
                        experimental infrastructure that may malfunction.
                    </p>

                    <p><strong>5. Language & Cultural Limitations</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="leading-[22px] sm:text-[18px] ">
                            Project Tokyo supports multiple languages (including English, Simplified Chinese, Traditional Chinese, Vietnamese, Spanish, and Russian). However:
                        </li>
                        <li className="leading-[22px] sm:text-[18px] ">
                            AI output may be inaccurate or culturally insensitive.
                        </li>
                        <li className="leading-[22px] sm:text-[18px] ">
                            Meanings may be mistranslated or misinterpreted.
                        </li>
                        <li className="leading-[22px] sm:text-[18px]">
                            Users should exercise judgment when relying on AI across languages.
                        </li>
                    </ul>


                    <p><strong>6. Third Party Dependencies</strong></p>
                    <p>
                        Project Tokyo may integrate with third party tools, APIs, or platforms
                        (e.g., hosting providers, analytics, or optional AI services). These
                        external services are not controlled by us. We do not guarantee their
                        uptime, accuracy, or safety, and any failures may affect your experience.
                    </p>

                    <p><strong>7. Security & User Responsibility</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">
                            Project Tokyo will never ask for your private account passwords outside of secure login flows.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            You are responsible for securing your accounts, devices, and avoiding phishing links.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            While we follow best practices, no system is immune to exploits or attacks.
                        </li>
                    </ul>

                    <p><strong>8. Age & Restricted Use</strong></p>
                    <p>
                        Project Tokyo is not intended for children under 13, or for individuals
                        under the age of digital consent in their jurisdiction. Certain regions may
                        restrict or regulate AI services. You are responsible for ensuring your use
                        complies with local laws and regulations.
                    </p>

                    <p><strong>9. No Guarantees from AI Output</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">
                            AI companions may generate text, voices, or behaviors that are fictional, inaccurate, or unpredictable. Outputs are not guaranteed to be correct, safe, or appropriate.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            Emotional or relational interactions are simulated and should not be mistaken for human relationships.
                        </li>
                        <li className="sm:text-[18px] leading-[22px]">
                            All outputs should be treated as experimental entertainment.
                        </li>
                    </ul>

                    <p><strong>10. Terms May Change</strong></p>
                    <p>
                        These Terms of Use and Risk Disclosures may be updated as Project Tokyo
                        evolves. Continued use of the platform implies your acceptance of the most
                        current version. We recommend reviewing this document periodically.
                    </p>
                </div>

            </Modal>

            {/* Privacy Modal */}
            <Modal
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
                title="Privacy Policy"
            >
                <strong>Last Updated: July 9, 2025</strong>
                <div className="space-y-4 text-gray-300 mt-5 terms">
                    <p>
                        Welcome to Project Tokyo AI Companion Launchpad. Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services at www.projecttokyo.ai.
                    </p>

                    <p><strong>1. Information We Collect</strong></p>
                    <p>We do not collect personal data unless you voluntarily provide it (for example, when submitting a form, joining a waitlist, or contacting us). However, we may collect limited technical information:</p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">Browser and device information</li>
                        <li className="sm:text-[18px] leading-[22px]">Anonymized IP address (for analytics)</li>
                        <li className="sm:text-[18px] leading-[22px]">Usage statistics (via tools like Vercel Analytics or similar platforms)</li>
                    </ul>

                    <p><strong>2. How We Use Your Information</strong></p>
                    <p>We use this data only to:</p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">Improve the performance and functionality of our site</li>
                        <li className="sm:text-[18px] leading-[22px]">Understand aggregate user behavior</li>
                        <li className="sm:text-[18px] leading-[22px]">Provide a smoother and more secure AI companion experience</li>
                    </ul>
                    <p>We do not sell, rent, or share your information with third party advertisers or data brokers.</p>

                    <p><strong>3. AI & Interaction Disclaimer</strong></p>
                    <p>Conversations with AI companions may be processed for functionality, personalization, or safety. While we do not sell or misuse your prompts, please avoid sharing sensitive personal information.</p>

                    <p><strong>4. Cookies & Local Storage</strong></p>
                    <p>We may use minimal cookies or local storage for purposes such as:</p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">Remembering your app settings (e.g., theme, preferences)</li>
                        <li className="sm:text-[18px] leading-[22px]">Collecting basic analytics to improve performance</li>
                    </ul>

                    <p><strong>5. Third Party Services</strong></p>
                    <p>Project Tokyo may integrate third party APIs and services, including (but not limited to):</p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">Authentication and wallet services</li>
                        <li className="sm:text-[18px] leading-[22px]">Cloud hosting providers</li>
                        <li className="sm:text-[18px] leading-[22px]">Analytics tools</li>
                    </ul>
                    <p>Each third party service may have its own privacy policy. We recommend reviewing them if you choose to connect through those providers.</p>

                    <p><strong>6. Security</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">We follow industry best practices to secure your data. However, please note:</li>
                        <li className="sm:text-[18px] leading-[22px]">No platform can guarantee 100% security of online interactions</li>
                        <li className="sm:text-[18px] leading-[22px]">Using AI services carries inherent risks, especially when sharing personal or financial information</li>
                    </ul>

                    <p><strong>7. Your Rights</strong></p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">You may contact us at any time to request deletion of data you have shared with us</li>
                        <li className="sm:text-[18px] leading-[22px]">Ask questions about privacy or how your data is used</li>
                        <li className="sm:text-[18px] leading-[22px]">Contact: x.com/projecttokyoai</li>
                    </ul>
                </div>

            </Modal>


        </footer>
    );
}
