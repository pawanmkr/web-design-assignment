import './styles.css'
import { IoMdStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { LuShare2 } from "react-icons/lu";



const Detail = () => {
  return (
    <div className='detail'>
      <div className="left">
        <div className="rating-review">
          <label className='icon small-icons star-icon'><IoMdStar /></label>
          <label>4.9 stars</label>
          <label className='review-count'>(231 Reviews)</label>
        </div>
        <h1 className="name">TSUKISHIMA MONJA STREET</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias vel facere molestiae facilis earum aut illum cupiditate eos. Ipsam cum atque, provident odit pariatur iste quisquam numquam quo id!
        </p>
        <div className="contact">
          <div className="location">
            <label className='icon small-icons'><IoLocationSharp /></label>
            <label>Tokyo, Japan</label>
          </div>
          <div className="phone">
            <label className='icon small-icons'><MdLocalPhone /></label>
            <label>+1 234 567 890</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="buttons">
          <button>
            <LuHeart />
          </button>
          <button>
            <LuShare2 />
          </button>
        </div>
        <label className='date'>October 4, 2023</label>
      </div>
    </div>
  )
}

export default Detail