import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Link from "next/link";

export default function CookiePolicySection() {
  // Cookie Policy data structure
  const cookiePolicyData = {
    header: {
      title: "Cookie Policy",
    },
    sections: [
      {
        number: 1,
        title: "Use of cookies",
        content: [
          "A cookie is a small text file which is placed onto your computer (or other electronic device) when you access our website. We use cookies on this website to:",
          "• allow you to navigate and use our website to improve your access to the website and gain insight into the market",
          "• obtain information about your preferences, online movements and use of the internet",
          "• gather statistical information about how you use the website including and other visitors",
          "• build our marketing and advertising personas more effectively by providing tailored adverts and information that are personalized to your interests and personalisation",
          "• store preferences.",
        ],
        additionalInfo: [
          "In addition to cookies which send information to us, we also use cookies which collect information and send it to third parties (see use of Google Analytics below). We treat the information which cookies send to be considered 'personal data'. We obtain your consent to our use of these cookies unless a cookie is specifically identified by you, and the relevant personal data has relevant legal guidance for us to rely on as our lawful basis for processing.",
          "When you visit or log in to the website, cookies and similar technologies may be placed on or of the data partners or vendors in accordance below activities with other personal information received from you, in accordance with this Cookie Policy and our website Terms & Conditions. The website operates under Californian consent compliance under the new cookies consent banner and any compliant data privacy personal use.",
          "You can read our full privacy policy at the page entitled 'Privacy Policy' through the footer nav on the left or by clicking [here].",
          "In most cases, we will need your consent to allow to use cookies on this website. The exception is where the cookie is essential in order for us to provide you with a service you have requested, for example, to remember what is in your shopping basket.",
          "This website uses first party cookies and third party cookies.",
          "You have a variety of tools to control cookies, web beacons and similar technologies, including browser controls to block and delete cookies and controls from some third-party analytics service providers to opt out of data collection through web beacons and similar technologies. Your browser and other choices you have relating to cookies or website functioning may also have information systems that automatically identify page users with our products.",
          "We also use cookies and similar page object identifiers that allow the collection and personal-data pertaining to us to our website privacy period. If you visit this website after this notification has been displayed to you, we will assume that you consent to our use of cookies for the purposes described in this website cookie policy and our website terms of use.",
          "For more information on how to manage cookies through your browser settings please go to the Network and Data settings.",
        ],
      },
      {
        number: 2,
        title: "Third-party cookies",
        content: [
          "We use third-party systems which may place their own cookies on our website, for example, Facebook, Google Ads, CrazyEgg, Mixpanel Social, Wistia, These third-party suppliers are responsible for the cookies they set on our site. If you want further information, please go to the website for the relevant third party.",
          "You will find additional information in the listed below:",
        ],
      },
      {
        number: 3,
        title: "Description of cookies",
        content: [
          "The table below provides more information about the cookies we use and why.",
        ],
        table: {
          headers: ["Name of cookie ", "Owner", "Purpose of the cookie"],
          rows: [
            {
              name: "Google Analytics",
              type: "Google",
              purpose:
                "This is a web analytics service provided by Google Inc which allows cookies to deliver unique visitors (users) and associated advertising materials designed to directly support Google's platform. The service operates analytics or other similar services. Browsers or advertising and tags will not have general visitor or analytics platform.",
            },
            {
              name: "Facebook Pixel",
              type: "Facebook",
              purpose: "Advertising and re-marketing pixels.",
            },
            {
              name: "Mixpanel Developers",
              type: "Mixpanel",
              purpose:
                "It allows users to access whether codes can be used through third-party social networking problems. Embedded. This is controlled. That allows those social media sites to use metrics information to serve-targeted advertising problems embedded.",
            },
            {
              name: "Bing Ads Conversion",
              type: "Google",
              purpose: "Allows bing users to reach or re-reach advertising.",
            },
            {
              name: "Wistia",
              type: "Wistia",
              purpose: "Cloud hosting service.",
            },
            {
              name: "Google Analytics",
              type: "Twitter",
              purpose: "Web Analytics",
            },
            {
              name: "User visitor",
              type: "CrazyEgg",
              purpose: "Heatmaps to track activity",
            },
            {
              name: "AdRoll",
              type: "AdRoll",
              purpose: "Advertising for the purposes of retargeting",
            },
            {
              name: "HubSpot",
              type: "HubSpot",
              purpose: "Advertising for the purposes of retargeting",
            },
            {
              name: "Intercom",
              type: "Intercom",
              purpose: "Powering customer/client",
            },
            {
              name: "Meta Social",
              type: "Meta Social",
              purpose: "Customer support and correspondences",
            },
            {
              name: "Stripe",
              type: "Stripe",
              purpose: "Customer support financial and correspondences",
            },
          ],
        },
      },
      {
        number: 4,
        title: "How to turn off cookies",
        content: [
          "If you do not want to accept cookies you can change your browser settings so that cookies are not accepted. For more details, please be aware that you may lose some of the functionality of this website. For more information about cookies please see http://www.aboutcookies.org.",
        ],
      },
    ],
  };

  // Helper function to render text with links
  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    let processedText = text;

    return processedText.split(" ").map((word, index) => {
      if (urlRegex.test(word)) {
        return (
          <Link
            key={index}
            href={word}
            className="text-gray-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </Link>
        );
      }
      return word + " ";
    });
  };

  return (
    <FullContainer className=" bg-white">
      <Container className="mt-36 text-center mb-12">
        <h1 className="text-4xl font-bold leading-relaxed text-gray-800 mb-8">
          {cookiePolicyData.header.title}
        </h1>
      </Container>
      <FullContainer className=" bg-gray-100 ">
        <Container className="px-5">
          <div className="py-20">
            {/* Sections */}
            {cookiePolicyData.sections.map((section) => (
              <div key={section.number} className="mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-6 ">
                  {section.number}. {section.title}
                </h2>

                {/* Regular content */}
                {section.content &&
                  section.content.map((paragraph, index) => (
                    <div
                      key={index}
                      className="text-gray-600 text-[14px] ml-2 mb-4 leading-relaxed"
                    >
                      {paragraph.startsWith("•") ? (
                        <div className="ml-2">{paragraph}</div>
                      ) : (
                        <p>{renderTextWithLinks(paragraph)}</p>
                      )}
                    </div>
                  ))}

                {/* Additional info for section 1 */}
                {section.additionalInfo &&
                  section.additionalInfo.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-[14px] mb-4 leading-relaxed"
                    >
                      {renderTextWithLinks(paragraph)}
                    </p>
                  ))}

                {/* Table for section 3 */}
                {section.table && (
                  <div className="mt-6 overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-800 border-collapse">
                      <thead>
                        <tr>
                          {section.table.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-6 py-4 text-left text-[14px] font-medium text-gray-600 tracking-wider border border-gray-800 whitespace-nowrap"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 font-medium text-gray-600 text-[14px] border border-gray-800 whitespace-nowrap">
                              {row.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600 text-[14px] border border-gray-800 whitespace-nowrap">
                              {row.type}
                            </td>
                            <td className="px-6 py-4 text-gray-600 text-[14px] border border-gray-800 whitespace-nowrap">
                              {row.purpose}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

            {/* Footer */}
            <div className="pt-8 mt-12 text-center">
              <p className="text-gray-600 text-sm">
                For more information about managing cookies, please visit your
                browser's help section or{" "}
                <Link
                  href="http://www.aboutcookies.org"
                  className=" text-gray-600 underline"
                >
                  www.aboutcookies.org
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FullContainer>
    </FullContainer>
  );
}
