import { useLoaderData } from "react-router-dom";

const Details = () => {
    const Details = useLoaderData();
    console.log(Details)
      const { college_image, college_name, college_rating, event_name, research_count, research_title,faculty,sport_name,team_name,event_date,admission_date } = Details;
    return (
        <div className="hero-content d-Background  flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
<h2 className="card-title bg-title"> College Name :{college_name}</h2>
       <div className='text-black'>
       <p> <span className="font-bold">Admission Date: </span>{admission_date}</p>
       <p><span className="font-bold">College Rating:</span>{college_rating}</p>
       <h1 className="bg-title">-----Event---</h1>
       <p><span className="font-bold">Event Name: </span> {event_name}</p>
       <p> <span className="font-bold">Event Date: </span>{event_date}</p>
       <h1 className="bg-title">---research----</h1>
       <p><span className="font-bold">Research Title: </span>{research_title}</p>
       <p><span className="font-bold">Faculty: </span>{faculty}</p>
       <p><span className="font-bold">Admission Date: </span>quantity:{research_count}</p>
       <h1 className="bg-title">---Sport---</h1>
       <p><span className="font-bold">Sport Name: </span>{sport_name}</p>
       <p><span className="font-bold">Team Name: </span>{team_name}</p>
       </div>
       </div>

<div className="card  flex-shrink-0 mb-36 mt-[150px] w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body d-Background rounded ">
    <img className='w-[500px] rounded' src={college_image} alt="" />
  </div>
</div>
</div>

    );
};

export default Details;