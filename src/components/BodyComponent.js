import restObj from "../utils/restroCardsAPI";
import RestroCards from "./RestrocardsComponent";
import { useState } from "react";
//useStage is hook. it returns array.

const Body = () => {
  const [getRestroCardList, setRestroCardList] = useState(restObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restroLists = restObj.filter((res) => {
                return res.info.avgRating > 4;
            });
            setRestroCardList(restroLists);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {getRestroCardList.map((restaurants) => {
          return (
            <RestroCards key={restaurants?.info?.id} restData={restaurants} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
