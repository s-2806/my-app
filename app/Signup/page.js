import Image from "next/image";


export default function Home() {
  return (
    <div className="singin_back">
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
        
        <button>Sign_ups</button>
        {/* <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
          <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
        </div> */}
      </form>
    </div>
  );
}
