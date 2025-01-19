import HeaderPage from "@/components/header-page";
import Image from "next/image";

export default function Account() {
  return (
    <main>
      <HeaderPage />

      {/* Hero Section */}
      <main>
        <div className="account py-7 md:py-2 mt-16 md:mt-20 w-full flex justify-center items-center h-auto md:h-[300px] px-6">
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/shop/hero-logo.png"}
              alt="logo"
              width={77}
              height={77}
            />
            <h1 className="text-3xl md:text-4xl font-medium">My Account</h1>
            <p className="font-medium text-sm md:text-base mt-4">
              Home &gt; My account
            </p>
          </div>
        </div>
      </main>

      {/* Forms Section */}
      <main className="px-6 md:px-28 py-10 flex flex-col md:flex-row gap-y-10 md:gap-x-10">
        {/* Login Form */}
        <form className="flex flex-col gap-y-5 flex-1">
          <legend className="text-3xl md:text-4xl font-semibold">Log In</legend>
          <label className="text-sm font-medium" htmlFor="username">
            Username or email address
          </label>
          <input
            className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]"
            type="text"
            name="username"
            id="username"
          />
          <label className="text-sm font-medium" htmlFor="pass">
            Password
          </label>
          <input
            className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]"
            type="password"
            name="pass"
            id="pass"
          />
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="rem" id="rem" />
            <label htmlFor="rem">Remember me</label>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              className="text-lg px-10 py-2 border-[1px] border-black rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80"
              type="button"
              value="Log In"
            />
            <p className="text-sm">Lost Your Password?</p>
          </div>
        </form>

        {/* Register Form */}
        <form className="flex-1 flex flex-col gap-y-5">
          <legend className="text-3xl md:text-4xl font-semibold">Register</legend>
          <label className="text-sm font-medium" htmlFor="email">
            Email address
          </label>
          <input
            className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]"
            type="email"
            name="email"
            id="email"
          />
          <p className="text-sm">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our <b>privacy policy.</b>
          </p>
          <input
            className="text-lg px-10 py-2 border-[1px] border-black rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80"
            type="button"
            value="Register"
          />
        </form>
      </main>

      {/* Delivery Section */}
      <div className="bg-[#FAF4F4] px-6 md:px-28 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-10 text-center md:text-left">
        <div>
          <h3 className="font-medium text-xl md:text-3xl">Free Delivery</h3>
          <p className="text-sm md:text-base text-[#9F9F9F] mt-3">
            For all orders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-xl md:text-3xl">90 Days Return</h3>
          <p className="text-sm md:text-base text-[#9F9F9F] mt-3">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-xl md:text-3xl">Secure Payment</h3>
          <p className="text-sm md:text-base text-[#9F9F9F] mt-3">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </main>
  );
}
