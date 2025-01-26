const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                We connect job seekers with top opportunities across industries.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <p>
                Email:{" "}
                <a
                  href="mailto:yuvalchabra100@gmail.com"
                  className="text-white text-decoration-none"
                >
                  yuvalchabra100@gmail.com
                </a>
              </p>
              <p>Phone: +972 52-330-0695</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center p-3 bg-dark">
          © {new Date().getFullYear()} Yuval Chabra, All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
