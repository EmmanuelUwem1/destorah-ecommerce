"use client";
import { AnimatePresence, motion } from "framer-motion";
// ShippingAndDeliveryComponent

function ShippingAndDeliveryComponent() {
    return (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-start items-start relative w-full md:w-1/2 -top-6 text-[#545454] font-normal text-base"
    >
      <p className="mb-4">
        Your order would be processed withing 24 working hours
      </p>
      <ul className="list-disc pl-6">
        <li>
          For prescription/change of lens, consider additional 1-3 working days
        </li>
        <li>Delivery times:</li>
        <ul className="list-disc pl-6">
          <li>Standard delivery: 1-3 working days</li>

          <li>Within Akwa Ibom: 1-2 working days</li>
          <li>Outside of Akwa Ibom: 2-5 working days</li>
          <li>Rest of the world: 3-7 working days</li>
        </ul>
        <li>
          We offer a simple 3 days exchange policy from the delivery date. If
          you wish to return or exhange an item, please follow the instructions
          in this Link
        </li>
      </ul>
    </motion.div>
  </AnimatePresence>
);
}
export default ShippingAndDeliveryComponent;
