import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1 from "@/components/headers/Header1";
import { mainDemoOnepage } from "@/data/menu";

export const metadata = {
  robots: "noindex,nofollow",
  title: "Photography & Drone Services | RedirectPub",
  description:
    "Professional Photography, Printing, and Drone Cinematography Services in UK",
};

export default function PhotographyPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1 links={mainDemoOnepage} />
          </nav>

          <main id="main">
            {/* Hero Section with Video Background */}
            <ParallaxContainer
              className="home-section bg-gray-light-1 parallax-5 scrollSpysection"
              style={{ minHeight: "100vh" }}
              id="home"
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  overflow: "hidden",
                }}
              >
                <video
                  src="/assets/videos/vid-5.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "0.8",
                  }}
                />
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <Hero1 />
              </div>
            </ParallaxContainer>

            {/* Services Showcase with Unsplash Images */}
            <section className="page-section bg-light">
              <div className="container">
                <div className="row mb-40 text-center">
                  <div className="col-md-8 offset-md-2">
                    <h2 className="section-title">
                      Creativity meets technology here.
                    </h2>
                    <p className="section-descr">
                      Experience world-class visual content creation.
                    </p>
                  </div>
                </div>

                <div className="row mt-n30">
                  {/* Service 1: Drone Shoot */}
                  <div className="col-md-4 mt-30">
                    <div className="post-prev-img">
                      <img
                        src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop"
                        alt="Drone Photography"
                        className="rounded shadow"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h4 className="mt-20">Drone Cinematography</h4>
                    <p>
                      Capturing breathtaking aerial perspectives for any
                      occasion.
                    </p>
                  </div>

                  {/* Service 2: Professional Photography */}
                  <div className="col-md-4 mt-30">
                    <div className="post-prev-img">
                      <img
                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
                        alt="Professional Photography"
                        className="rounded shadow"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h4 className="mt-20">Event Photography</h4>
                    <p>
                      Preserving your most precious moments with professional
                      clarity.
                    </p>
                  </div>

                  {/* Service 3: Printing Services */}
                  <div className="col-md-4 mt-30">
                    <div className="post-prev-img">
                      <img
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop"
                        alt="Printing Services"
                        className="rounded shadow"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h4 className="mt-20">Quality Printing</h4>
                    <p>
                      High-end printing services for photos, banners, and
                      marketing materials.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Video Gallery Section */}
            <section className="page-section">
              <div className="container">
                <h3 className="text-center mb-40">Featured Video Projects</h3>
                <div className="row">
                  <div className="sm:col-6 col-md-3 mb-30">
                    <video
                      src="/assets/videos/vid-5.mp4"
                      controls
                      className="w-100 rounded shadow"
                    />
                  </div>
                  <div className="sm:col-6 col-md-3 mb-30">
                    <video
                      src="/assets/videos/vid.mp4"
                      controls
                      className="w-100 rounded shadow"
                    />
                  </div>
                  <div className="sm:col-6 col-md-3 mb-30">
                    <video
                      src="/assets/videos/vid2.mp4"
                      controls
                      className="w-100 rounded shadow"
                    />
                  </div>
                  <div className="sm:col-6 col-md-3 mb-30">
                    <video
                      src="/assets/videos/vid-6.mp4"
                      controls
                      className="w-100 rounded shadow"
                    />
                  </div>
                </div>
              </div>
            </section>

            <Home1 />
          </main>

          <Footer1 />
        </div>
      </div>
    </>
  );
}
