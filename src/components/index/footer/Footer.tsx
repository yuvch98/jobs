const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white text-center text-lg-start mt-5">
        {/* Copyright Section */}
        <div className="text-center p-3 bg-dark">
          © {new Date().getFullYear()} Yuval Chabra, All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
