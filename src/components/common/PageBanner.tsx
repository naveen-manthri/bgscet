interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" />
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <h1 className="page-banner-title">{title}</h1>
            <p className="page-banner-subtitle mb-0">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
