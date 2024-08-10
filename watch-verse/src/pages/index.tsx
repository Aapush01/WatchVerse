import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCrad} from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
       <VideoCrad thumbnailImg={"img.jpg"}
                  AuthorImg={"img1.jpg"}  
                  title={"Level Up!, It's your turn now, shock them with your success"}
                  author={"Shahid Afridi"}
                  views={"970k"}
                  timestamp="9 month ago" />
    </div>
  );
}
