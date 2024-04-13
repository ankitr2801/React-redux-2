import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
//Third task: import useParams hook
import {useParams , Link} from "react-router-dom"

function Details() {

  const { id } = useParams();
  console.log(id);

  const Course = coursesData.find((i) => i.id === id);
  console.log(Course);
  return (
    //Third Task: get course id and match it with the data
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={Course.img} alt={Course.alt} />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}>{Course.title}</h1>
          <p className={style.card_description}>{Course.description}</p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
     <Link to={`/learn/${Course.id}`}><button className={style.button}>Start Learning</button></Link>
    </div>
  );
}

export default Details;
