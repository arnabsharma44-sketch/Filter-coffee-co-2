import { useParams } from 'react-router-dom';
import WorkCategoryPage from './WorkCategoryPage';
import ProjectPage from './ProjectPage';
import { WORK_CATEGORIES } from '../data/workCategories';

export default function WorkRouteDispatcher() {
  const { slug } = useParams();

  if (WORK_CATEGORIES[slug]) {
    return <WorkCategoryPage />;
  }

  return <ProjectPage />;
}
