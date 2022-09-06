import React from "react";
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'

const RickyMorty = () => {
  const [characterdata, setcharacterdata] = useState([]);
  const [query, setquery] = useState("");

  const getCharacter = async () => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const data = await api.json();
    setcharacterdata(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getCharacter();
  }, [query]);

  return (
    <div>
      <div className="container maindiv">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col col-lg-6 col-md-4">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search Character"
                value={query}
                onChange={(e)=>setquery(e.target.value)}
              />
              <button className="btn btn-primary mt-3"
              
              >Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container maindiv ">
        <div className="row">
          {characterdata.map((results) => {
            return (
              <div className="col col-lg-6 col-md-5 d-flex justify-content-center m-0">
                 <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
              transition={{ duration: 1 }}
            >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: .5 },
                  }}
                  whileTap={{ scale: 1.2 }}
                className="card mt-4 border border-primary border-2">
                  <div className="card-horizontal ">
                    <div className="img-square-wrapper">
                      <img
                        className=""
                        src={results.image}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{results.name}</h2>
                      <div className="card-text mt-3 ">
                        <h5>
                          {results.status}-{results.species}
                        </h5>
                        <div className="mt-4">
                          <h6 className=" d-flex justify-content-start">
                            Last Know Location:
                          </h6>
                          <h5 className=" d-flex justify-content-start">
                            {results.location.name}
                          </h5>
                          <h6 className=" d-flex justify-content-start">
                            Origin:
                          </h6>
                          <h5 className=" d-flex justify-content-start">
                            {results.origin.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer"
                    style={{ backgroundColor: "#00ADB5", color: "222831" }}
                  >
                    <h6>Created at : {results.created}</h6>
                  </div>
                </motion.div>
                </motion.div>
              </div>
               
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RickyMorty;
