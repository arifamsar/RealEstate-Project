import { Typography } from "@material-tailwind/react";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import ContactFooter from "./ContactFooter";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-gray-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-blue-gray-900 text-center md:justify-between">
        <HomeModernIcon className="w-10 text-cyan-50" />
        <ul className="flex flex-col md:flex-row md:flex-wrap items-center gap-y-2 gap-x-8 text-cyan-50">
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-cyan-500 focus:text-cyan-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-cyan-500 focus:text-cyan-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-cyan-500 focus:text-cyan-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <ContactFooter/>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-800 opacity-80" />
      <Typography className="text-center font-semibold text-white">
        &copy; 2023 MyProperty
      </Typography>
    </footer>
  );
}

export default Footer;