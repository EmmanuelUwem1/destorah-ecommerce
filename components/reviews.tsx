"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Review } from "@/types/product";
import ReviewStars from "./reviewStars";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// ReviewsComponent
function ReviewsComponent({ reviews }: { reviews?: Review[] }) {
  const [rating, setRating] = useState<number | null>(null); // Initialize rating state
  const [isReviewing, setIsReviewing] = useState(false); // Initialize isReviewing state
  const reviewBoxRef = useRef<HTMLDivElement>(null); // Ref for the review box
  function handleIsReviewing() {
    setIsReviewing(true);
  }
  // Close the review box when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        reviewBoxRef.current &&
        !reviewBoxRef.current.contains(event.target as Node)
      ) {
        setIsReviewing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const yellowStar = (
    <span className="relative flex justify-center items-center h-6 w-6">
      <Image
        alt=""
        src={"/Star yellow.png"}
        layout="fill"
        objectFit="contain"
        priority
        //    quality={100}
        objectPosition="center"
      ></Image>
    </span>
  );
  const grayStar = (
    <span className="relative flex justify-center items-center h-6 w-6">
      <Image
        alt=""
        src={"/Star gray.png"}
        layout="fill"
        objectFit="contain"
        priority
        // quality={100}
        objectPosition="center"
      ></Image>
    </span>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex justify-start items-start w-full gap-4 relative"
      >
        {isReviewing && (
          <AnimatePresence mode="wait">
            <motion.div
              ref={reviewBoxRef}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full max-w-96 justify-start items-start bg-[#FFFFFF] rounded-xl border p-4 border-[#E6E6E6] z-[1000] -top-6 absolute"
            >
              <h2 className="text-[#000000] font-medium text-lg self-start mb-3">
                Add Review
              </h2>
              <form
                action="
      "
                method="post"
                className="flex flex-col gap-4 w-full justify-start items-start"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border-[#E6E6E6] rounded-xl border bg-[#FAFAFA] h-11 px-4"
                />
                <textarea
                  name="review"
                  id="review"
                  placeholder="Write Review"
                  className="w-full border-[#E6E6E6] rounded-xl py-2 border bg-[#FAFAFA] h-32 px-4"
                ></textarea>
                <span className="w-full text-[#808080] text-base font-normal">
                  Add Ratings
                </span>
                <div className="flex w-full gap-2">
                  <button
                    type="button"
                    onClick={() => setRating(1)}
                    className={`flex items-center justify-center`}
                  >
                    {rating && rating >= 1 ? yellowStar : grayStar}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating(2)}
                    className={`flex items-center justify-center`}
                  >
                    {rating && rating >= 2 ? yellowStar : grayStar}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating(3)}
                    className={`flex items-center justify-center`}
                  >
                    {rating && rating >= 3 ? yellowStar : grayStar}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating(4)}
                    className={`flex items-center justify-center`}
                  >
                    {rating && rating >= 4 ? yellowStar : grayStar}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating(5)}
                    className={`flex items-center justify-center`}
                  >
                    {rating && rating === 5 ? yellowStar : grayStar}
                  </button>
                </div>
                <span className="bg-[#F5B937] text-[#FAFAFA] cursor-pointer text-base font-medium rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-full mb-4">
                  Add your Review
                </span>
              </form>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="flex flex-col w-full md:w-1/2 justify-start items-start bg-[#FFFFFF] rounded-xl border p-4 border-[#E6E6E6] relative -top-6">
          <button
            className="bg-[#F5B937] md:hidden text-[#FAFAFA] text-base font-normal rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-full mb-4"
            onClick={handleIsReviewing}
          >
            Add your Review
          </button>
          <div className="flex w-full flex-col border gap-3 border-[#E6E6E6] rounded-xl p-3">
            <div className="flex justify-start gap-2 sm:gap-4 items-center w-full">
              <span className="bg-[#FAFAFA] rounded-xl border border-[#E6E6E6] px-3 py-[2px] font-normal text-sm sm:text-base text-[#3B3B3B]">
                Verified Ratings
              </span>
              <span className="bg-[#FAFAFA] rounded-xl border border-[#E6E6E6] px-3 py-[2px] font-normal text-sm sm:text-base text-[#3B3B3B]">
                {`Reviews (${reviews?.length || "0"})`}
              </span>
            </div>
            <div className="flex justify-start h-fit items-center gap-1 border-b-[1px] border-[#E6E6E6] pb-3">
              <span className="font-medium text-base">5.0</span>
              <ReviewStars rating={10} />
            </div>
          </div>
          {reviews ? (
            reviews.map((review, index) => (
              <div
                className="border-b-not-last-child gap-3 flex w-full justify-start items-start p-3"
                key={index}
              >
                <p className="bg-[#DAEDCA] border rounded-full border-[#A6D37E] h-12 w-12 flex items-center justify-center">
                  {review.reviewer.charAt(0).toUpperCase()}
                </p>
                <div>
                  <p className="text-base font-medium text-[#3B3B3B]">
                    {review.reviewer}
                  </p>
                  <p className="text-[15px] font-normal text-[#545454]">
                    {review.review}
                  </p>

                  <div className="flex justify-start h-fit items-center gap-1">
                    <ReviewStars rating={review.rating} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-24">
              No reviews yet
            </div>
          )}
        </div>
        <div className="hidden md:flex flex-col w-full max-w-96 justify-start items-start bg-[#FFFFFF] rounded-xl border p-4 border-[#E6E6E6] relative -top-6">
          <h2 className="text-[#000000] font-medium text-lg self-start mb-3">
            Add Review
          </h2>
          <form
            action="
      "
            method="post"
            className="flex flex-col gap-4 w-full justify-start items-start"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border-[#E6E6E6] rounded-xl border bg-[#FAFAFA] h-11 px-4"
            />
            <textarea
              name="review"
              id="review"
              placeholder="Write Review"
              className="w-full border-[#E6E6E6] rounded-xl py-2 border bg-[#FAFAFA] h-32 px-4"
            ></textarea>
            <span className="w-full text-[#808080] text-base font-normal">
              Add Ratings
            </span>
            <div className="flex w-full gap-2">
              <button
                type="button"
                onClick={() => setRating(1)}
                className={`flex items-center justify-center`}
              >
                {rating && rating >= 1 ? yellowStar : grayStar}
              </button>
              <button
                type="button"
                onClick={() => setRating(2)}
                className={`flex items-center justify-center`}
              >
                {rating && rating >= 2 ? yellowStar : grayStar}
              </button>
              <button
                type="button"
                onClick={() => setRating(3)}
                className={`flex items-center justify-center`}
              >
                {rating && rating >= 3 ? yellowStar : grayStar}
              </button>
              <button
                type="button"
                onClick={() => setRating(4)}
                className={`flex items-center justify-center`}
              >
                {rating && rating >= 4 ? yellowStar : grayStar}
              </button>
              <button
                type="button"
                onClick={() => setRating(5)}
                className={`flex items-center justify-center`}
              >
                {rating && rating === 5 ? yellowStar : grayStar}
              </button>
            </div>
            <button className="bg-[#F5B937] text-[#FAFAFA] text-base font-medium rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-full mb-4">
              Add your Review
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default ReviewsComponent;