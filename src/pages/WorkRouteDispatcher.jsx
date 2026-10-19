import { useParams, Navigate } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import { WORK_CATEGORIES } from '../data/workCategories';

export default function WorkRouteDispatcher() {
  const { slug } = useParams();

  // If matches one of the removed subpages, redirect to main /work page
  if (WORK_CATEGORIES[slug]) {
    return <Navigate to="/work" replace />;
  }

  return <ProjectPage />;
}
