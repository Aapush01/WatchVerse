import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoGrid} from "@/components/VideoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <VideoGrid></VideoGrid>
    </div>
  );
}
