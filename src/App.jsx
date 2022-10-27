import { useState ,useEffect} from 'react';
import './App.css';
import Cardlist from './Components/Cardlist';
import Field from './Components/Field';
import Nav from './Components/Nav';
import Register from './Components/Register';
import Signin from './Components/Signin';

function App() {
  const [Movie , SetMovie] = useState([]);
  const [Search , SetSearch] = useState('');
  const [Route , SetRoute] = useState('signin')

  useEffect(()=>{
    if(Search){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f1c5b1d9b2e212c92f97b00af13cb55&language=en-US&query=${Search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => SetMovie(data.results))
    }
  },[Search])

  const OnSearch = (e) =>{
    SetSearch(e.target.value)
  }

  const OnRoute = (route)=>{
    SetRoute(route);
  }

  return (
    <div className='bg-[#18191A] min-h-screen'>
      <Nav Route={Route} OnRoute={OnRoute}/>
      {Route === 'home'?
        <div>
            <Field OnSearch ={OnSearch}/>
            <Cardlist Movies={Movie}/>
          </div>
        
        :
        (Route === 'signin'?
          <Signin OnRoute={OnRoute} />
          :
          <Register OnRoute={OnRoute}/>
        )
      }
      
    </div>
  );
}

export default App;
