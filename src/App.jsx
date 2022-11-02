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
  const [Route , SetRoute] = useState('signin');
  const [user ,Setuser] = useState({
    id:'',
    name:'',        
    email : '',
    joined : ''
  })

  // useEffect(()=>{
  //   fetch('http://localhost:1234/')
  //   .then(res=>res.json())
  //   .then(data =>{
  //     SetUser(data)  
  //     console.log(User)
  //   })
  // },[Route])

  useEffect(()=>{
    if(Search){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f1c5b1d9b2e212c92f97b00af13cb55&language=en-US&query=${Search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => SetMovie(data.results))
      .catch(err => console.log(err))
    }
  },[Search])

  const OnSearch = (e) =>{
    SetSearch(e.target.value)
  }

  const OnRoute = (route)=>{
    SetSearch('');
    SetRoute(route);
  }

  const LoadUser = (user) =>{
    Setuser({
      id:user.id,
      name:user.name,        
      email : user.email,
      joined : user.joined
    })
  }

  return (
    <div className='bg-[#18191A] min-h-screen'>
      <Nav Route={Route} OnRoute={OnRoute}  user={user}/>
      {Route === 'home'?
        <div>
            <Field OnSearch ={OnSearch}/>
            {Search?
              <Cardlist Movies={Movie}/>
              :
              <h1 className='text-[#E4E6EB] text-center mt-[9rem] text-5xl font-bold'>Hi!!! you are searching</h1>
            }
          </div>
        
        :
        (Route === 'signin'?
          <Signin OnRoute={OnRoute} Load={LoadUser}/>
          :
          <Register OnRoute={OnRoute} Load={LoadUser}/>
        )
      }
      
    </div>
  );
}

export default App;
