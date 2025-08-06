import Image from "next/image";
import Container from "../../common/Container";

const logos = [
  { id: 1, title: "skyscanner", imgSrc: "/st-images/skyscanner.webp" },
  { id: 2, title: "dow", imgSrc: "/st-images/dow.webp" },
  { id: 3, title: "offers", imgSrc: "/st-images/offers.webp" },
  { id: 4, title: "freshbooks", imgSrc: "/st-images/freshbooks.webp" },
  { id: 5, title: "aboutcom", imgSrc: "/st-images/aboutcom.webp" },
  { id: 6, title: "db", imgSrc: "/st-images/db.webp" },
  { id: 7, title: "copypress", imgSrc: "/st-images/copypress.webp" },
  { id: 8, title: "ipullrank", imgSrc: "/st-images/ipullrank.webp" },
  { id: 9, title: "outspoken", imgSrc: "/st-images/outspoken.webp" },
  { id: 10, title: "pointvisible", imgSrc: "/st-images/pointvisible.webp" },
  { id: 11, title: "hoth", imgSrc: "/st-images/hoth.webp" },
  { id: 12, title: "movedigital", imgSrc: "/st-images/movedigital.webp" },
  { id: 13, title: "webris", imgSrc: "/st-images/webris.webp" },
  { id: 14, title: "maxcdn", imgSrc: "/st-images/maxcdn.webp" },
  { id: 15, title: "imi", imgSrc: "/st-images/imi.webp" },
];
const LogoGrid = () => {
  return (
    <Container className="">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-2">
          {logos.map((logo) => (
            <div key={logo.id} className="h-25">
              <Image
                className="h-full w-full object-contain"
                src={logo.imgSrc}
                alt={logo.title}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default LogoGrid;
