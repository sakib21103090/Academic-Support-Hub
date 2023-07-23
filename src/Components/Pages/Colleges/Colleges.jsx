import { useEffect, useState } from "react";
import CollegesCard from "./CollegesCard";

const Colleges = () => {
  const [CollegeData, setCollegeData] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:5000/CollegeData')
            .then(res => res.json())

            .then((data) => {
                
                setCollegeData(data);
              });
    }, [])
    return (
      <section>
        <div>
            <h4 className="text-center bg-title font-bold text-3xl  mb-2 pt-24">All Colleges </h4>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4">
          {
                 CollegeData?.map(colleges => <CollegesCard
                    key={colleges._id}
                    colleges={colleges}
                 ></CollegesCard>)
              }
         </div>
     </section>
    );
};

export default Colleges;