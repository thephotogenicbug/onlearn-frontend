import React from "react";
import { assets } from "../../assets/assets";

const GiftCard = () => {
  return (
    <div className="mt-28 flex justify-center px-4 relative overflow-visible">
      <div className="relative w-full max-w-[1200px] bg-[#DF1C25] rounded-xl px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between">
        <img
          src={assets.gift_card_header_swrill}
          alt="swirl"
          className="absolute left-[250px] bottom-0 w-[600px]  pointer-events-none hidden md:block"
        />

        <div className="z-10 max-w-[520px] flex flex-col justify-center items-center md:justify-start md:items-start   ">
          <h3 className="text-white font-extrabold text-[20px] text-center md:text-left md:text-[34px] leading-tight mb-6">
            Why You should buy <br /> gift cards ?
          </h3>

          <ul className="space-y-3 text-white text-sm font-normal">
            <li>
              <i className="fa-solid fa-star mr-2" />
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </li>
            <li>
              <i className="fa-solid fa-star mr-2" />
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </li>
            <li>
              <i className="fa-solid fa-star mr-2" />
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </li>
          </ul>

          <button className=" w-36 mt-8 bg-white text-[#0B7077] font-semibold px-6 py-2.5 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
            Buy Now
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src={assets.gift_card_header}
            alt="gift card woman"
            className="absolute left-[640px]  bottom-0 w-[630px] h-auto object-contain z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
