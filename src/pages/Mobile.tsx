import CategoryPage from "./CategoryPage";
import { getProjectsByCategory } from "@/data/projects";

const Mobile = () => {
  const projects = getProjectsByCategory('mobile');
  
  return <CategoryPage category="mobile" projects={projects} />;
};

export default Mobile;