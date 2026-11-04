import searchIcon from"../assets/magnifying-glass.svg"
import homeIcon from"../assets/house.svg"
import film from"../assets/film-slate.svg" 
import monitor from"../assets/monitor.svg"
import trend from"../assets/trend-up.svg"
import plus from"../assets/plus.svg"
import salaar from"../assets/titlesalar.png"
import './home.css';
import MovieCard from "../components/MovieCard"

function Home() {
  return (
    <div className="netflix">
     <div className="sidebar">
     <img src={searchIcon} alt="searchicon" />
     <img src={homeIcon} alt="home" />
     <img src={film} alt="" />
     <img src={monitor} alt="" />
     <img src={trend} alt="" />
     <img src={plus} alt="" />


     </div>
     <div className="main">
       <div className="hero">
        <img src={salaar} alt="" />
        <p>Rating : 8/10</p>
        <p>2M streams</p>
        <div className="h-button">
          <button className="b1">Play</button>
          <button className="b2">Watch Trailer</button>
        </div>
       </div>
       <MovieCard/>
     </div>
    </div>
  )
}

export default Home