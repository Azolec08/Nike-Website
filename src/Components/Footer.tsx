import HouseIcon from "@mui/icons-material/House";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <>
      <div
        className=" w-full bg-violet-500 grid justify-center py-2 md:grid-cols-2 lg:grid-cols-4 text-white
      "
      >
        <div
          className="p-2 flex flex-col items-center 
        md:p-4 
        "
        >
          <h1 className="text-lg font-semibold">Contact</h1>
          <span className="flex items-center">
            <HouseIcon className="text-white" />
            <p className="text-sm">Binangonan Rizal</p>
          </span>
          <span className="flex">
            <PhoneIcon className="text-white" />
            <p className="text-sm">+699306206963</p>
          </span>
          <span className="flex">
            <EmailIcon className="text-white" />
            <p className="text-sm">markangeloceloza380@gmail.com</p>
          </span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Get Help</h1>
          <span className="flex text-sm">
            <a href="">FAQ</a>
          </span>
          <span className="flex text-sm">
            <a href="">Return</a>
          </span>

          <span className="flex text-sm">
            <a href="">Shipping</a>
          </span>
          <span className=" text-sm">
            <a href="">Payment Options</a>
          </span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Our Stores</h1>
          <span className="flex text-sm">Binangonan Rizal</span>
          <span className="flex text-sm">Angono Rizal</span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Follow Us</h1>
          <div className="flex">
            <span className="flex">
              <a href="">
                <img className="w-4" src="/images/facebook.png" alt="" />
              </a>
            </span>
            <span className="flex mx-3">
              <a href="">
                <img className="w-4" src="/images/twitter.png" alt="" />
              </a>
            </span>
            <span className="flex">
              <a href="">
                <img className="w-4" src="/images/google.png" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
