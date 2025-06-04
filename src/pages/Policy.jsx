import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col">
      <Header activePage="privacy" />
      
      <main className="flex-grow pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl p-6 md:p-10 mb-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-emerald-900/30 border border-emerald-500/30 rounded-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Privacy Policy
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Effective Date: May 1, 2025
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "Data", label: "Protection", gradient: "from-emerald-600 to-teal-700" },
                { value: "Privacy", label: "Security", gradient: "from-cyan-600 to-blue-700" },
                { value: "User", label: "Rights", gradient: "from-amber-600 to-yellow-600" }
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
        
        {/* Privacy Content */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="h-0.5 bg-gradient-to-r from-gray-700 to-emerald-500 flex-grow mr-4"></div>
                <h2 className="text-emerald-400 text-xl font-semibold whitespace-nowrap">Introduction</h2>
                <div className="h-0.5 bg-gradient-to-r from-emerald-500 to-gray-700 flex-grow ml-4"></div>
              </div>
              
              <p className="text-blue-100 mb-6">
                At The ALC World, your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, protect, and manage your personal information when you visit our website, participate in our webinars, read our blogs, or interact with any of our services.
              </p>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-5 mt-6">
                <p className="text-blue-100">
                  <span className="font-bold text-emerald-300">Website:</span> https://www.thealcworld.in<br />
                  <span className="font-bold text-emerald-300">Contact:</span> niravpakai@gmail.com
                </p>
              </div>
            </div>
            
            {/* Policy Sections */}
            <div className="space-y-16">
              {[
                {
                  title: "1. Who We Are",
                  content: "The ALC World is a personal website that provides educational and motivational webinars, insightful blogs, and signature analysis workshops, aimed at helping individuals make better life and career choices. Our website is located at: https://www.thealcworld.in"
                },
                {
                  title: "2. What Information We Collect",
                  content: "We collect both personally identifiable and non-personally identifiable data when you use our website.\n\na. Personal Information\nThis includes:\n- Full Name\n- Email Address\n- Phone Number (if provided)\n- Payment details (processed securely via Razorpay)\n- Feedback and messages submitted through forms\n\nb. Non-Personal Data\nThis includes:\n- IP address\n- Browser type\n- Operating system\n- Pages visited\n- Time spent on each page\n- Device information\n\nThis data is collected automatically through cookies and third-party analytics tools."
                },
                {
                  title: "3. How We Collect Information",
                  content: "We gather information through:\n- Contact & registration forms\n- Newsletter subscriptions\n- Razorpay payment gateway\n- Google Analytics tracking\n- Browser cookies and session data"
                },
                {
                  title: "4. Why We Collect Your Information",
                  content: "Your data is collected to:\n- Send webinar/event invites and reminders\n- Share blog updates and newsletter content\n- Respond to your feedback or queries\n- Improve our services and user experience\n- Track website performance and analytics\n- Process payments securely via Razorpay"
                },
                {
                  title: "5. How We Use Your Information",
                  content: "Your information is used only for the purposes stated above. We may send you periodic emails or messages related to:\n- Upcoming webinars\n- Educational content\n- Site improvements and updates\n\nIf you no longer wish to receive such communication, you can opt-out anytime by contacting us or using the unsubscribe link."
                },
                {
                  title: "6. Cookies & Tracking Technologies",
                  content: "Our website uses cookies to:\n- Recognize returning users\n- Improve loading speed and content relevance\n- Analyze browsing behavior using tools like Google Analytics\n\nYou can control or delete cookies through your browser settings, though this may affect your experience on the site."
                },
                {
                  title: "7. Third-Party Services",
                  content: "We may use third-party services like:\n- Google Analytics – to monitor site traffic and behavior\n- Razorpay – to securely process payments\n\nThese services may collect limited information as per their own privacy policies. We recommend reviewing the privacy practices of these providers."
                },
                {
                  title: "8. Data Sharing and Selling",
                  content: "We do not sell, rent, or trade your personal data to any third party. Data is only shared with trusted services required to operate this website (e.g., Google Analytics, Razorpay) and only for the purposes outlined."
                },
                {
                  title: "9. Data Retention and User Rights",
                  content: "We retain your data for as long as necessary to provide our services and comply with legal obligations.\n\nYou have the right to:\n- Request a copy of your data\n- Ask us to update or correct inaccurate information\n- Request permanent deletion of your data from our systems\n\nTo exercise any of these rights, please email us at niravpakai@gmail.com."
                },
                {
                  title: "10. Security of Your Information",
                  content: "Your information is protected using:\n- SSL encryption (Secure Socket Layer) for secure data transmission\n- Secure storage practices for collected data\n- Verified third-party payment processors (Razorpay)\n\nWhile we do our best to protect your information, no online platform can guarantee 100% security. Please ensure you're using updated devices and browsers when interacting with our site."
                },
                {
                  title: "11. Children's Privacy",
                  content: "Our content is suitable for both minors and adults for educational purposes. However, we do not knowingly collect personal data from children under the age of 13 without parental consent. If you believe your child has submitted information, please contact us for immediate deletion."
                },
                {
                  title: "12. Policy Updates",
                  content: "We reserve the right to modify or update this Privacy Policy at any time. When we do, the updated date at the top of the page will be revised.\n\nWe encourage you to revisit this page periodically to stay informed about how we are protecting your data."
                },
                {
                  title: "13. Contact Us",
                  content: "For questions or concerns regarding this Privacy Policy, please contact:\n\n📧 Email: niravpakai@gmail.com\n🌐 Website: https://www.thealcworld.in\n\nBy using our website, you consent to this Privacy Policy."
                }
              ].map((section, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-0.5 bg-gradient-to-r from-gray-700 to-teal-500 flex-grow mr-4"></div>
                    <h3 className="text-teal-400 text-xl font-semibold whitespace-nowrap group-hover:text-teal-300 transition-colors">
                      {section.title}
                    </h3>
                    <div className="h-0.5 bg-gradient-to-r from-teal-500 to-gray-700 flex-grow ml-4"></div>
                  </div>
                  
                  <p className="text-blue-100 whitespace-pre-line">
                    {section.content}
                  </p>
                  
                  {/* Glowing divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-8"></div>
                </div>
              ))}
            </div>
            
            {/* Closing Statement */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-lg font-bold mb-6">
                Our Commitment
              </div>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Your privacy and trust are paramount to us. We're committed to protecting your data as we help you grow.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-2xl p-10 md:p-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-5 py-2.5 rounded-lg mb-6 font-bold">
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

export default PrivacyPolicy;