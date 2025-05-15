import React from 'react'

const ResturantCard = ({resData}) => {
    
  return (
    <>
        <div className="res-card">
            <img className='res-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} alt="food-img" />
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines.join(", ")}</h4>
            <h4>{resData?.info?.avgRating} ⭐</h4>
            <h4>{resData?.info?.sla?.deliveryTime} Minutes</h4>
        </div>
    </>
  )
}

export default ResturantCard