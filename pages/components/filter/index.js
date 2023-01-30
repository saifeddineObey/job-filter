import React from "react";
import style from "./jobFilter.module.scss";

function JobFilter({ data, setFilter }) {
  const locationArray = data?.map((item) => item?.employee?.city);
  const filteredLocations = locationArray?.filter(
    (item, index) => locationArray.indexOf(item) === index
  );
  const departmentArray = data?.map((item) => item?.department?.title);
  const filteredDepartments = departmentArray?.filter(
    (item, index) => departmentArray.indexOf(item) === index
  );
  const expLevelArray = data?.map(
    (item) => item?.levelsCollection?.items[0].title
  );
  const filteredExpLevels = expLevelArray?.filter(
    (item, index) => expLevelArray.indexOf(item) === index
  );

  return (
    <div className={style.jobsFilter}>
      <div className={style.title}>
        <h6 className="text-center">
          {data?.length} offens Stellen bei Creditplus
        </h6>
        <h1 className="text-center">Hier beginnt deine Zukunft</h1>
      </div>
      <div
        className={`d-sm-flex justify-content-between ${style.filterCOntainer}`}>
        <div className={`col-sm-3 ${style.filterItem}`}>
          <select
            id="filter_department"
            onChange={(e) => setFilter(e.target.value)}>
            <option value="" disabled selected>
              Bereich
            </option>

            {filteredDepartments?.map((item, index) => {
              return (
                <option key={index} name={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`col-sm-3 ${style.filterItem}`}>
          <select
            id="filter_location"
            onChange={(e) => setFilter(e.target.value)}>
            <option value="" disabled selected>
              Stads
            </option>

            {filteredLocations?.map((item, index) => {
              return (
                <option key={index} name={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`col-sm-3 ${style.filterItem}`}>
          <select id="filter_exp" onChange={(e) => setFilter(e.target.value)}>
            <option value="" disabled selected>
              Erfahrungslevel
            </option>
            {filteredExpLevels?.map((item, index) => {
              return (
                <option key={index} name={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default JobFilter;
