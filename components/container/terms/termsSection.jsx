import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

const TermsSection = () => {
  // Structured data object for Terms of Service
  const termsData = {
    title: "Terms Of Service",
    introduction:
      "PLEASE READ THE FOLLOWING TERMS AND POLICIES CAREFULLY. WHEN YOU USE OUR WEBSITE YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND POLICIES.",
    websiteOperator:
      "This website (the 'Website') is operated by FilXcom LLC. (the 'Company').",
    sections: [
      {
        title: "Illegal or Obscene Usage is Strictly Prohibited",
        content:
          "You must not abuse, harass, threaten, impersonate or intimidate other users of our website. You may not use the Company's Website to find, make or advertise criminal or illegal activities for business purposes not conforming with all applicable regulations as the conduct and accessibilties prohibit. Should you be discovered undertaking any such activities, we will report the findings to the relevant regulatory and law enforcement agencies. The Company is not responsible for the content of any ads on the website.",
      },
      {
        title: "Electronic Communications",
        content:
          "When you visit the FilXcom or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on this website. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.",
      },
      {
        title: "Copyright",
        content:
          "All content included on this Site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Company, protected by United States and international copyright laws. The compilation of all content on this site is the exclusive property of the Company and protected by U.S. and international copyright laws. All software used on this site is the property of Company or its software suppliers and protected by United States and international copyright laws.",
      },
      {
        title: "Trademarks",
        content:
          "All trademarks of Company, LLC and all other Company's graphics, logos, page headers, button icons, scripts, and service names are trademarks, registered trademarks, or trade dress of Company or FilXcom in the United States and other countries. Company's trademarks and trade dress may not be used in connection with any product or service that is not Company's, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits Company. All other trademarks not owned by Company or FilXcom that appear on this site are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Company or FilXcom.",
      },
      {
        title: "License and Site Access",
        content:
          "Company grants you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent. This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Company. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Company without express written consent. You may not use any meta tags or any other 'hidden text' utilizing Company's name or trademarks without the express written consent of Company. Any unauthorized use terminates the permission or license granted by Company. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the home page of Company as long as the link does not portray Company, its affiliates, or their products or services in a false, misleading, derogatory, or otherwise offensive manner. You may not use any Company logo or other proprietary graphic or trademark as part of the link without express written permission.",
      },
      {
        title: "Your Account",
        content:
          "If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. Company reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion.",
      },
      {
        title: "Disclaimer of Warranties and Limitation of Liability",
        content:
          "THIS SITE IS PROVIDED BY COMPANY ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK.\n\nTO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES NOT WARRANT THAT THIS SITE, ITS SERVERS, OR E-MAIL SENT FROM COMPANY ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. COMPANY WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.\n\nCERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.",
      },
      {
        title: "Applicable Law",
        content:
          "By visiting our website, you agree that the laws of the State of Pennsylvania, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might come between Company and you.",
      },
      {
        title: "Disputes",
        content:
          "Any dispute relating in any way to your visit our Website or to products or services sold or distributed by Company or which Company has advertised or promoted shall be submitted to confidential arbitration in the County of Montgomery County, the State of Pennsylvania, except that, to the extent you have in any manner violated or threatened to violate Company's intellectual property rights, Company may seek injunctive or other appropriate relief in any court of competent jurisdiction.",
      },
    ],
  };

  return (
    <FullContainer className=" bg-white">
      <Container className="mt-30">
        {/* Header */}
        <div className="text-center my-8">
          <h1 className="text-[30px] leading-relaxed font-bold text-gray-700">
            {termsData.title}
          </h1>
        </div>
      </Container>
      <FullContainer className="bg-gray-100">
        <Container className="px-5">
          {/* Main Content Container */}
          <div className="py-24">
            {/* Introduction */}
            <div className="mb-6">
              <p className="text-sm leading-relaxed  text-gray-700 mb-4 font-bold">
                {termsData.introduction}
              </p>
              <p className="text-sm leading-relaxed  text-gray-700 italic">
                {termsData.websiteOperator}
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6">
              {termsData.sections.map((section, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed mb-3">
                    <span className="">
                      {section.title}:
                    </span>{" "}
                    <span className="font-normal">
                      {section.content.replace(/\n/g, " ")}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>
    </FullContainer>
  );
};

export default TermsSection;
