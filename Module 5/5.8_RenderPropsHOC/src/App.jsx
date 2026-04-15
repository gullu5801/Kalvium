import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;