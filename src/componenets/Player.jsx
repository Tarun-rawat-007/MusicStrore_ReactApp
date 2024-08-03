
export const Player = ({fn,song})=>{
    console.log("song:",song);
    return(
        <div >
         <div className="container mt-4">
    <div className="card shadow-sm" style={{ backgroundImage: 'url(path_to_your_image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="card-body" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <button 
                onClick={() => { fn(false, null); }} 
                className="btn btn-success mb-2">
                Back to Songs
            </button>
            <div className="text-center">
                <img src={song.artworkUrl100} alt="Artwork" className="img-fluid mb-3 rounded" />
                <p className="mb-1">
                    <strong>Artist:</strong> {song?.artistName}
                </p>
                <p>
                    <strong>Song:</strong> {song?.trackName}
                </p>
            </div>
            <div className="mt-3">
                <audio controls className="w-100">
                    <source src={song?.previewUrl} type="audio/mp4" />
                </audio>
            </div>
        </div>
    </div>
</div>



        </div>
       
    )
}