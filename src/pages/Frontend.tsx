import CategoryPage from "./CategoryPage";
import { getProjectsByCategory } from "@/data/projects";

const Frontend = () => {
  const projects = getProjectsByCategory('frontend');
  
  return <CategoryPage category="frontend" projects={projects} />;
};

export default Frontend;