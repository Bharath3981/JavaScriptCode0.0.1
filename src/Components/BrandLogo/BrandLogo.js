import brandLogoImage from '../../assets/img/illustrations/falcon.png';

function BrandLogo() {
  return (
    <a className="navbar-brand" href="index.html">
      <div className="d-flex align-items-center py-3"><img className="me-2" src={brandLogoImage} alt="" width="40" /><span className="font-sans-serif">falcon</span></div>
    </a>
  );
}

export default BrandLogo;
