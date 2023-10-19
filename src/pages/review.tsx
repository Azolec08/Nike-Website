import reviewList from "../data/review.json";
import CardsReview from "../Components/CardsReview";

function review() {
  return (
    <>
      <div className="pb-10 flex flex-col  items-center bg-about-hero bg-cover ">
        <div className="py-10">
          <h1 className="text-2xl font-semibold text-violet-500 md:text-5xl ">
            CUSTUMER REVIEWS
          </h1>
        </div>
        <div
          className="flex flex-col justify-center gap-y-4 
          md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:mx-10 "
        >
          {reviewList.map((review, index) => {
            return (
              <>
                <div key={index}>
                  <CardsReview {...review} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default review;
