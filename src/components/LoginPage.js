import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100 login-bg"
      style={{
        backgroundImage: 'url(https://i.ibb.co/NFMqS6r/milad-fakurian-PGd-W-b-HDbp-I-unsplash-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="row w-100 justify-content-center">
        {/* Left Section */}
        <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-primary mb-4" style={{ fontSize: "1.8rem" }}>
            Enjoy Exclusive Features
          </h2>
          <div className="d-flex justify-content-center">
            <img
              src="https://i.ibb.co/fXpMvdv/Pngtree-business-data-analysis-concept-with-7516382-1-1.png"
              alt="Illustration"
              className="img-fluid illustration-img"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
          {/* Welcome + SBI ePay Logo */}
          <div className="welcome-logo text-center mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://i.ibb.co/dJj5cBx/Welcome-2x.png"
              alt="Welcome and SBI ePay Logo"
              style={{ width: "120px", marginRight: "10px" }}
            />
            <img
              src="https://i.ibb.co/QH7Kn3Y/sbi-logo-2.png"
              alt="SBI ePay Logo"
              style={{ width: "120px", marginLeft: '0' }} // No space between the logos
            />
          </div>

          {/* Login Box */}
          <div className="login-box p-3 text-center" style={{
              maxWidth: '350px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
            }}>
            <h5 className="text-center mb-3">Login</h5>
            <hr className="blue-line" style={{
                border: "2px solid blue",
                width: "100%",
                marginBottom: "25px",
              }}
            />
            <p className="text-muted text-center mb-3">
              Login to your account, enjoy exclusive features and many more
            </p>

            <form>
              <div className="form-group mb-3 text-left">
                <label className="w-100">Mobile Number / Email ID / User ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your ID"
                  style={{
                    height: '40px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(243, 244, 246, 0.7)',
                    border: '1px solid #ddd',
                    paddingLeft: '15px',
                  }}
                />
              </div>

              <div className="form-group mb-4 text-left">
                <label className="w-100">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  style={{
                    height: '40px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(243, 244, 246, 0.7)',
                    border: '1px solid #ddd',
                    paddingLeft: '15px',
                  }}
                />
              </div>

              {/* Adjusted the spacing above the Reset Password link */}
              <div className="text-right mb-3" style={{ marginTop: '15px' }}>
                <a href="#" className="text-info">
                  Reset Password
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-block continue-btn"
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  fontWeight: '600',
                  height: '40px',
                  borderRadius: '5px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
