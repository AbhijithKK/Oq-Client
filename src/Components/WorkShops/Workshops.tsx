import React from "react";
import "./Workshops.css";
import lap from "../../Assets/lap.jpeg";
import book from "../../Assets/book.jpeg";
import help from "../../Assets/hepl.jpeg";
import logo from "../../Assets/logo.jpeg";
const Workshops = () => {
  const arr = [
    {
      image: lap,
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci quod necessitatibus commodi non pariatur corporis tempore quam odit doloremque!",
    },
    {
      image: book,
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci quod necessitatibus commodi non pariatur corporis tempore quam odit doloremque!",
    },
    {
      image: help,
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci quod necessitatibus commodi non pariatur corporis tempore quam odit doloremque!",
    },
    {
      image: logo,
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci quod necessitatibus commodi non pariatur corporis tempore quam odit doloremque!",
    },
  ];
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Workeshops</h2>
      <div className="workshop-container">
        {
          arr.map((val,i)=>(
            <div key={i} className="card-body">
          <div className="card-content">
            <img src={val.image} alt="imgg" style={{height:'35px'}} />
            <p>{val.title}</p>
            <button>read more</button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Workshops;
