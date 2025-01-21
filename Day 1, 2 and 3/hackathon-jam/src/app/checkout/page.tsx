"use client";

import HeaderPage from "@/components/header-page";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";

export default function Checkout() {
  const { cartItems } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const total = subtotal;

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
        {/* Billing Details Form - Restored Full Structure */}
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

          <label htmlFor="company" className="mt-2">Company Name (Optional)</label>
          <input className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="company" id="company" />

          <label htmlFor="country-select" className="mt-2">Country / Region</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="country-select" name="countries">
            <option disabled defaultValue={"Select a country"}></option>
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

          <label htmlFor="town-city" className="mt-2">Town / City</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="town-city" id="town-city" />

          <label htmlFor="province" className="mt-2">Province</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="province" name="province">
            <option disabled defaultValue={"Select a Province"}></option>
            <option value="California">California</option>
            <option value="Ontario">Ontario</option>
            <option value="Sindh">Sindh</option>
            <option value="New South Wales">New South Wales</option>
            <option value="England">England</option>
            <option value="Bavaria">Bavaria</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Beijing">Beijing</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Île-de-France">Île-de-France</option>
            <option value="São Paulo">São Paulo</option>
          </select>

          <label htmlFor="zip" className="mt-2">Zip Code</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="number" name="zip" id="zip" />

          <label htmlFor="phone" className="mt-2">Phone</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="tel" name="phone" id="phone" />

          <label htmlFor="mail" className="mt-2">Email Address</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="email" name="mail" id="mail" />

          <label htmlFor="additional-info" className="mt-2">Additional Information</label>
          <input className="w-full border-2 px-5 py-3 rounded-lg md:w-[300px]" type="text" name="additional-info" id="additional-info" placeholder="Optional" />
        </form>

        {/* Order Summary */}
        <div className="md:w-1/2 flex flex-col gap-y-3">
          <div className="flex py-7 border-b-2 justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Product</h2>
              {cartItems.map((item) => (
                <p key={item.product.id} className="text-sm text-gray-400">
                  {item.product.name} <span className="text-black font-medium">x {item.quantity}</span>
                </p>
              ))}
              <p className="text-sm font-medium mt-4">Subtotal</p>
              <p className="text-sm font-medium">Total</p>
            </div>

            <div className="flex flex-col text-right gap-4">
              <h2 className="text-2xl font-semibold">Amount</h2>
              {cartItems.map((item) => (
                <p key={item.product.id} className="text-sm font-medium">
                  Rs.{(item.product.price * item.quantity).toLocaleString()}
                </p>
              ))}
              <p className="text-sm font-medium mt-4">Rs.{subtotal.toLocaleString()}</p>
              <h2 className="text-2xl font-medium text-yellow-600">
                Rs.{total.toLocaleString()}
              </h2>
            </div>
          </div>

          <div className="flex flex-col py-4 gap-y-3">
            <h1 className="text-lg font-semibold flex items-center gap-x-2">
              <div className="w-4 h-4 bg-black rounded-full"></div> 
              Payment Method
            </h1>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="payment" 
                  id="dbt" 
                  value="dbt"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="dbt" className="text-gray-600 font-medium">
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="payment" 
                  id="cod" 
                  value="cod"
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-600 font-medium">
                  Cash On Delivery
                </label>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Your personal data will be used to process your order, support your experience 
              throughout this website, and for other purposes described in our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a>.
            </p>

            <button 
              className={`text-lg px-10 border-2 py-3 rounded-xl transition-colors duration-200 ${
                cartItems.length === 0 
                  ? 'bg-gray-300 border-gray-300 cursor-not-allowed' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
              disabled={cartItems.length === 0}
              type="submit"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}