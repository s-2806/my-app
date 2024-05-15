import Image from "next/image";


export default function Home() {
  return (

    <div className="singin_back">
      <div id="Navbar">
        <div id="Navbar-Left">
          <Image className="logo" src="/logo.jpeg" alt="logo" width={50} height={50} />
          <span>Cooking success</span>
        </div>
        <div id="Navbar-Right">
          <a href="/Home">Home</a>
          <a href="/Blog_page">Blogs</a>
          <a href="/Signup">Sign-up</a>
          <a href="/Signin">Sign-in</a>
        </div>
      </div>
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}
      <form>
        <h3>Sign-up</h3>
        
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        
        <button>Sign_up</button>
        {/* <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
          <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
        </div> */}
      </form>
    </div>
  );
}
