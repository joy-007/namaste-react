import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props)=>{

    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info
    return (
     <div className="res-card">
        <img alt="res-card" className="res-foodimg" 
         src={CDN_URL + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating} *</h5>
        <h5>{costForTwo}</h5>
        <h6>Delivery in {sla.deliveryTime} mins</h6>
      </div> 
    )
  }

export default RestaurantCard;  