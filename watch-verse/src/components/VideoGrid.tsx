import { VideoCrad } from "./VideoCard"

const VIDEOS = [{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
},{
    thumbnailImg: "img.jpg",
    AuthorImg: "img1.jpg" , 
    title: "Rise and Shine! It's Your Time to Stun the World with Success",
    author: "Shahid Afridi",
    views: "970k",
    timestamp: "9 month ago"
}

]
export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCrad thumbnailImg={video.thumbnailImg}
                  AuthorImg={video.AuthorImg}  
                  title={video.title}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp} />
        </div> )}


    </div>

}