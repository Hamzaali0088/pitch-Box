import FullContainer from "./FullContainer";
import Container from "./Container";
import Features from "./Features";

const FeaturesCard = () => {
  const features = [
    {
      icon: "/st-images/icon-11.webp",
      title: "No-Code Interface",
      description:
        "Automation Anywhere offers an intuitive interface that allows business users to design automation workflows without extensive programming knowledge. Its drag-and-drop functionality simplifies automation design.",
    },
    {
      icon: "/st-images/icon-11.webp",
      title: "Cloud-Based Platform",
      description:
        "Built with a cloud-first approach, Automation Anywhere is highly scalable, supporting deployment in cloud and hybrid environments. This ensures that organizations can grow their automation initiatives without infrastructure limitations.",
    },
    {
      icon: "/st-images/icon-11.webp",
      title: "Robust Security",
      description:
        "The platform provides security features like user authentication, role-based access control, and secure bot management to ensure compliance with industry standards and regulations.",
    },
    {
      icon: "/st-images/icon-11.webp",
      title: "Mobile-Friendly Automation",
      description:
        "This is a big one. Most tools require you to sit at your desktop. With Robo Anywhere, you can monitor, tweak, or even launch automations straight from your phone or tablet. It’s like having your own personal assistant in your pocket.",
    },
    {
      icon: "/st-images/icon-11.webp",
      title: "Adaptive Task Learning",
      description:
        "One thing I love is how it doesn’t just blindly repeat tasks. It starts to understand patterns and can actually adjust over time. That’s not just automation—that’s smart automation.",
    },
  ];
  return (
    <FullContainer className="bg-gray-100">
      <Container className="px-5">
        <div className="py-30">
          <div className="mb-8">
            <h2 className="text-[40px] font-light text-gray-800 text-center mb-6">
              Features:
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Simplify your work by integrating RoboAnywhere with the tools you
              already use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Features
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};
export default FeaturesCard;
