import Image from "./Image"
import Name from "./Name";
import Age from "./Age";
import Location from "./Location";
import Organization from "./Organization";
let Profile =(props) => {
    let {name,age,location,organization,image}=props.profileDetails;
   console.log(name,age,location,organization,image)
    return (
        <>
        <Image image={image}/>
        <Name name={name}/>
        <Age age={age}/>
        <Location location={location}/>
        <Organization organization={organization}/>
        </>
    )
}

export default Profile;