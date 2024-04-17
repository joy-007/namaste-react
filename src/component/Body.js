import RestaurantCard from "./RestaurantCard";
import resDataList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    const[listOfRestaurent,setResDataList] = useState(resDataList);
    return (
       <div className="body">
          <div className="filter">
            <button className="filter-btn"  onClick={()=>{
                const filterRestaurent = listOfRestaurent.filter((res) => res.info.avgRating>4.4);
                setResDataList(filterRestaurent);
            }}>Top Rated Restaurant</button>
          </div>
          <div className="res-container">
            {
             listOfRestaurent.map(restaurent => (<RestaurantCard  key={restaurent.info.id} resData={restaurent}/>))
            }
          </div>
       </div>
    )
 }

 
export default Body; 