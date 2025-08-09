import Link from "next/link";

const ContentBtnWrapper = ({ title, desc, btnText, link }) => {
  return (
    <div className="py-18 mb-18 ">
      {/* Content + Button Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-center px-16 py-8 bg-white rounded overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.15)]">
        {/* Left Content */}
        <div className="md:text-left text-center">
          <h2 className="text-[30px] leading-relaxed font-semibold mb-2">
            {title}
          </h2>
          <p className="mb-4 text-[24px]">{desc}</p>
        </div>

        {/* Right Button */}
        <Link
          className="border hover:border-[#1198EB] uppercase px-9 py-4 font-semibold leading-relaxed tracking-widest transition-colors ease-in-out duration-200 hover:text-[#1198EB] bg-[#1198EB] hover:bg-white text-[14px] text-white"
          href={link}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};
export default ContentBtnWrapper;
