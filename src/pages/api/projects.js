
import jsData from "./js-projects.json";

export const getMLProjects = () => {
  return mlData;
};

export const getJSProjects = () => {
  return jsData;
};


export default (req, res) => {
   if (req?.query?.project === "js") {
    const projects = getJSProjects();
    res.json(projects);
  }  else if (req?.query?.project === "all") {
    const projects = {
      ml: getMLProjects(),
      js: getJSProjects(),
      py_bots: getPyBotsProjects(),
    };
    res.json(projects);
  }
};
