import { useEffect, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import "./Slider.scss";

const Slider = ({ data }) => {
  const [index, setIndex] = useState(0);

  function previous() {
    setIndex(() => {
      if (index === 0) {
        return data.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  useEffect(() => {
    setIndex(0);
  }, [data]);

  function next() {
    setIndex(() => {
      if (index === data.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  return (
    <div className="slider">
      <div className="sliderimages" style={{ translate: `${-100 * index}%` }}>
        {data && data.map((d) => <img key={d} src={d} alt="" />)}
      </div>
      <div className="controls">
        <div className="buttons">
          <ArrowLeftIcon className="button" onClick={previous} />
          <div className="place">
            {data &&
              data.map((_, i) => (
                <span key={i} onClick={() => setIndex(i)}>
                  {i === index ? <CircleIcon /> : <RadioButtonUncheckedIcon />}
                </span>
              ))}
          </div>
          <ArrowRightIcon className="button" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
