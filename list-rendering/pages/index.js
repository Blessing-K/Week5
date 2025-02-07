import { Geist, Geist_Mono } from "next/font/google";
import ItemList from "../components/ItemList"; //imported ItemList to index.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    return (
        <div>
            <h1>Welcome to My List App</h1>
            <ItemList />
        </div>
    );
}
