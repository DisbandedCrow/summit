import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(
    "0-0",
  );

  const faqCategories: FAQCategory[] = [
    {
      title: "About Anna",
      questions: [
        {
          question: "What is Anna exactly?",
          answer:
            "Anna is a proprietary emotional intelligence language model, built on over 20 years of behavioral data. Think of it as a next-gen AI that not only understands words—but reads the emotional signals behind them. She's ready on day one to deliver measurable outcomes for customer experience teams.",
        },
        {
          question:
            "How is Anna different from other AI or LLMs?",
          answer:
            "Unlike generic AI, Anna's emotional intelligence is built in. She understands tone, intent, and behavioral cues—giving her the ability to coach, analyze, and predict human interactions in a way that truly impacts business outcomes.",
        },
        {
          question: "What makes Anna unique?",
          answer:
            "Anna combines emotional intelligence, large language modeling, and decades of behavioral data to deliver day-one coaching and transformation. Most platforms stop at insight—Anna delivers action.",
        },
      ],
    },
    {
      title: "Getting Started",
      questions: [
        {
          question:
            "How does Anna make it easy for us to get started?",
          answer:
            "Anna is day-one ready. She simplifies the process by automating assessments of every customer interaction, identifying inefficiencies and coaching opportunities at every level of your organization.",
        },
        {
          question: "How fast can we see results or ROI?",
          answer:
            "Most clients see ROI within weeks. Anna accelerates speed to proficiency with continuous, insight-driven coaching and behavior-based recommendations.",
        },
        {
          question: "Do I need a lot of data to get started?",
          answer:
            "Nope. Anna can begin with a sample set of calls, chats, or customer interactions and still deliver powerful insights. The more you feed her over time, the smarter she becomes.",
        },
        {
          question:
            "Can Anna integrate with our existing systems?",
          answer:
            "Yes. Anna is designed to work alongside your current tech stack, whether it's CRM platforms, QA tools, or communication systems.",
        },
        {
          question: "Is Anna secure and compliant?",
          answer:
            "Absolutely. Anna is built with enterprise-grade security and can be configured to meet industry compliance standards, including HIPAA, GDPR, and others.",
        },
      ],
    },
    {
      title: "Business Impact",
      questions: [
        {
          question:
            "How does Anna help our call center or service team?",
          answer:
            "Anna provides real-time conversational intelligence and predictive analytics that coach your team and identify what's working—or not. This leads to improvements in NPS, CSAT, efficiency, compliance, and sales conversion.",
        },
        {
          question:
            "What kind of business outcomes does Anna improve?",
          answer: (
            <div>
              <p className="mb-3">Key outcomes include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>NPS (Net Promoter Score)</li>
                <li>CSAT (Customer Satisfaction)</li>
                <li>Call Efficiency</li>
                <li>First Contact Resolution</li>
                <li>Sales Conversion</li>
                <li>Compliance & Risk Mitigation</li>
              </ul>
            </div>
          ),
        },
        {
          question:
            "Can Anna handle large volumes of data and interactions?",
          answer:
            "Yes. Anna is built for enterprise scale. She can analyze unlimited interactions—calls, chats, or texts—and provide behavior-based insight and recommendations.",
        },
        {
          question: "What types of companies use Anna?",
          answer:
            "Anna is used by organizations across healthcare, insurance, financial services, retail, and more—anywhere customer interaction quality and outcomes matter.",
        },
        {
          question: "How is coaching delivered through Anna?",
          answer:
            "Anna identifies behavior patterns and provides coaching insights through dashboards or recommendations. Your managers can use them directly or integrate them into training processes.",
        },
      ],
    },
    {
      title: "Anna vs. Other Solutions",
      questions: [
        {
          question:
            "Why should I choose Anna over another analytics or QA tool?",
          answer:
            "Anna blends AI, emotional intelligence, and CX expertise. She's proven across industries, delivering fast ROI by improving human performance through intelligent coaching and analytics.",
        },
        {
          question: "What if we already have a QA system?",
          answer:
            "Anna complements and elevates your current tools. She adds emotional intelligence and coaching insights that most QA systems can't provide.",
        },
        {
          question:
            "How is Anna different from traditional QA tools?",
          answer:
            "Traditional QA is manual, time-consuming, and subjective. Anna automates assessments across 100% of interactions, uses emotional intelligence to assess tone and behavior, and provides coaching based on real outcomes. We have a proven scientific methodology, so you get results day one. Other tools and companies are starting from square one: what are we listening for, what is the form, what is the definition, then training the AI tool to listen, score, and evaluate. We already have that built and built on 20 + years of data, varied industries, allowing us to provide you immediate ROI.",
        },
        {
          question:
            "How is Anna different from a typical chatbot?",
          answer: (
            <>
              Chatbots are designed for customer self-service and follow scripts. Anna focuses on evaluating and coaching the <strong>human</strong> side of the interaction—helping your agents perform better, not replacing them. However, Ask Anna is our chatbot which enables our users in our community to interact and learn our definitions of compendium, interact with the data and ask questions on how to coach and develop, even playbooks for success.
            </>
          ),
        },
        {
          question: "Is Anna a conversational analytics tool?",
          answer:
            "Yes—and more. While Anna offers advanced analytics, she goes further by embedding coaching, behavior models, and predictive insights that lead directly to business impact.",
        },
      ],
    },
    {
      title: "Understanding the Technology",
      questions: [
        {
          question: "What is a QAAI platform?",
          answer:
            "QAAI stands for Quality Assurance Artificial Intelligence. It's a platform that uses AI to evaluate and improve the quality of customer interactions, helping teams deliver better outcomes through smarter coaching, analysis, and automation.",
        },
        {
          question: "What is a large language model (LLM)?",
          answer:
            "A large language model is a type of AI trained on massive amounts of text data. It understands, generates, and interprets human language. Anna is an LLM with emotional intelligence specifically designed for customer experience applications.",
        },
        {
          question: "What is emotional intelligence in AI?",
          answer:
            "Emotional intelligence in AI means the system can detect tone, intent, sentiment, and behavioral cues—not just words. Anna uses this capability to offer coaching and insights that reflect the human side of conversations.",
        },
        {
          question:
            "What types of AI platforms exist in the contact center space?",
          answer: (
            <div>
              <p className="mb-3">
                There are several types, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Chatbots & Virtual Agents: Handle basic
                  inquiries through scripted interactions.
                </li>
                <li>
                  Speech Analytics Platforms: Transcribe and
                  analyze voice calls for sentiment and
                  keywords.
                </li>
                <li>
                  Workforce Management AI: Optimizes staffing
                  and scheduling using forecasting algorithms.
                </li>
                <li>
                  Conversational Intelligence Platforms: Provide
                  post-call analysis for coaching and QA.
                </li>
                <li>
                  Quality Assurance AI (like Anna): Uses LLMs
                  and emotional intelligence to evaluate and
                  coach interactions at scale.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#4070B8]">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-[#506581] max-w-2xl mx-auto text-[16px]">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10 sm:space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#506581] inline-block relative">
                  {category.title}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#5889D4] to-[#BDDD8D]"></span>
                </h3>
              </div>

              {/* Questions in this category */}
              <div className="space-y-3 sm:space-y-4">
                {category.questions.map(
                  (faq, questionIndex) => {
                    const id = `${categoryIndex}-${questionIndex}`;
                    return (
                      <div
                        key={id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#5889D4]/20 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-3 sm:gap-4 text-left hover:bg-[#5889D4]/5 transition-colors duration-200"
                        >
                          <span className="text-sm sm:text-base font-semibold text-[#202328] pr-2 sm:pr-4 leading-relaxed">
                            {faq.question}
                          </span>
                          <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5889D4]/10 flex items-center justify-center transition-all duration-300">
                            {openIndex === id ? (
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-[#5889D4]" />
                            ) : (
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-[#5889D4]" />
                            )}
                          </span>
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            openIndex === id
                              ? "max-h-[600px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0">
                            <div className="text-sm sm:text-base text-[#506581] leading-relaxed">
                              {typeof faq.answer ===
                              "string" ? (
                                <p>{faq.answer}</p>
                              ) : (
                                faq.answer
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-[#506581] mb-6">
            Still have questions?{" "}
            <a
              href="mailto:sales-team@annacx.com"
              className="text-[#5889D4] hover:text-[#4070B8] font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200"
            >
              Get in touch with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}