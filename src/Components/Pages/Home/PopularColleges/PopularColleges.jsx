import  { useEffect, useState } from 'react';
import PopularCollegeCard from './PopularCollegeCard';

const PopularColleges = () => {
    const [popularCollegeData, setCollegeData] = useState([]);

    useEffect(() => {
        fetch('https://academic-support-hub-server.vercel.app/popularCollegeData')
            .then(res => res.json())

            .then((data) => {
                
                setCollegeData(data);
              });
    }, [])
    
   
    return (
     <section>
        <div>
            <h4 className="text-center bg-title font-bold text-black text-3xl m-6 p-6"> Popular Colleges </h4>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4">
          {
                 popularCollegeData?.map(college => <PopularCollegeCard
                    key={college._id}
                    college={college}
                 ></PopularCollegeCard>)
              }
         </div>
     </section>
  
    );
};

export default PopularColleges;