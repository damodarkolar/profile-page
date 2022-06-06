import Profile from "./Profile";
import Todo from "./Todo-list"; 
const Profilepage=(props) =>{
   let {profileDetails, todoList}=props;
   console.log(props)
    return (
        <>
        <Profile profileDetails={profileDetails}/>
        <Todo todoList={todoList}/>
        </>
    );
}
export default Profilepage;