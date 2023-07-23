import { Link } from "react-router-dom";

const PopularCollegeCard = ({college}) => {
      const {college_image, college_name, college_rating, event_name, research_count,sport_name,admission_date,_id }= college;
      // const { college_image, college_name, college_rating, event_name, research_count, research_title,faculty,sport_name,team_name,event_date,admission_date } = college;
   
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="college-image" src={college_image} alt="" />

        <div className="py-4 px-6">
          <h2 className="text-2xl bg-title font-semibold">{college_name}</h2>
          <p className="bg-ptag">Admission Dates: {admission_date}</p>
          <p className="bg-ptag">Events: {event_name}</p>
          <p className="bg-ptag">Research History: {research_count}</p>
          <p className="bg-ptag">Sports: {sport_name}</p>
          <p className="bg-ptag">Rating: {college_rating}</p>
          <Link to={`/details/${_id}`}><button htmlFor="details" className="c-btn">Details</button></Link> 
        </div>
      </div>
    
    );
};

export default PopularCollegeCard;