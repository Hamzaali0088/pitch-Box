import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

export default function PrivacyPolicySection() {
  // Privacy policy data structure
  const privacyPolicyData = {
    header: {
      title: "Privacy Policy",
      subtitle: "Pitchbox LLC Privacy Notice",
    },
    introduction: {
      gdprCompliance:
        "Your privacy is important to us and we respect your personal information and comply with the General Data Protection Regulation (EU 679/2016) (GDPR).",
      mainPoints: [
        "who we are;",
        "how and why we collect, store, use and share personal information;",
        "your rights; and",
        "how to contact us and supervisory authorities in the event you have a complaint.",
      ],
      termsAndConditions:
        "Any personal information we collect is held with due care and security. Your visit to our website and your use of any of the services we provide is also subject to our website terms and conditions a copy of which can be found here https://pitch-box.sitebuilderz.com/terms/ and to our cookie policy which can be found here https://pitch-box.sitebuilderz.com/cookie-policy/",
      scope:
        "This privacy policy applies to all Pitchbox services, websites, apps, and software.",
      productSpecific:
        "Please read the product-specific details in this privacy notice, which provide additional information about some of Pitchbox products and the information collected from you in relation to those products.",
    },
    sections: [
      {
        number: 1,
        title: "WHO WE ARE",
        content: [
          "Pitchbox LLC with its registered office at 626 Jacksonville Road, Suite 105, Warminster, Pennsylvania, 18974, USA collects, uses and is responsible for certain personal information about you.",
          "When we do so we are regulated under the GDPR which applies across the European Union (including in the United Kingdom) and we are responsible as 'controller' of that personal information for the purposes of those laws.",
        ],
      },
      {
        number: 2,
        title: "PERSONAL DATA WE COLLECT",
        subsections: [
          {
            number: "2.1",
            title: "DATA COLLECTION",
            content: [
              "Pitchbox collects data to operate effectively and provide you the best experiences with our products. In the course of providing our marketing service to you we collect the following personal information:",
            ],
            listItems: [
              "Information you submit when you create a Pitchbox account.",
              "Information you submit to us to administer your organization's licensing account.",
              "Information you submit to raise a search query to Pitchbox.",
              "Information you submit when you register for a Pitchbox event.",
              "Information you submit when you upload a document to Pitchbox.",
              "Information you submit when you purchase a Pitchbox subscription or contact us for support.",
              "Information collected through our recording of how you interact with our products by, for example, using technologies like cookies, and receiving error reports or usage data from software running on your device. We also obtain public data from third parties.",
              "Information you submit when you open up a Pitchbox account. With a Pitchbox account, you can sign into Pitchbox products, as well as those of select Pitchbox Partners. Signing into your account enables improved personalization, provides seamless and consistent experiences across products and devices, and enable other enhanced features and settings.",
            ],
            additionalContent: [
              "When you sign into your account to access a product, Pitchbox creates a record of that sign in. If you sign into a third-party service with your Pitchbox account, you will be asked to consent to share the account data required by that service.",
              "The types of information we collect includes name, address, email address, telephone contact numbers and dates, account login details and social media profile information.",
            ],
          },
          {
            number: "2.2",
            title:
              "PRODUCT SPECIFIC DATA COLLECTION PLATFORM AND DEVELOPER PRODUCTS",
            content: [
              "Platform and Developer Products are Pitchbox products and related software offered and designed primarily for use by organizations, developers, and sole proprietors. They include:",
            ],
            listItems: [
              "Software as a Service (SaaS) referred to as Platform in the Pitchbox Terms of Services (TOS), such as Pitchbox, Pitchbox App, Pitchbox Plugin, Pitchbox Browser Add-on, for which an organization (our customer) contracts with Pitchbox for the services.",
              'Developer products, such as Pitchbox API ("Developer Products").',
            ],
          },
          {
            number: "2.3",
            title: "PLATFORM AND PRODUCTS SPECIFIC DATA COLLECTION",
            content: [
              "When a customer tries, purchases, uses, or subscribes to Platform and Developer Products or obtains support for such products, Pitchbox collects data to provide the service, including uses compatible with providing the service, provide the best experiences with our products, operate our business, and communicate with the customer. For example:",
            ],
            listItems: [
              "When a customer engages with a Pitchbox sales representative, we collect the customer's name and contact data, along with information about the customer's organization, to support that engagement.",
              "When a customer interacts with a Pitchbox support professional, we collect usage data and/or error reports to diagnose and resolve problems.",
              "When a customer pays for products, we collect contact and payment data to process the payment.",
              "When a customer receives communications from Pitchbox, we use data to personalize the content of the communication.",
            ],
            additionalContent: [
              "The Platform and Developer Products enable you to purchase, subscribe to or use other products and online services from Pitchbox or third parties with different privacy practices, and those other products and online services will be governed by their respective privacy notices and policies.",
            ],
          },
          {
            number: "2.4",
            title: "GOOGLE API SERVICES USER DATA POLICY",
            content: [
              "Pitchbox's use and transfer to any other app of information received from Google Accounts will adhere to Google API Services User Data Policy, including the Limited Use requirements.",
            ],
          },
          {
            number: "2.5",
            title: "THE PITCHBOX BROWSER PLUG IN AND API",
            content: [
              "We collect the following data in relation to the Pitchbox Browser and API.",
            ],
            specialItems: [
              {
                label: "Browser Plugin",
                content:
                  "email address, first name, last name, company name. If you are not an existing Pitchbox customer you will have to authenticate yourself via LinkedIn (Log in with LinkedIn)",
              },
              {
                label: "API",
                content:
                  "Pitchbox collects the same data for the Pitchbox API as it collects in the Pitchbox app in 2.3 above.",
              },
            ],
          },
          {
            number: "2.6",
            title: "PITCHBOX",
            content: [
              "Pitchbox is an influencer marketing and communications platform. You can use our software and services to create, store and share documents, as well as communicate with others.",
              "Rather than residing as a static software program on your device, key components of Pitchbox are cloud-based, and both cloud and local elements of Pitchbox are updated regularly, providing you with the latest improvements and features.",
              "In order to provide this computing experience, we collect data about you and your device, and the way you use Pitchbox.",
              "Note that if your Pitchbox account is managed by your organization (such as your employer or client), your organization may use centralized management tools provided by Pitchbox or others to control account settings, account policies, software updates, data collection by us or the organization, or other aspects of your account.",
            ],
          },
          {
            number: "2.7",
            title: "MICROSOFT CLARITY",
            content: [
              "We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the Microsoft Privacy Statement.",
            ],
          },
        ],
      },
      {
        number: 3,
        title: "HOW WE USE PERSONAL DATA",
        content: ["We use personal information to:"],
        listItems: [
          "To provide our products and services to you.",
          "Where you have given explicit consent we may use your personal information to send you information about products or services that may be of interest to you or to provide you information about your account and any security updates we may have.",
        ],
      },
      {
        number: 4,
        title: "WHO WE SHARE YOUR PERSONAL INFORMATION WITH",
        content: ["We will only share personal information with:"],
        listItems: [
          "Law enforcement or other public authorities and regulators if required by applicable law.",
          "We also share data with Pitchbox-controlled subsidiaries and vendors working on our behalf.",
        ],
        vendors: [
          "Amazon AWS – hosting & data storage",
          "Google Cloud Services",
          "MailChimp – email marketing to our customers",
          "Copper – CRM/Sales",
          "Trello – Customer success / Sales",
          "Help Scout – chat and customer support",
          "PayPal – payment processing",
          "Recurly – payment processor for taking payment from our customers",
          "Google Analytics – website analytics",
          "Google Tag Manager – website analytics",
          "Microsoft – website analytics",
        ],
      },
      {
        number: 5,
        title: "WHETHER INFORMATION HAS TO BE PROVIDED BY YOU, AND IF SO WHY",
        content: [
          "You will be required to provide your name, address, email address and telephone number. If you choose not to provide this information to us, we may not be able to provide our services to you.",
        ],
      },
      {
        number: 6,
        title: "HOW LONG YOUR PERSONAL INFORMATION WILL BE KEPT",
        content: [
          "We will hold your personal data in accordance with applicable laws and for as long as we need your data to provide services. Where we do not require your data we will delete it.",
        ],
      },
      {
        number: 7,
        title: "REASONS WE CAN COLLECT AND USE YOUR PERSONAL INFORMATION",
        content: [
          "We rely on a combination of legal bases to collect, use, process and store your personal data. These include consent (which we may collect at the point of entering a contract with you), legitimate interests and contract performance.",
        ],
      },
      {
        number: 8,
        title: "YOUR RIGHTS",
        content: [
          "Under the GDPR you have a number of important rights. In summary, those include rights to:",
        ],
        rightsContent: {
          optOut: {
            title: "Opt-out / object to processing",
            content:
              "You have the following opt-out rights/rights to object to processing which are set out in more detail below:",
            rights: [
              "to object to direct marketing;",
              "to object to processing on the basis of a legitimate interest;",
              "to withdraw consent;",
              "the right of erasure; and",
              "the right to restriction of processing.",
            ],
            contactDetails: {
              title:
                "Our contact details for exercising your opt-out rights/rights to object to processing",
              content:
                "You can exercise your opt-out rights/rights to object to processing as follows:",
              methods: [
                "In the case of the processing of personal data for direct marketing, by clicking here: https://goo.gl/forms/zwU4chlDz0Kgnewm1",
                "In any case, by:",
                "emailing us at dataprotection@pitchbox.com",
                "phoning us on +1 215-475-5096 between 9:00 AM and 5:00 PM EST; or",
                "writing to us at Pitchbox, 626 Jacksonville Road, Suite 105, Warminster PA 18974 USA",
              ],
            },
          },
          directMarketing: {
            title: "Your right to object to direct marketing",
            content: [
              "You have the right to object at any time to processing of personal data concerning you for the purposes of direct marketing. This includes the right to object to processing which amounts to profiling and which is related to direct marketing.",
              "You can object to this kind of processing by clicking here: https://goo.gl/forms/zwU4chlDz0Kgnewm1 or using the contact details above.",
            ],
          },
        },
      },
    ],
    contact: {
      title: "HOW TO CONTACT US",
      content: [
        "Please contact us if you have any questions about this privacy notice or the information by emailing us at dataprotection@pitchbox.com or writing to us at 626 Jacksonville Road, Suite 105, Warminster, PA 18974, USA.",
        "If we make changes to this privacy policy we will let you know by placing a notice on our website. You may also wish to check this policy from time to time for any updates.",
      ],
    },
    footer: {
      company: "PITCHBOX LLC",
      date: "November 4, 2021",
    },
  };

  // Helper function to render links
  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    return text.split(/(\s+)/).map((word, index) => {
      if (urlRegex.test(word)) {
        return (
          <a
            key={index}
            href={word}
            className="text-gray-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
        );
      } else if (emailRegex.test(word)) {
        return (
          <a
            key={index}
            href={`mailto:${word}`}
            className="text-gray-800 underline"
          >
            {word}
          </a>
        );
      }
      return word;
    });
  };

  return (
    <>
      <FullContainer className=" bg-white py-12">
        <Container className="text-center mt-20">
          <h1 className="text-4xl font-semibold leading-relaxed text-gray-900 mb-2">
            {privacyPolicyData.header.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {privacyPolicyData.header.subtitle}
          </p>
        </Container>
      </FullContainer>
      <FullContainer className="bg-gray-100">
        <Container className="px-5 py-16">
          {/* Introduction */}
          <div className="text-[14px] tracking-wide mb-8 text-gray-600 leading-relaxed">
            <p className="mb-4">
              {privacyPolicyData.introduction.gdprCompliance}
            </p>
            <p className="mb-6">
              We ask that you read this privacy notice carefully as it contains
              important information on:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
              {privacyPolicyData.introduction.mainPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <p className="mb-4">
              {renderTextWithLinks(
                privacyPolicyData.introduction.termsAndConditions
              )}
            </p>

            <p className="mb-4 text-sm text-gray-600">
              {privacyPolicyData.introduction.scope}
            </p>

            <p className="mb-8 text-gray-600">
              {privacyPolicyData.introduction.productSpecific}
            </p>
          </div>

          {/* Sections */}
          {privacyPolicyData.sections.map((section) => (
            <div key={section.number} className="mb-8">
              <h2 className="text-2xl leading-relaxed font-medium text-gray-900 mb-4">
                {section.number}. {section.title}
              </h2>

              {/* Regular content */}
              {section.content &&
                section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-[14px] mb-4 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

              {/* List items */}
              {section.listItems && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-[14px] mb-4">
                  {section.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Vendors grid */}
              {section.vendors && (
                <div className="flex flex-col justify-center gap-2 ml-7 mt-4">
                  {section.vendors.map((vendor, index) => (
                    <p key={index} className="text-gray-600 text-[14px]">
                      • {vendor}
                    </p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections &&
                section.subsections.map((subsection) => (
                  <div key={subsection.number} className="mb-6">
                    <h3 className="text-xl font-medium leading-relaxed tracking-wide text-gray-900 mb-4">
                      {subsection.number} {subsection.title}
                    </h3>

                    {subsection.content &&
                      subsection.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 text-[14px] mb-4 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}

                    {subsection.listItems && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-[14px] mb-4">
                        {subsection.listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {subsection.specialItems && (
                      <div className="space-y-2 text-[14px]  leading-relaxed">
                        {subsection.specialItems.map((item, index) => (
                          <p className="text-gray-600" key={index}>
                            <strong className="text-gray-900">
                              {item.label}
                            </strong>
                            – {item.content}
                          </p>
                        ))}
                      </div>
                    )}

                    {subsection.additionalContent &&
                      subsection.additionalContent.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 text-[14px] leading-relaxed mb-4 "
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                ))}

              {/* Rights content for section 8 */}
              {section.rightsContent && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 text-[14px] leading-relaxed mb-3">
                      {section.rightsContent.optOut.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] mb-3 leading-relaxed">
                      {section.rightsContent.optOut.content}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[14px] text-gray-600 mb-4">
                      {section.rightsContent.optOut.rights.map(
                        (right, index) => (
                          <li key={index}>{right}</li>
                        )
                      )}
                    </ul>

                    <h4 className="font-bold text-[14px]  text-gray-900 mb-2">
                      {section.rightsContent.optOut.contactDetails.title}
                    </h4>
                    <p className="text-gray-600 text-[14px] mb-2 leading-relaxed">
                      {section.rightsContent.optOut.contactDetails.content}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[14px] text-gray-600 mb-4">
                      {section.rightsContent.optOut.contactDetails.methods.map(
                        (method, index) => (
                          <li key={index}>{renderTextWithLinks(method)}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[14px] text-gray-900 mb-3">
                      {section.rightsContent.directMarketing.title}
                    </h3>
                    {section.rightsContent.directMarketing.content.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 text-[14px] mb-2 leading-relaxed"
                        >
                          {renderTextWithLinks(paragraph)}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-2xl leading-relaxed font-medium text-gray-900 mb-4">
              9. {privacyPolicyData.contact.title}
            </h2>
            {privacyPolicyData.contact.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-[14px] mb-4 leading-relaxed"
              >
                {renderTextWithLinks(paragraph)}
              </p>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl leading-relaxed font-medium text-gray-900 mb-4">
              10. SECURITY VULNERABILITY FINDING SUBMITTAL
            </h2>
            <p className="text-gray-600 text-[14px] mb-4 leading-relaxed">
              If you are a Pitchbox user and discover security vulnerabilities,
              please report to Pitchbox via email at{" "}
              <span className="italic">security@pitchbox.com.</span>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 space-y-3">
            <p className="text-[14px] font-bold text-gray-800">
              {privacyPolicyData.footer.company}
            </p>
            <p className="text-[14px] font-bold text-gray-800">
              {privacyPolicyData.footer.date}
            </p>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
