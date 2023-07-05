
import './App.css';
import NavigationBar from './komponen/NavigationBar';
import Intro         from './komponen/Intro';
import Trending      from './komponen/Trending';
import './komponen/style/landingPage.css';
import Superhero     from './komponen/Superhero';


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>

      <div className='Trending'>
        <Trending/>
       
      </div>

      <div className='Superhero'>
        <Superhero/>
      </div>
    </div>
  );
}

export default App;
