import { useRef } from "react";

export const Search=({fn})=>{
    const artist=useRef();
    return (
    <>
    <label>Artist Name</label>
     <input ref ={artist} type="text" className="form-control" placeholder="Search Song Artist wise here"></input>
     <button className="btn btn-success my-2" onClick={()=>{
        fn(artist.current.value);
     }}>Search It</button>
    </>
   );
}