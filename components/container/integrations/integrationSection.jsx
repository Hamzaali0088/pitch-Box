import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";

const IntegrationCard = ({
  icon,
  title,
  description,
  bgColor = "bg-white",
}) => (
  <div
    className={`${bgColor} px-8 py-12 shadow-md border border-gray-100 transition-shadow duration-200`}
  >
    <div className="flex flex-col items-center text-center space-y-3 h-full">
      <div className="flex justify-center mb-6 ">
        <Image
          src={icon}
          alt="Icon"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="font-medium text-[24px] text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-[14px] leading-relaxed flex-grow">
        {description}
      </p>
      <p className="text-blue-400 text-[14px] hover:text-blue-800 cursor-pointer">
        Learn more
      </p>
    </div>
  </div>
);

const IntegrationSection = () => {
  const integrations = [
    {
      icon: "/st-images/icon-1.webp",
      title: "Slack",
      description:
        "Receive team alerts and stay in sync with your team. Get notifications about important events and collaborate in real-time.",
    },
    {
      icon: "/st-images/communityIcon_392fktd7xfm61-e1699477614108.webp",
      title: "Loom Studio",
      description:
        "Create engaging video content with ease. Record, edit, and share professional videos for your team and customers.",
    },
    {
      icon: "/st-images/icon-3.webp",
      title: "Zapier",
      description:
        "Connect your apps and automate workflows. Create powerful automations without any coding required.",
    },
    {
      icon: "/st-images/icon-4.webp",
      title: "Ahrefs",
      description:
        "Integrate your development workflows with JIRA issue tracking. Sync tasks and manage project development efficiently.",
    },
    {
      icon: "/st-images/icon-5.webp",
      title: "SemRush",
      description:
        "Boost your SEO and marketing efforts with comprehensive analytics. Track rankings and optimize your content strategy.",
    },
    {
      icon: "/st-images/icon-6.webp",
      title: "Majestic",
      description:
        "Streamline business operations with powerful automation tools. Enhance productivity and workflow management.",
    },
    {
      icon: "/st-images/icon-7.webp",
      title: "Moz",
      description:
        "Collaborate with your team on visual projects. Create mind maps, flowcharts, and brainstorm ideas together in real-time.",
    },
    {
      icon: "/st-images/icon-8.webp",
      title: "LinkResearchTools",
      description:
        "Enhance your link building strategy with comprehensive backlink analysis. Monitor and improve your SEO performance.",
    },
    {
      icon: "/st-images/icon-9.webp",
      title: "Gmail",
      description:
        "Sync your email communications and manage your inbox efficiently. Stay connected with automated email workflows.",
    },
    {
      icon: "/st-images/icon-10.webp",
      title: "Microsoft Outlook",
      description:
        "Streamline your email management and calendar integration. Sync contacts and schedule meetings seamlessly.",
    },
    {
      icon: "/st-images/icon-11.webp",
      title: "Microsoft Exchange",
      description:
        "Enterprise-grade email and calendar solutions. Manage communication and collaboration across your organization.",
    },
    {
      icon: "/st-images/icon-12.webp",
      title: "IMAP/SMTP",
      description:
        "Connect with any email server using standard protocols. Flexible email integration for custom solutions.",
    },
  ];

  return (
    <FullContainer className=" bg-white">
      <Container className="mt-30">
        <div>
          {/* Header Section */}
          <div className="text-center mb-16 py-10">
            <h1 className="text-[50px] font-light leading-[1.2] tracking-tight text-gray-900 max-w-2xl mx-auto mb-10">
              Your Favorite Tools...Better Together
            </h1>

            <p className="text-[20px] text-gray-600 max-w-3xl tracking-tight mx-auto leading-relaxed">
              What if your software platforms could work better with each other?
              We make that happen. This platform integrates with the tools you
              already use and we are always busy adding new ones. From Slack to
              business workflows to marketing campaigns.
            </p>

            {/* Image Section */}
            <div className="mt-16 flex justify-center">
              <Image
                src="/st-images/about-icon.svg"
                alt="About Icon"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      <FullContainer className="bg-gray-100">
        <Container className="px-5">
          <div className="py-30">
            <div className="mb-8">
              <h2 className="text-[40px] font-light text-gray-800 text-center mb-6">
                Featured Integrations:
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Connect these popular tools to Pitchbox and simplify your
                workflow.{" "}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((integration, index) => (
                  <IntegrationCard
                    key={index}
                    icon={integration.icon}
                    title={integration.title}
                    description={integration.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </FullContainer>
  );
};

export default IntegrationSection;
