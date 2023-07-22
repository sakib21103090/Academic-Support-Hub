
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className=" bg-nav text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Academic SupportHub</h3>
            <p className="mt-2">Uttra, Dhaka, Bangladesh</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-300 mr-4"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} Academic SupportHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;