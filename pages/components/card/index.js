import React from "react";
import Style from "./card.module.scss";

function Card(props) {
  const { department, name, employee, type } = props;
  return (
    <div className={Style.card}>
      <div>
        <h6 className={Style.department}>{department.title}</h6>
        <h5 className={Style.position}>{name}</h5>
        <div className={Style.locationType}>
          <h5 className="me-3">
            <i className="bi bi-geo-alt me-1"></i>
            {employee.city}
          </h5>
          <h5>
            <i className="bi bi-clock me-1"></i>
            {type.title}
          </h5>
        </div>
      </div>
      <div className={Style.link}>
        <h6>stelle anzeigen</h6>
        <i className="bi bi-arrow-up-right ms-1"></i>
      </div>
    </div>
  );
}

export default Card;
