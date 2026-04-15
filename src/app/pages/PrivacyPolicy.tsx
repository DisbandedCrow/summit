import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PrivacyPolicy() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "collection", title: "Collection of Personal Information" },
    { id: "use", title: "Use of Personal Information" },
    { id: "sharing", title: "Sharing Information with Third Parties" },
    { id: "opt-out-disclosure", title: "Opt-Out of Disclosure" },
    { id: "tracking", title: "Tracking User Behavior" },
    { id: "automatically-collected", title: "Automatically Collected Information" },
    { id: "coppa", title: "COPPA Compliance" },
    { id: "cookies", title: "Use of Cookies" },
    { id: "links", title: "Links" },
    { id: "security", title: "Security of Personal Information" },
    { id: "deletion", title: "Right to Deletion" },
    { id: "third-party-disconnect", title: "Disconnecting Third Party Accounts" },
    { id: "opt-out-communications", title: "Opt-Out from Communications" },
    { id: "email", title: "E-mail Communications" },
    { id: "changes", title: "Changes to this Statement" },
    { id: "eu-us", title: "EU-US Data Privacy Framework" },
    { id: "gdpr", title: "GDPR Statements" },
    { id: "cross-border", title: "Cross-Border Data Transfers" },
    { id: "third-party-monitors", title: "3rd Party Monitors" },
    { id: "complaints", title: "Contacts and Complaints" },
    { id: "contact", title: "Contact Information" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Sticky Sidebar TOC - Desktop */}
              <aside className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-[#5889D4]/10 max-h-[calc(100vh-7rem)] overflow-y-auto">
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                            activeSection === section.id
                              ? "bg-[#5889D4] text-white"
                              : "text-[#506581] hover:bg-[#5889D4]/10 hover:text-[#5889D4]"
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>

              {/* Mobile TOC - Collapsible */}
              <div className="lg:hidden mb-8">
                <button
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-[#5889D4]/10 flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-[#506581]">Jump to section</span>
                  {isTocOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#5889D4]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#5889D4]" />
                  )}
                </button>
                {isTocOpen && (
                  <div className="mt-3 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-[#5889D4]/10">
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="block w-full text-left px-2.5 py-1.5 rounded-md text-xs text-[#506581] hover:bg-[#5889D4]/10 hover:text-[#5889D4] transition-colors"
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="space-y-8">
                  {/* Introduction */}
                  <div id="introduction" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <p className="text-[#506581] text-base leading-relaxed">
                      Protecting your private information is our priority. This Statement of Privacy applies to https://www.meetanna.com and Anna and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Anna include https://www.meetanna.com and Anna. The Anna website is a technology and AI analytics platform. By using the Anna website, you consent to the data practices described in this statement.
                    </p>
                  </div>

                  {/* Collection of Personal Information */}
                  <div id="collection" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Collection of your Personal Information</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        In order to better provide you with products and services offered on our Site, Anna may collect personally identifiable information, such as your:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>First and Last Name</li>
                        <li>Mailing Address</li>
                        <li>E-mail Address</li>
                        <li>Phone Number</li>
                        <li>Employer</li>
                        <li>Job Title</li>
                      </ul>
                      <p>
                        If you purchase Anna's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.
                      </p>
                      <p>
                        Anna may also collect anonymous demographic information, which is not unique to you, such as your:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Age</li>
                        <li>Gender</li>
                        <li>Race</li>
                        <li>Religion</li>
                        <li>Political Affiliation</li>
                        <li>Household Income</li>
                      </ul>
                      <p>
                        Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Anna's public message boards, this information may be collected and used by others.
                      </p>
                      <p>
                        We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
                      </p>
                    </div>
                  </div>

                  {/* Use of Personal Information */}
                  <div id="use" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Use of your Personal Information</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Anna collects and uses your personal information to operate its website(s) and deliver the services you have requested.
                      </p>
                      <p>
                        Anna may also use your personally identifiable information to inform you of other products or services available from Anna and its affiliates.
                      </p>
                    </div>
                  </div>

                  {/* Sharing Information with Third Parties */}
                  <div id="sharing" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Sharing Information with Third Parties</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Anna does not sell, rent or lease its customer lists to third parties.
                      </p>
                      <p>
                        Anna may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party. Anna may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Anna, and they are required to maintain the confidentiality of your information.
                      </p>
                      <p>
                        Anna may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Anna or the site; (b) protect and defend the rights or property of Anna; and/or (c) act under exigent circumstances to protect the personal safety of users of Anna, or the public.
                      </p>
                      <p>
                        No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                      </p>
                    </div>
                  </div>

                  {/* Opt-Out of Disclosure */}
                  <div id="opt-out-disclosure" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Opt-Out of Disclosure of Personal Information to Third Parties</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        In connection with any personal information, we may disclose to a third party for a business purpose, you have the right to know:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The categories of personal information that we disclosed about you for a business purpose.</li>
                      </ul>
                      <p>
                        You have the right under the California Consumer Privacy Act of 2018 (CCPA) and certain other privacy and data protection laws, as applicable, to opt-out of the disclosure of your personal information. If you exercise your right to opt-out of the disclosure of your personal information, we will refrain from disclosing your personal information, unless you subsequently provide express authorization for the disclosure of your personal information. To opt-out of the disclosure of your personal information, visit this Web page <a href="http://www.TPGinc.com/contact" target="_blank" rel="noopener noreferrer" className="text-[#5889D4] hover:underline">http://www.TPGinc.com/contact</a>.
                      </p>
                    </div>
                  </div>

                  {/* Tracking User Behavior */}
                  <div id="tracking" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Tracking User Behavior</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Anna may keep track of the websites and pages our users visit within Anna, in order to determine what Anna services are the most popular. This data is used to deliver customized content and advertising within Anna to customers whose behavior indicates that they are interested in a particular subject area.
                    </p>
                  </div>

                  {/* Automatically Collected Information */}
                  <div id="automatically-collected" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Automatically Collected Information</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Information about your computer hardware and software may be automatically collected by Anna. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Anna website.
                    </p>
                  </div>

                  {/* COPPA Compliance */}
                  <div id="coppa" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">COPPA Compliance</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        We are committed to protecting the privacy of children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us as described below. We will delete the information from our records.
                      </p>
                      <p>
                        Here are some additional details regarding our COPPA compliance:
                      </p>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong className="text-[#000022]">Information We Collect:</strong> We do not collect any personal information from users under 13.</li>
                        <li><strong className="text-[#000022]">Parental Consent:</strong> We do not require users to create accounts or provide any personal information to use our website/app.</li>
                        <li><strong className="text-[#000022]">Third-Party Disclosure:</strong> We do not share any information collected from users with third parties.</li>
                        <li>
                          <strong className="text-[#000022]">Parent's Rights:</strong> If you are a parent or guardian and have questions about your child's data, you have the right to:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Review the information we collect from your child.</li>
                            <li>Request the deletion of your child's information.</li>
                            <li>Refuse further collection or use of your child's information.</li>
                          </ul>
                        </li>
                      </ul>
                      <p>To exercise these rights, please contact us.</p>
                    </div>
                  </div>

                  {/* Use of Cookies */}
                  <div id="cookies" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Use of Cookies</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        The Anna website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
                      </p>
                      <p>
                        One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Anna pages, or register with Anna site or services, a cookie helps Anna to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Anna website, the information you previously provided can be retrieved, so you can easily use the Anna features that you customized.
                      </p>
                      <p>
                        You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Anna services or websites you visit.
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div id="links" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Links</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                    </p>
                  </div>

                  {/* Security */}
                  <div id="security" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Security of your Personal Information</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Anna secures your personal information from unauthorized access, use, or disclosure. Anna uses the following methods for this purpose:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>SSL Protocol</li>
                      </ul>
                      <p>
                        When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
                      </p>
                      <p>
                        We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
                      </p>
                    </div>
                  </div>

                  {/* Right to Deletion */}
                  <div id="deletion" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Right to Deletion</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Delete your personal information from our records; and</li>
                        <li>Direct any service providers to delete your personal information from their records.</li>
                      </ul>
                      <p>
                        Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
                        <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                        <li>Debug to identify and repair errors that impair existing intended functionality;</li>
                        <li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
                        <li>Comply with the California Electronic Communications Privacy Act;</li>
                        <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
                        <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
                        <li>Comply with an existing legal obligation; or</li>
                        <li>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Third Party Account Disconnection */}
                  <div id="third-party-disconnect" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Disconnecting your Anna Account from Third Party Websites</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        You will be able to connect your Anna account to third party accounts. BY CONNECTING YOUR ANNA ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third party account at any time. Users can do this through our automated system or via email or phone.
                      </p>
                    </div>
                  </div>

                  {/* Opt-Out Communications */}
                  <div id="opt-out-communications" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Opt-Out & Unsubscribe from Third Party Communications</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from third-party partners of Anna by contacting us.
                    </p>
                  </div>

                  {/* Email Communications */}
                  <div id="email" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">E-mail Communications</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        From time to time, Anna may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Anna or click on a link therein.
                      </p>
                      <p>
                        If you would like to stop receiving marketing or promotional communications via email from Anna, you may opt out of such communications by clicking the unsubscribe button at the bottom of every email we send, by email or phone.
                      </p>
                    </div>
                  </div>

                  {/* Changes to Statement */}
                  <div id="changes" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Changes to this Statement</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Anna reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
                    </p>
                  </div>

                  {/* EU-US Data Privacy Framework */}
                  <div id="eu-us" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">EU-US Data Privacy Framework Statement</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Anna complies with the EU-US Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States. Anna has certified to the Department of Commerce that it adheres to the Privacy Shield Principles. If there is any conflict between the terms in this privacy policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern. To learn more about the Privacy Shield program, and to view our certification, please visit <a href="https://www.privacyshield.gov/" target="_blank" rel="noopener noreferrer" className="text-[#5889D4] hover:underline">https://www.privacyshield.gov/</a>
                      </p>
                      <p>
                        In compliance with the Privacy Shield Principles, Anna commits to resolve complaints about our collection or use of your personal information. European Union individuals with inquiries or complaints regarding our Privacy Shield policy should first contact Anna.
                      </p>
                      <p>
                        Anna has further committed to refer unresolved privacy complaints under the EU-US Privacy Shield Framework to an independent dispute resolution mechanism operated by the BBB National Programs, Inc. If you do not receive timely acknowledgment of your complaint, or if your complaint is not satisfactorily addressed, please visit <a href="https://www.bbb.org/EU-privacy-shield/for-eu-consumers" target="_blank" rel="noopener noreferrer" className="text-[#5889D4] hover:underline">https://www.bbb.org/EU-privacy-shield/for-eu-consumers</a> for more information and to file a complaint.
                      </p>
                      <p>
                        Finally, as a last resort and in limited situations, EU individuals may seek redress from the Privacy Shield Panel, a binding arbitration mechanism.
                      </p>
                    </div>
                  </div>

                  {/* GDPR */}
                  <div id="gdpr" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">General Data Protection Regulation (GDPR) Statements</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Anna is committed to complying with the General Data Protection Regulation (GDPR) when dealing with personal data of individuals located within the European Union. We have implemented appropriate technical and organizational measures to ensure that personal data processed by Anna is protected against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
                    </p>
                  </div>

                  {/* Cross-Border Data Transfers */}
                  <div id="cross-border" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Cross-Border Data Transfers Statements</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Anna may transfer personal data to countries outside of the European Union, including the United States. In such cases, we will ensure that appropriate safeguards are in place to protect the personal data, such as Standard Contractual Clauses approved by the European Commission.
                    </p>
                  </div>

                  {/* 3rd Party Monitors */}
                  <div id="third-party-monitors" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">3rd Party Monitors (i.e. Google Tracking) Data Security Statements</h2>
                    <p className="text-[#506581] text-base leading-relaxed">
                      Anna may use third-party monitoring services, such as Google Analytics, to track and analyze the usage of our website. These services may use cookies or other tracking technologies to collect information about your use of our website, including your IP address, browser type, and operating system. Anna does not share this information with any third parties, and we take appropriate measures to ensure that the data collected by these services is secure and protected.
                    </p>
                  </div>

                  {/* Contacts and Complaints */}
                  <div id="complaints" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Contacts and Complaints Section</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        If you have any questions, concerns, or complaints regarding our privacy policy or the handling of your personal data, please contact Anna.
                      </p>
                      <p>
                        We will make every effort to address your concerns and resolve any issues you may have in a timely and satisfactory manner.
                      </p>
                      <p>
                        If there is any additional information or sections you would like to see included in our privacy policy, please do not hesitate to contact us at <a href="mailto:privacy@annacx.com" className="text-[#5889D4] hover:underline">privacy@annacx.com</a>. We are committed to maintaining a comprehensive and up-to-date privacy policy that reflects our ongoing commitment to protecting the personal data of our users.
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div id="contact" className="bg-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#000022] mb-6">Contact Information</h2>
                    <div className="space-y-4 text-[#506581] text-base leading-relaxed">
                      <p>
                        Anna welcomes your questions or comments regarding this Statement of Privacy. If you believe that Anna has not adhered to this Statement, please contact Anna at:
                      </p>
                      <div className="space-y-2">
                        <p className="font-bold text-[#000022]">Anna</p>
                        <p>200 Westside Square, Suite 610</p>
                        <p>Huntsville, AL 35806</p>
                        <p>Email Address: <a href="mailto:privacy@annacx.com" className="text-[#5889D4] hover:underline">privacy@annacx.com</a></p>
                        <p>Telephone number: <a href="tel:256-535-2000" className="text-[#5889D4] hover:underline">256-535-2000</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Information */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-[#5889D4]/10 text-center">
                    <p className="text-[#506581] text-sm mb-2">
                      Effective as of March 8, 2024
                    </p>
                    <p className="text-[#506581] text-xs">
                      © Copyrights 2024 Anna. | All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}