import CategoryPage from "./CategoryPage";
import { getProjectsByCategory } from "@/data/projects";

const DesignTools = () => {
  const projects = getProjectsByCategory('design-tools');
  
  return <CategoryPage category="design-tools" projects={projects} />;
};

export default DesignTools;