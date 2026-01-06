import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { mainDemoOnepage } from "@/data/menu";
import Header1 from "@/components/headers/Header1";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";

export const metadata = {
  title: "Our Work || RedirectPub",
  description: "The Best Agency Service in UK",
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
                    "url('/assets/images/photography- (13).jpg')",
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
                              Explore our diverse portfolio of photography and
                              videography projects. From stunning aerial drone
                              shots to professional event coverage, we bring
                              your vision to life.
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
                <div className="container mt-60 mb-60">
                  <div className="row justify-content-center">
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((i) => (
                      <div className="col-md-4 mb-30" key={i}>
                        <div className="rounded-4 overflow-hidden">
                          <Image
                            src={`/assets/images/photography- (${i}).jpg`}
                            width={800}
                            height={600}
                            alt={`Work ${i}`}
                            className="w-100 object-fit-cover"
                            style={{ marginBottom: "-15px", display: "block" }}
                            unoptimized
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
