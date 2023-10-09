

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <h1 className="font-bold text-pink-500 text-3xl">Dream Events</h1>
    <p>Providing reliable services since 2002</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Wedding Planning Services</a> 
    <a className="link link-hover">Photography and Videography</a> 
    <a className="link link-hover">Catering and Food Services</a> 
    <a className="link link-hover">Venue Selection and Decoration</a>
    <a className="link link-hover">Entertainment and Music</a>
    <a className="link link-hover">Beauty and Wellness Services</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact us</a> 
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;