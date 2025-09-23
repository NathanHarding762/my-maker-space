import CategoryPage from "./CategoryPage";
import { getProjectsByCategory } from "@/data/projects";

const Backend = () => {
  const projects = getProjectsByCategory('backend');
  
  return <CategoryPage category="backend" projects={projects} />;
};

export default Backend;