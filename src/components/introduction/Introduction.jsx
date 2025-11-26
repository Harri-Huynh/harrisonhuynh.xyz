import person from "../../assets/images/person.png";
import Portrait from "../../assets/images/Portrait.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePdf from '../../assets/Harrison_Resume.pdf';

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "15 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "250+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Harrison Huynh
            </span>
          </p>
          {/* <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Freelance <span className="bg-highlight">UI/UX Designer</span>{" "}
            and <span className="bg-highlight"> Developer</span> based in
            London, England. I strives to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p> */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Software Developer with a strong foundation in Computational Mathematics, 
            System Design, and Software Development/Optimization. I build reliable and 
            user-focused applications ranging from full-stack React projects with Spotify/Maps 
            integrations to low-level EXT2 file system implementations, PCA-based forecasting 
            models, and interactive ODE visualization tools—all driven by a focus on clarity, 
            performance, and thoughtful design.
          </p>
          <p className="text-center lg:text-start flex gap-4 my-7">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:harrisonhuynh@outlook.com"
            >
              Say Hello!
            </a>
            <a
              className={`btn xxs:btn-lg px-3 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
            
          </p>
        </div>
        
        {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-210 w-97 h-150 absolute bottom-0 object-contain bg-white rounded-3xl`}
          src={Portrait}
          alt="Portrait"
        />
      </div>
    </div>
  );
};

export default Introduction;
