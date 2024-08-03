import { useEffect, useState } from "react";
import { Search } from "../componenets/Search"
import { Songs } from "../componenets/Songs";
import { getSongs } from "../services/api_client";
import { Player } from "../componenets/Player";

export const SearchPage=()=>{
    const [allSongs,setSongs]=useState([]);
    const [flag,setFlag]=useState(false);
    const[song,setPlayerSong]=useState(null);
    const loadSongs =async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
        
    },[])

    const togglePlayer =(flag,songarg)=>{
        console.log("flag:",flag);
        setPlayerSong(songarg);
        setFlag(flag);

    }
    const getArtistName = async (artistName) =>{
        console.log("Receved Artist Name",artistName);
        setSongs( await getSongs(artistName));
    }
    const jsx=<> <Search fn={getArtistName}></Search>
        <Songs fn={togglePlayer} allSongs= {allSongs}></Songs></>;
    return(
    <div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
        {flag?<Player fn={togglePlayer} song={song}></Player>:jsx}
       
    </div>
    );
   
}

