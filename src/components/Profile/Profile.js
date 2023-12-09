import obj from "./profileData";
function Profile(){
    return(
        <div>
            <div>
                <img src={obj[0].Image} alt="Image1" width={200} height={200} />
                <h3>Id:{obj[0].Id}</h3>
                <h3>Name:{obj[0].name}</h3>
            </div>
            <div>
                <img src={obj[1].Image} alt="Image2" width={200} height={200}/>
                <h3>Id:{obj[1].Id}</h3>
                <h3>Name:{obj[1].name}</h3>
            </div>
        </div>
    )
}
export default Profile;