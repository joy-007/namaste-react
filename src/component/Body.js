import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () =>{

    const[listOfRestaurent,setListOfRestaurent] = useState([]);
    const[filterRestaurent,setFilterRestaurent] = useState([]);
    const[searchText, setSearchText] =useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5856185&lng=88.4362322&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        setListOfRestaurent(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurent(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return (
       <div className="body">
          <div className="filter">
            <div className="search-res">
               <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                   setSearchText(e.target.value)
               }}></input>
               <button onClick={()=>{
                   const filterRestaurent = listOfRestaurent.filter((res) => res.info.name.toLowerCase().includes(searchText));
                   setFilterRestaurent(filterRestaurent);
               }} >Search</button>
            </div>

            <button className="filter-btn"  onClick={()=>{
                const filterRestaurent = listOfRestaurent.filter((res) => res.info.avgRating>4.2);
                setFilterRestaurent(filterRestaurent);
            }}>Top Rated Restaurant</button>
          </div>
          <div className="res-container">
            {
             filterRestaurent.map(restaurent => (<RestaurantCard  key={restaurent.info.id} resData={restaurent}/>))
            }
          </div>
       </div>
    )
 }

 
export default Body; 