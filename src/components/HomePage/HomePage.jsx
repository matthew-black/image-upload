import { useSelector } from 'react-redux';
import ImageList from '../ImageList/ImageList.jsx'
import ImageUploadForm from '../ImageUploadForm/ImageUploadForm.jsx';

function HomePage() {
  const user = useSelector((store) => store.user);
  return (
      <div className="grid">
        <ImageList />
        <ImageUploadForm />
      </div>
  );
}


export default HomePage;