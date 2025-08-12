import Image from "next/image";

const Features = ({ icon, title, description, bgColor = "bg-white" }) => (
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
export default Features;
