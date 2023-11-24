import './styles.css';
import one from '../../assets/street/one.jpg';
import two from '../../assets/street/two.jpg';
import three from '../../assets/street/three.jpg';
import four from '../../assets/street/four.jpg';
import five from '../../assets/street/five.jpg';

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='image-container one'>
        <img className='image' src={one} alt="Not Found" />
      </div>
      <div className='image-container two'>
        <img className='image' src={two} alt="Not Found" />
      </div>
      <div className='image-container three'>
        <img className='image' src={three} alt="Not Found" />
      </div>
      <div className='image-container four'>
        <img className='image' src={four} alt="Not Found" />
      </div>
      <div className='image-container five'>
        <img className='image' src={five} alt="Not Found" />
      </div>
    </div>
  );
}

export default Gallery;
