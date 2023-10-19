import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../style/card.scss";

type allCards = {
  id: number;
  img: string;
  description: string;
  price: string;
};

const store = ({ img, description, price }: allCards) => {
  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "",
    5: "Excellent+",
  };

  const value = 4.5;
  return (
    <div>
      <div className="card_container grid grid-row-3 bg-gray-200 w-72 shadow-md shadow-violet-500 relative">
        <div className="icon_container absolute  bg-white flex justify-center items-center">
          <FavoriteIcon className="i_con cursor-pointer text-violet-500 hover:text-red-500" />
        </div>
        <div className="flex justify-center">
          <img src={img} alt="" className="w-20 my-8 " />
        </div>
        <div className="flex flex-col items-center mb-1">
          <span className="text-3xl font-bold">NIKE</span>
          <p className=" text-center m-1 text-gray-600">{description}</p>
        </div>
        <div className="flex flex-col items-center mb-5">
          <span className="font-bold">{price}</span>
          <span>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                className="py-2"
              />
              <Box>{labels[value]}</Box>
            </Box>
          </span>
          <Button variant="contained" className="bg-violet-500">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default store;
