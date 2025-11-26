import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
// import {
//   envelope
// } from "@https://fontawesome.com/icons/envelope?f=classic&s=solid";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  // {
  //   icon: faLocationDot,
  //   title: "Address",
  //   description: "New Mexico, 31134",
  // },
  {
    icon: faEnvelope,
    title: "Email",
    description: "harrisonhuynh@outlook.com",
  },
  {
    icon: faPhone,
    title: "Phone Number",
    description: "662-288-8868",
  },
  {
    icon: faLocationDot,
    title: "Location",
    description: "United States - Mainland",
  },
  {
    icon: faCalendar,
    title: "Availability",
    description: "Open to full-time software, systems, or related engineering roles.",
  },
];

const AvailabilityData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "United States - Mainland",
  },
  {
    icon: faCalendar,
    title: "Availability",
    description: "Open to full-time software, systems, or related engineering roles.",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-10 -mt-20 z-10 px-115 max-w-200px placeitems: center">
      <div
        className=" min-w-140 max-w-200px placeitems: center p-4 lg:p-10 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className=" lg:gap-5 xl:gap-25.7 max-w-300px">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-[#132238] placeitems: center max-w-300px">
                Let's get in contact!
              </p>
              <p className="ml-10 text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                I'm always happy to chat about potential opportunities.
              </p>
            </div>
            <div className="my-5 ml-30 mr-30 justify-between mx-auto">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
