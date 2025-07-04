import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { mainDemoOnepage } from "@/data/menu";
import Header1 from "@/components/headers/Header1";
import AnimatedText from "@/components/common/AnimatedText";
import PortfolioMassonry3 from "@/components/portfolio/PortfolioMassonry3";

export const metadata = {
  title:
    "Our Work || RedirectPub",
  description:
    "The Best Agency Service in UK",
};
export default function MainPortfolioPageMasonry3Col() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="A Few Selected Projects" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-10 offset-lg-1">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Only a small portion of the websites we have created for our incredible clients over the years are included in this presentation. Case studies that highlight our proficiency in front-end development, site design, and platform integrations such as WordPress, Shopify, Hubspot, Craft CMS, and others are included.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <PortfolioMassonry3 />
              </section>
              {/* End Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
