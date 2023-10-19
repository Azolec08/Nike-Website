import EmailJs from "@emailjs/browser";
const ContactForm: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    EmailJs.sendForm(
      "service_vhfxo88",
      "template_w3g1srl",
      e.target,
      "SxKVMTKVEpiQa0iV0"
    );
  };

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="w-80" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 ">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              id="surname"
              name="surname"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Phone"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="address"
            name="address"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Full Address"
            required
          />
        </div>

        <div className="mb-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Message your order"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="submit"
            value="send"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-28 transition duration-200"
          />

          <a href="">
            <img className="w-7" src="/images/facebook.png" alt="" />
          </a>
          <a href="">
            <img className="w-7" src="/images/twitter.png" alt="" />
          </a>
          <a href="">
            <img className="w-7" src="/images/google.png" alt="" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
