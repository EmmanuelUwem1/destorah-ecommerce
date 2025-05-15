
import Image from 'next/image';
interface ReviewStarsProps {
  rating: number;
}
function ReviewStars({ rating }: ReviewStarsProps) {
    const oneGreenStar = (
      <span className="relative flex justify-center items-center h-4 w-4">
        <Image
          alt=""
          src={"/Star green.png"}
          width={16}
          height={16}
          objectPosition="center"
          priority
        ></Image>
      </span>
    );
    const oneGrayStar = (
      <span className="relative flex justify-center items-center h-4 w-4">
        <Image
          alt=""
          src={"/Star gray.png"}
          width={16}
          height={16}
          objectPosition="center"
          priority
        ></Image>
      </span>
    );
    const oneYellowStar = (
      <span className="relative flex justify-center items-center h-4 w-4">
        <Image
          alt=""
          src={"/Star yellow.png"}
          height={16}
          width={16}
          objectPosition="center"
          priority
        ></Image>
      </span>
    );
    if (rating === 0) {
      return [oneGrayStar, oneGrayStar, oneGrayStar, oneGrayStar, oneGrayStar];
    } else if (rating === 1) {
      return [oneGreenStar, oneGrayStar, oneGrayStar, oneGrayStar, oneGrayStar];
    } else if (rating === 2) {
      return [
        oneGreenStar,
        oneGreenStar,
        oneGrayStar,
        oneGrayStar,
        oneGrayStar,
      ];
    } else if (rating === 3) {
      return [
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
        oneGrayStar,
        oneGrayStar,
      ];
    } else if (rating === 4) {
      return [
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
        oneGrayStar,
      ];
    } else if (rating === 5) {
      return [
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
        oneGreenStar,
      ];
    } else if (rating === 10) {
      return [
        oneYellowStar,
        oneYellowStar,
        oneYellowStar,
        oneYellowStar,
        oneYellowStar,
       
      ];
    }
    return (
      <>
        <span className="relative flex justify-center items-center h-4 w-4">
          <Image
            alt=""
            src={"/Star gray.png"}
            height={16}
            width={16}
            objectPosition="center"
          ></Image>
        </span>
        <span className="relative flex justify-center items-center h-4 w-4">
          <Image
            alt=""
            src={"/Star gray.png"}
            height={16}
            width={16}
            objectPosition="center"
          ></Image>
        </span>
        <span className="relative flex justify-center items-center h-4 w-4">
          <Image
            alt=""
            src={"/Star gray.png"}
            height={16}
            width={16}
            objectPosition="center"
          ></Image>
        </span>
        <span className="relative flex justify-center items-center h-4 w-4">
          <Image
            alt=""
            src={"/Star gray.png"}
            height={16}
            width={16}
            objectPosition="center"
          ></Image>
        </span>
        <span className="relative flex justify-center items-center h-4 w-4">
          <Image
            alt=""
            src={"/Star gray.png"}
            height={16}
            width={16}
            objectPosition="center"
          ></Image>
        </span>
      </>
    );
  };


export default ReviewStars