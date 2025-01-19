import HeaderPage from "@/components/header-page";
import Image from "next/image";

export default function Checkout() {
  return (
    <main>
      <HeaderPage />
      <div className="mt-16 py-6 md:py-2 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={'/shop/hero-logo.png'}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-4xl font-medium">Checkout</h1>
          <p className="font-medium text-base mt-4">Home &gt; Checkout</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-32 py-16 gap-12">
        {/* Billing Details Form */}
        <form className="flex flex-col text-sm font-semibold gap-y-6 md:w-1/2">
          <legend className="text-2xl font-semibold">Billing details</legend>
          <div className="flex flex-col md:flex-row gap-x-12 mt-10">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="first-name">First Name</label>
              <input className="border-2 px-5 py-3 rounded-lg w-full" required type="text" name="first-name" id="first-name" placeholder="First Name" />
            </div>
            <div className="flex mt-5 md:mt-0 flex-col gap-2 md:w-1/2">
              <label htmlFor="last-name">Last Name</label>
              <input className="border-2 px-5 py-3 rounded-lg w-full" required type="text" name="last-name" id="last-name" placeholder="Last Name" />
            </div>
          </div>

          {/* Rest of the form fields */}
          <label htmlFor="company" className="mt-2">Company Name (Optional)</label>
          <input className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="company" id="company" />

          <label htmlFor="country-select" className="mt-2">Country / Region</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="country-select" name="countries">
            <option disabled defaultValue={"Select a country"}></option>
            {/* Country options */}
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Brazil">Brazil</option>
          </select>

          <label htmlFor="address" className="mt-2">Street Address</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="address" id="address" />

          <label htmlFor="home" className="mt-2">Town / City</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="home" id="home" />

          <label htmlFor="province" className="mt-2">Province</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="province" name="province">
            <option disabled defaultValue={"Select a Province"}></option>
            {/* Province options */}
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Australia">Australia</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Brazil">Brazil</option>
          </select>

          <label htmlFor="zip" className="mt-2">Zip Code</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="number" name="zip" id="zip" />

          <label htmlFor="phone" className="mt-2">Phone</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="number" name="phone" id="phone" />

          <label htmlFor="mail" className="mt-2">Email Address</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="email" name="mail" id="mail" />

          <input required className="w-full mt-5 border-2 px-5 py-3 rounded-lg md:w-[300px]" type="text" name="home" id="home" placeholder="Additional Information" />
        </form>

        {/* Order Summary */}
        <div className="md:w-1/2 flex flex-col gap-y-3">
          <div className="flex py-7 border-b-2 justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Product</h2>
              <p className="text-sm text-gray-400">Asgard sofa <span className="text-black font-medium">x 1</span></p>
              <p className="text-sm font-medium">Subtotal</p>
              <p className="text-sm font-medium">Total</p>
            </div>

            <div className="flex flex-col text-right gap-4">
              <h2 className="text-2xl font-semibold">Subtotal</h2>
              <p className="text-sm font-medium">Rs.250,000.00</p>
              <p className="text-sm font-medium">Rs.250,000.00</p>
              <h2 className="text-2xl font-medium text-yellow-600">Rs.250,000.00</h2>
            </div>
          </div>

          <div className="flex flex-col py-4 gap-y-3">
            <h1 className="text-lg font-semibold flex items-center gap-x-2">
              <div className="w-4 h-4 bg-black rounded-full"></div> Direct Bank Transfer
            </h1>
            <p className="text-gray-400 tracking-wide">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div>
              <input className="mr-2" type="radio" name="dbt" id="dbt" />
              <label className="text-gray-400 tracking-wide font-semibold" htmlFor="dbt">Direct Bank Transfer</label>
            </div>
            <div>
              <input className="mr-2" type="radio" name="con" id="con" />
              <label className="text-gray-400 tracking-wide font-semibold" htmlFor="con">Cash On Delivery</label>
            </div>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
            <button className="text-lg px-10 border-[1px] border-black py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80 w-full md:w-auto">Place order</button>
          </div>
        </div>
      </div>
    </main>
  );
}
