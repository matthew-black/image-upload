import {useSelector} from 'react-redux';
import ImageList from '../ImageList/ImageList.jsx'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome to here, {user.username}.</h2>
      <ImageList />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
