import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCrad} from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
       <VideoCrad></VideoCrad>
    </div>
  );
}
