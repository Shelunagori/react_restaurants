import RestroCards from "./RestrocardsComponent";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
//useStage is hook. it returns array.

const Body = () => {
  const [getRestroCardList, setRestroCardList] = useState([]);
  const [getFilterRestroList, setFilterRestroList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999"
    );
    const json = await data.json();
    setRestroCardList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );    
  };

  return getRestroCardList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            type="text"
          />
          <button
            onClick={() => {
              const filteredRestro = getRestroCardList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestroList(filteredRestro);
            }}
            className="search-button"
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const restroLists = getRestroCardList.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilterRestroList(restroLists);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {getFilterRestroList.map((restaurants) => {
          return (
            <RestroCards key={restaurants?.info?.id} restData={restaurants} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
