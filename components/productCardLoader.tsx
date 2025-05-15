import React from "react";

interface SkeletonProductCardProps {
  detailedView: boolean;
}

const SkeletonProductCard: React.FC<SkeletonProductCardProps> = ({ detailedView }) => {
  return (
    <div
      className={`relative animate-pulse ${
        detailedView
          ? "w-full md:w-1/2 h-96 border-[1px] border-[#CCCCCC] rounded-lg overflow-hidden bg-[#cccccc59]"
          : "aspect-square border-[1px] w-full border-[#CCCCCC] rounded-lg overflow-hidden bg-[#cccccc59]"
      }`}
    >
      <div className="absolute inset-0 bg-gray-300"></div>
      {!detailedView && (
        <div className="px-3 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FAFAFA] flex w-[90%] justify-between items-center gap-2 rounded-xl border-[1px] border-[#E6E6E6]">
          <div className="flex flex-col justify-center items-start">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
      )}
      {detailedView && (
        <div className="px-3 py-2 w-full md:w-1/2 flex flex-col justify-between items-start gap-2">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        </div>
      )}
    </div>
  );
};

export default SkeletonProductCard;