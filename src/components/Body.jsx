import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard'
import Loader from './Loader';
import Shimmer from './Shimmer';

const Body = () => {
    const [resList, setResList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchedRestaurant, setSearchedRestaurant] = useState("");
    const [searchedListResult, setSearchedListResult] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await response.json();
            setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setSearchedListResult(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setIsLoading(false);
            console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    }
    const handelFilterResturants = () => {
        const newArr = resList.filter((restaurant) => restaurant.info.avgRating > 4.5);
        setResList(newArr);
    }
    const handelSearch = ()=>{
        const newArr = resList.filter((restaurant)=>{
            const nameMatch = restaurant.info.name.toLowerCase().includes(searchedRestaurant.trim().toLowerCase());
            const cusineMatch = restaurant.info.cuisines.some((cusine)=> cusine.toLowerCase().includes(searchedRestaurant.trim().toLowerCase()))
            return nameMatch || cusineMatch;
        })
        setSearchedListResult(newArr);


    }
    if (isLoading) {
        return <Shimmer />
    }

    return (
        <>
            <div className="body container">
                <div className="filter-btn-container">
                    <div className="search-container">
                        <input type="text" name="" value={searchedRestaurant} onChange={(e)=>setSearchedRestaurant(e.target.value)}/>
                        <button type="button" className='search-btn' onClick={handelSearch}>Search</button>
                    </div>
                    <button className='filter-btn' type='button'
                        onClick={handelFilterResturants}
                    >Top Resturants</button>
                </div>
                <div className="res-container">
                    {
                        searchedListResult.map((restaurant) => {
                            return (

                                <ResturantCard key={restaurant.info.id} resData={restaurant} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )


}

export default Body