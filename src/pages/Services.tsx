import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncIcon from "@mui/icons-material/Sync";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailCom from "../Components/Email";

function Services() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h1
            className="text-3xl font-semibold p-6 text-violet-500
            md:text-6xl
            "
          >
            OUR SERVICES
          </h1>
          <div
            className="flex flex-col gap-y-4 
            md:flex-row md:gap-x-16 md:mt-5
            "
          >
            <div className=" flex flex-col items-center w">
              <span className="flex flex-col">
                <LocalShippingIcon
                  className="text-5xl text-orange-400
                md:text-8xl
                "
                />
              </span>
              <span className="text-lg font-bold">Fast Delivery</span>
              <p className="text-center text-sm">Our fastest action</p>
            </div>
            <div className=" flex flex-col items-center">
              <span className="flex flex-col">
                <SyncIcon
                  className="text-5xl text-orange-400
                md:text-8xl
                "
                />
              </span>
              <span className="w-30 text-lg font-bold">
                10 Days Replacement
              </span>
              <p className="text-center text-sm">For our custumer assurance</p>
            </div>
            <div className="w-26 flex flex-col items-center">
              <span className="flex flex-col">
                <SupportAgentIcon
                  className="text-5xl text-orange-400
                md:text-8xl
                "
                />
              </span>
              <span className="text-lg font-bold">24 x 7 Support </span>
              <p className="text-center text-sm">We are here for you</p>
            </div>
          </div>
        </div>

        <div
          className="bg-about-hero h-screen bg-cover flex items-center justify-center
        md:grid md:grid-cols-2
        "
        >
          <div className="hidden md:flex justify-center items-center">
            <img className="w-80 lg:w-3/5" src="./images/logshoes.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <EmailCom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
