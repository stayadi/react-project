import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault()
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(!password.match(mediumRegex)){
      alert("Please enter A strong password")
    }else{
      history("/product");
    }
  }

  return (
    <div>
      <div className="cart-container">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          ShopHere
        </a>
        </nav>
        </div>
      <form action="" onSubmit={handleSubmit}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Log in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg" name="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                    />
                     
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg" name="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} minLength="8"
                    />
                     
                  </div>
                  
                  <button className="btn btn-primary btn-lg btn-block" type="submit"  >
                    Login
                  </button>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
      </form>
    </div>
  );
};

export default Login;
