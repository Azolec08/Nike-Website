type image = {
  img: string;
};

function Promo({ img }: image) {
  return (
    <>
      <div className="">
        <img src={img} alt="" />
      </div>
    </>
  );
}

export default Promo;
