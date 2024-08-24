import FillStar from "../../svgs/FillStar";
import UnFillSvg from "../../svgs/UnFillSvg";

function StarsContainer({ star = 3 }) {
  const stars = [];

  for (let i = 0; i < star; i++) {
    stars.push(<FillStar key={`${i}+fill`} />);
  }

  for (let i = 0; i < 5 - star; i++) {
    stars.push(<UnFillSvg key={`${i}+unfill`} />);
  }
  return <div className="flex gap-[2px]">{stars}</div>;
}

export default StarsContainer;
