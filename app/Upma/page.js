import Image from "next/image";
import styles from "./pageupma.module.css";
export default function Home() {
  return (
    <div id="container_upma">
            <div id="incontainer_upma1"><Image src="/upma.jpg" alt="logo" width={500} /></div>
            <div id="incontainer_upma2">
                    <h1>Upma-Recipe</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </div>
    </div>
      );
}