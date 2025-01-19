import HeaderPage from "@/components/header-page";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <HeaderPage />
      
      {/* Hero Section */}
      <div className="py-6 md:py-2 mt-16 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={'/shop/hero-logo.png'}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-4xl font-medium">Contact</h1>
          <p className="font-medium text-base mt-4">Home &gt; Contact</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 flex flex-col items-center px-6 md:px-36">
        <div className="flex flex-col text-center gap-y-5 items-center w-full md:w-[550px] justify-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Get In Touch With Us</h1>
          <p className="text-gray-500">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row justify-between w-full items-start py-14 gap-10">
          <div className="w-full md:w-[45%]">
            <Image
              src={"/contact.svg"}
              alt="contact"
              width={293}
              height={337}
              className="w-full h-auto"
            />
          </div>
          <form className="flex flex-col text-sm font-semibold gap-y-5 w-full md:w-[45%]">
            <label htmlFor="name">Your name</label>
            <input
              className="w-full border-2 px-5 py-3 rounded-lg md:w-[300px]"
              type="text"
              name="name"
              required
              id="name"
              placeholder="Name"
            />
            <label htmlFor="email">Email address</label>
            <input
              className="w-full border-2 px-5 py-3 rounded-lg md:w-[300px]"
              type="email"
              name="email"
              required
              id="email"
              placeholder="E-mail"
            />
            <label htmlFor="sub">Subject</label>
            <input
              className="w-full border-2 px-5 py-3 rounded-lg md:w-[300px]"
              type="text"
              name="sub"
              id="sub"
              placeholder="This is an optional"
            />
            <label htmlFor="mess">Message</label>
            <textarea
              className="w-full border-2 px-5 py-3 rounded-lg md:w-[300px]"
              name="mess"
              id="mess"
              rows={7}
              placeholder="Hi, I'd like to ask about."
            />
            <input
              className="text-lg px-10 border-[1px] border-black py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="bg-[#FAF4F4] px-6 md:px-28 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">Free Delivery</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            For all orders over $50, consectetur <br />adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">90 Days Return</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            If goods have problems, consectetur <br />adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">Secure Payment</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            100% secure payment, consectetur <br />adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}
