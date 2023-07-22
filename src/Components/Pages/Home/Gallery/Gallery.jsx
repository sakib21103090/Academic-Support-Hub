import  { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Gallery = () => {
    useEffect(() => {
        Aos.init({
          multiple: true,
        });
      }, []);
    return (
        <div>
            <div>
                <h4 className="text-center bg-title font-bold text-black text-3xl m-6 p-6"> Graduates Student group pictures</h4>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/n6Rym9m/1.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/GFg6qLC/2.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/1v33CCq/3.jpg`} alt="Image" className="w-full h-full object-cover  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/WWfWBQy/4.jpg`} alt="Image" className="w-full h-full object-cover  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/S7KNQyh/5.jpg`} alt="Image" className="w-full h-full object-cover  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/KVhvS2L/6.jpg`} alt="Image" className="w-full h-full object-cover  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/ZNfWGkb/7-1.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/Vp47P07/8.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/gjygg4t/9.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/r6fbvwB/10.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/54CGyJT/11-1.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/522s1x3/12.jpg`} alt="Image" className="w-full h-full object-cover rounded" />
        </div>       
        {/* Add more images as needed */}
      </div>
        </div>

        
    );
};

export default Gallery;