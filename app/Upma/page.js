import Image from "next/image";

export default function Home() {
  return (
         <div> <div id="Navbar">
        <div id="Navbar-Left">
          <Image className="logo" src="/logo.jpeg" alt="logo" width={50} height={50} />
          <span>Cooking success</span>
        </div>
        <div id="Navbar-Right">
          <a href="/Home">Home</a>
          <a href="/Blog_page">Blogs</a>
          <a href="/Signup">Signup</a>
          <a href="/Signin">Signin</a>
        </div>
      </div>
    <div id="container_upma">
    <div id="incontainer_upma1"><Image className="logo_upma" src="/upma.jpg" alt="logo" width={500} height={300} /></div>
            <div id="incontainer_upma2">
                    <h1>Upma-Recipe</h1>
                    <ul>
                        <li><Image src="/cutlery2.0.jpg" className="point" width={25} height={25}></Image> Lorem ipsum dolor sit amet.</li>
                        <li><Image src="/cutlery2.0.jpg" className="point" width={25} height={25}></Image>Lorem ipsum dolor sit amet.</li>
                        <li><Image src="/cutlery2.0.jpg" className="point" width={25} height={25}></Image>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                        <li><Image src="/cutlery2.0.jpg" className="point" width={25} height={25}></Image>Lorem ipsum dolor sit amet.</li>
                        <li><Image src="/cutlery2.0.jpg" className="point" width={25} height={25}></Image>Lorem ipsum dolor sit amet.</li>
                    </ul>
            </div>
    </div></div>
      );
}