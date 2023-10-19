import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

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

export default function TextRating() {
  const value = 4.5;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "",
        alignItems: "",
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55 }}
            fontSize="inherit"
            className="text-2xl"
          />
        }
      />
      <Box>{labels[value]}</Box>
    </Box>
  );
}
