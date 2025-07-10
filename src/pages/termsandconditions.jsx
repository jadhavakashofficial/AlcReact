import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col">
      <Header activePage="terms" />
      
      <main className="flex-grow pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl p-6 md:p-10 mb-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-cyan-900/30 border border-cyan-500/30 rounded-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Last updated: May 1, 2025
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "Legal", label: "Compliance", gradient: "from-cyan-600 to-blue-700" },
                { value: "Privacy", label: "Protection", gradient: "from-amber-600 to-yellow-600" },
                { value: "User", label: "Agreement", gradient: "from-emerald-600 to-teal-600" }
              ].map((stat, index) => (
                <div key={index} className={`bg-gradient-to-r ${stat.gradient} rounded-2xl p-1`}>
                  <div className="bg-gray-900 rounded-xl p-5 flex flex-col items-center">
                    <span className="text-white text-2xl font-bold">{stat.value}</span>
                    <span className="text-blue-100 mt-2">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Terms Content */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="h-0.5 bg-gradient-to-r from-gray-700 to-cyan-500 flex-grow mr-4"></div>
                <h2 className="text-cyan-400 text-xl font-semibold whitespace-nowrap">Introduction</h2>
                <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-gray-700 flex-grow ml-4"></div>
              </div>
              
              <p className="text-blue-100 mb-6">
                Welcome to The ALC World. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our website or services.
              </p>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-5 mt-6">
                <p className="text-blue-100">
                  <span className="font-bold text-cyan-300">These terms apply to:</span> All visitors, users, and participants in our webinars, blogs, and educational programs.
                </p>
              </div>
            </div>
            
            {/* Key Terms Sections */}
            <div className="space-y-16">
              {[
                {
                  title: "1. Website Purpose",
                  content: "The ALC World is an educational platform that offers: Live and recorded webinars on topics like graphology, signature analysis, time management, and career counselling; Informational blogs; Occasional downloadable and purchasable content. The website is for informational and personal development purposes only."
                },
                {
                  title: "2. User Eligibility",
                  content: "By using this website, you confirm that: You are at least 13 years of age, or have parental/guardian consent; You have the legal capacity to enter into this agreement; You agree to use this website in compliance with all applicable laws and regulations."
                },
                {
                  title: "3. User Accounts & Subscriptions",
                  content: "You may be required to register or subscribe using your name, email address, and other contact details to: Join webinars; Access special content; Receive updates and newsletters. You are responsible for the accuracy of the information you provide and for maintaining the confidentiality of your account (if applicable)."
                },
                {
                  title: "4. Webinars and Events",
                  content: "By registering for a webinar: You consent to receive email reminders and follow-ups; You agree not to record, reproduce, or redistribute any part of the session without written permission; You understand that the sessions are for educational purposes and are not a substitute for professional advice. Webinar recordings may be used by The ALC World for future educational purposes."
                },
                {
                  title: "5. Payments and Refunds",
                  content: "If you purchase access to a webinar or any premium content: All payments are securely processed via Razorpay; Prices are listed in INR and subject to change; Once payment is completed, you will receive confirmation via email. Refunds: Refunds are not guaranteed and are handled on a case-by-case basis. No refunds will be provided for missed webinars or late cancellations. To request a refund, email info@thealcworld.in within 48 hours of the transaction."
                },
                {
                  title: "6. Content Ownership",
                  content: "All content on this website, including but not limited to: Texts, blog posts, articles; Webinars, videos, and images; Logos and branding elements; is the intellectual property of The ALC World unless otherwise stated. You may not: Reproduce, republish, or redistribute content without prior written consent; Use content for commercial purposes without a license. Exceptions: Content shared publicly with social sharing buttons or explicitly marked as 'shareable' can be distributed with full attribution."
                },
                {
                  title: "7. User-Generated Content",
                  content: "If you submit feedback, questions, testimonials, or participate in public webinars: You grant us a non-exclusive, royalty-free license to use your content for marketing and educational purposes; You confirm that your submission does not infringe upon the rights of others or violate any laws. We reserve the right to moderate, remove, or refuse any content at our discretion."
                },
                {
                  title: "8. Privacy and Data Collection",
                  content: "We collect and use your personal data in accordance with our Privacy Policy. Key points: We collect data via forms, cookies, and analytics tools (like Google Analytics); We do not sell or rent your personal information; We may send updates or promotional content via email; You may request deletion of your data at any time by contacting  info@thealcworld.in"
                },
                {
                  title: "9. Cookies & Tracking Technologies",
                  content: "This site uses cookies to: Improve site functionality and loading speed; Track engagement and session data; Personalize user experience. By using this site, you consent to our use of cookies. You may disable cookies in your browser settings, though some features may not work as intended."
                },
                {
                  title: "10. Links to Third-Party Sites",
                  content: "We may occasionally link to third-party websites (such as Razorpay, Zoom, Google Meet, or YouTube). These links are provided for your convenience. We do not control or endorse these websites and are not responsible for their content, privacy policies, or terms of use."
                },
                {
                  title: "11. Limitation of Liability",
                  content: "To the fullest extent permitted by law, The ALC World: Disclaims all warranties related to the site and content; Will not be liable for any damages arising from: Use or inability to use the website; Webinar content, accuracy, or technical interruptions; User decisions made based on our educational material. You use this website at your own risk."
                },
                {
                  title: "12. Indemnification",
                  content: "You agree to indemnify and hold harmless The ALC World, its owner, and contributors from any claims, damages, or expenses arising out of your use of the website, including: Violation of these terms; Misuse of any content or services."
                },
                {
                  title: "13. Modifications to the Terms",
                  content: "We may update these Terms and Conditions at any time without prior notice. The updated version will be posted on this page with the effective date. You are encouraged to review these terms periodically. Continued use of the site implies acceptance of the revised terms."
                },
                {
                  title: "14. Termination",
                  content: "We reserve the right to: Suspend or terminate access to our website or services; Cancel registrations or restrict access to webinars; Remove any content submitted by users. This may happen without notice if we believe you've violated these Terms."
                },
                {
                  title: "15. Governing Law",
                  content: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the jurisdiction of the courts of Maharashtra."
                },
                {
                  title: "16. Contact Information",
                  content: "For any questions, concerns, or feedback regarding these Terms, you may contact us at: 📧 Email:  info@thealcworld.in 🌐 Website: https://www.thealcworld.in"
                }
              ].map((section, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-0.5 bg-gradient-to-r from-gray-700 to-amber-500 flex-grow mr-4"></div>
                    <h3 className="text-amber-400 text-xl font-semibold whitespace-nowrap group-hover:text-amber-300 transition-colors">
                      {section.title}
                    </h3>
                    <div className="h-0.5 bg-gradient-to-r from-amber-500 to-gray-700 flex-grow ml-4"></div>
                  </div>
                  
                  <p className="text-blue-100">
                    {section.content}
                  </p>
                  
                  {/* Glowing divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-8"></div>
                </div>
              ))}
            </div>
            
            {/* Closing Statement */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-3 rounded-lg font-bold mb-6">
                Our Commitment
              </div>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Thank you for being a part of The ALC World. Your trust, privacy, and growth matter to us.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-2xl p-10 md:p-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 py-2.5 rounded-lg mb-6 font-bold">
              Continue Your Journey
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Explore our educational programs and take the next step in your personal and professional development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;