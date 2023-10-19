import Ratings from "../Components/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type allCards = {
  id: number;
  img: string;
  comment: string;
  name?: string;
};

function CardsReview({ img, comment, name }: allCards) {
  return (
    <div>
      <div className="w-80 p-3 bg-gray-100 shadow-lg shadow-gray-400">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full mt-1 hover:w-16 hover:h-16 transition-all"
            src={img}
            alt=""
          />
          <div className="ml-3">
            <span className="ml-1">{name}</span>
            <Ratings />
          </div>
        </div>
        <Accordion className="bg-gray-200 mt-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="font-semibold">See Comment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{comment}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default CardsReview;
