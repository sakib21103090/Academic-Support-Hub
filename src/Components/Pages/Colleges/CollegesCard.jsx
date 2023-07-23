import { Link } from "react-router-dom";

const CollegesCard = ({colleges}) => {
    
    const {college_image, college_name, college_rating,  research_count,admission_date,_id }= colleges;
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="college-image" src={college_image} alt="" />

        <div className="py-4 px-6">
          <h2 className="text-xl bg-title font-bold">{college_name}</h2>
          <p className="bg-ptag">Admission Dates: {admission_date}</p>
          <p className="bg-ptag">Research History: {research_count}</p>
          <p className="bg-ptag">Rating: {college_rating}</p>
          <Link to={`/details/${_id}`}><button htmlFor="my-modal-6" className="c-btn">Details</button></Link> 
        </div>
      </div>
    );
};

export default CollegesCard;