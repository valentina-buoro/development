import Link from "next/link";
import Button from "../micro/button";

const Banner = () => {
  return (
    <section className="pt-14 lg:pt-24" data-aos="zoom-in">
      <div className="flex-col lg:flex-row lg:items-center lg:justify-around text-text flex">
        <div className="space-y-5">
          <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-[44px] font-medium max-w-sm lg:max-w-lg ">
            Get top quality services at Innovotio
          </h1>
          <p className="text-base text-texts max-w-md md:max-w-xl lg:max-w-md w-full">
            Our team of professionals will manage your events and provide you
            with top-quality merch and event support.
          </p>
        </div>
        <div className="flex flex-row space-x-10 lg:pt-0 pt-6">
          <Link href="/services/merchandise" legacyBehavior>
            <a target="_blank">
              <Button className="hover:bg-section hover:text-black">Order Merch</Button>
            </a>
          </Link>
          <Link href="/services/event" legacyBehavior>
            <a target="_blank">
              <Button className="bg-text text-black hover:bg-section hover:text-black">Get Event Support</Button>
            </a>
          </Link>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Banner;
