import { useEffect, useState } from "react";
import Pagination from "./components/pagination";
import style from "../styles/index.module.scss";
import JobFilter from "./components/filter";
import {query} from "./util/query"


const accessToken = "RBYTdZcjCYOEXswQVZbEZe3ezBefHx_Khi8IuYcJHrM";
const spaceId = "h4fy7qjn6mui";


export default function Home() {

  const [data, setData] = useState();
  const [filter, setFilter] = useState("");
  const [filtredData, setFiltredData] = useState();
  
  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/interview`,
      {
        method: "Post",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.jobCollection.items);
      });
  }, []);

  useEffect(() => {
    const departmentFiltredData = data?.filter((word) =>
      word.department?.title.includes(filter)
    );
    const locationFiltredData = data?.filter((word) =>
      word.employee?.city.includes(filter)
    );
    const expLevelFiltredData = data?.filter((word) =>
      word.levelsCollection?.items[0].title.includes(filter)
    );

    setFiltredData(
      departmentFiltredData?.length > 0
        ? departmentFiltredData
        : locationFiltredData?.length > 0
        ? locationFiltredData
        : expLevelFiltredData
    );
  }, [filter]);

  return (
    <div className={style.jobs}>
      <div className={style.filterContainer}>
        <JobFilter data={data} setFilter={setFilter} />
      </div>
      <div className="container">
        <Pagination data={filter === "" ? data : filtredData} />
      </div>
    </div>
  );
}
