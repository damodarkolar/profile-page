import './App.css';
import React from 'react';
import Profilepage from "./components/Profile-page"

let details={
  id: 1,
  profileDetails:{
    name:"Damodar",
    image:"https://media-exp1.licdn.com/dms/image/C5603AQFbwKlh3GTUuA/profile-displayphoto-shrink_400_400/0/1644071939237?e=1660176000&v=beta&t=n-c7Tr4lzW2EoSOvzgVdE7dDGWLTRS5o8OyM4oKxsnM",
    age:26,
    location:"Bengalore",
    organization:"Masai School"
  },
  todoList:[{ id: 1, title: "Wake up", status: true },
  { id: 2, title: "drink tea", status: false },
  { id: 3, title: "eat maggi", status: true },
  { id: 4, title: "sleep", status: false }]
}
function App() {
  return (
   <>
   <Profilepage {...details}/>
   </>
  );
}

export default App;
