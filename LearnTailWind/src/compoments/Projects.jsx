import { useLoaderData } from "react-router-dom";

function Projects() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="min-h-screen relative gap-y-24 text-center gap-12 text-2xl pb-4 max-w-[90%] mx-auto md:grid-cols-2 items-center pt-40 lg:pt-50">
      <div className="flex p-5 justify-around gap-30">
        Name : {data["name"]}
        <img
          src={data["img"]}
          alt={`${data["name"]} Image`}
          height={300}
          width={270}
        />
      </div>
      <h3>{data["bio"]}</h3>
      <h2 className="text-center">PROJECTS</h2>
      <ul className="text-start">
        {data["projectList"].map((item, index) => {
          return (
            <li key={item}>
              {index + 1}.{item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

async function getProjectsInfo() {
  console.log("Called Loader..");
  const userResponse = await fetch(
    "https://api.github.com/users/Vivekanand-s-naik",
  );
  const userData = await userResponse.json();
  const projectsResponse = await fetch(
    "https://api.github.com/users/Vivekanand-s-naik/repos",
  );
  const projectsData = await projectsResponse.json();
  let projectList = [];
  for (let item of projectsData) {
    projectList.push(item["name"]);
  }
  console.log("projectList", projectList);
  return {
    name: userData["name"],
    img: userData["avatar_url"],
    bio: userData["bio"],
    projectList: projectList,
  };
}
/* eslint-disable react-refresh/only-export-components */
export default Projects;
export { getProjectsInfo };
