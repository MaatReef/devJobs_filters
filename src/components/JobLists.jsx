import jobs from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

export function JobLists(){
    const [jobData, setJobData] = useState(jobs);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchByLocation, setSearchByLocation] = useState("");
    const searchTermValue = searchTerm.toLowerCase();

    const locationSearchHandler = () => {
        const filteredData = jobs.filter((job) => job.location.toLowerCase().includes(searchByLocation.toLowerCase()))
        setJobData(filteredData)    
    };

    const filterJobData = (e) => {
        const filterValue = e.target.value
        if(filterValue === "full-time"){
            const filteredData = jobs.filter((job) => job.contract === "Full Time")
            setJobData(filteredData)
        } else if(filterValue === "part-time"){
            const filteredData = jobs.filter((job) => job.contract === "Part Time")
            setJobData(filteredData)
        } else if(filterValue === "freelance"){
            const filteredData = jobs.filter((job) => job.contract === "Freelance")
            setJobData(filteredData)
        }
    }



    return (
        <section className="job__list">
            <div className="container">
                <div className="job__list__wrapper">
                    <div className="search__panel">
                        <div className="search__panel-01">
                            <input className="text__max"
                                type="text" 
                                placeholder="Búsqueda por empresa o título"
                                value={searchTerm}    
                                onChange={(e) => setSearchTerm(e.target.value)}
                                />
                        </div>
                        <div className="search__panel-02">
                            <input className="text__max"
                                type="text" 
                                placeholder="Búsqueda por ubicación"
                                value={searchByLocation}    
                                onChange={(e) => setSearchByLocation(e.target.value)}
                                />
                            <button onClick={locationSearchHandler} className="btn">Buscar</button>
                        </div>
                        <div className="search__panel-03">
                            <select onChange={filterJobData} className="text__max">
                                <option className="text__max">Filtrar trabajo por</option>
                                <option className="text__max" value="full-time">Tiempo Completo</option>
                                <option value="part-time">Tiempo Parcial</option>
                                <option value="freelance">Freelance</option>
                            </select>
                        </div>
                    </div>
                    <div className="jobs__wrapper">
                        {jobData?.filter((job) =>{
                            if(searchTerm === "") return job;
                            if(job.position.toLowerCase().includes(searchTermValue) || job.company.toLowerCase().includes(searchTermValue))
                            
                            return job
                        })
                        .map((item) => (
                            <div key={item.id} className="job__item">
                                <img src={item.logo} alt="" />
                                <div className="job__content">
                                    <h6>{item.postedAt} - {item.contract}</h6>          
                                    <h1><Link to={`/jobs/${item.position}`}>
                                        {item.position}
                                    </Link></h1>
                                    <p>{item.company}</p>
                                    <div className="location">
                                        <p>
                                            Location: <span>{item.location  }</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}