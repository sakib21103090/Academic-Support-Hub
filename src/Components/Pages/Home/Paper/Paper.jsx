

const Paper = () => {
    return (
       <section>
          <div>
            <h4 className="bg-title font-bold  text-3xl mx-auto text-center mt-14 mb-14 "> Researched by the college students</h4>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mr-16 ml-24 lg:mx-[40px] gap-8">
            
            <div>
                <img className="college-image" src={`https://i.ibb.co/QdJv4rH/clg2.jpg`} alt="" />
                <button className="c-btn"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4508316">see Paper</a></button>
            </div>
            
            <div>
            <img className="college-image" src={`https://i.ibb.co/82PKLpC/clg4.jpg`} alt="" />
            <button className="c-btn"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4509634">see Paper</a></button>
            </div>

            <div>
            <img className="college-image" src={`https://i.ibb.co/y8FWwHL/clg3.jpg`} alt="" />
            <button className="c-btn"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4509548">see Paper</a></button>
            </div>

            <div>
            <img className="college-image" src={`https://i.ibb.co/FqDzDrq/clg6.jpg`} alt="" />
            <button className="c-btn"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4507096">see Paper</a></button>
            </div>
        </div>
       </section>
    );
};

export default Paper;