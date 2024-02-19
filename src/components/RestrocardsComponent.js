export default RestroCards = (props) => {
    const {restData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating,sla } = restData?.info;
    return (
        <div className="restro-card" style= {{ backgroundColor : "#f0f0f0" }}>
            <img className="restro-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} 
                alt="restro-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};