import AnimatedText from "@/components/common/AnimatedText";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { mainDemoOnepage } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title: "About Us || Redirect Pub",
  description: "About Redirect Pub - Professional Photography & Drone Services",
};

export default function AboutPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1 links={mainDemoOnepage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gray-light-1 bg-scroll overflow-hidden">
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="About" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Us" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          />
                        </span>
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Creative minds delivering excellence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-section">
              <div className="container">
                <div className="row align-items-center mb-80 mb-sm-40">
                  <div className="col-md-6 mb-sm-30">
                    <div
                      className="post-prev-img rounded-4 overflow-hidden shadow"
                      style={{ border: "1px solid #eee" }}
                    >
                      <Image
                        src="/assets/images/about-image.jpg"
                        width={800}
                        height={600}
                        alt="About Highlight"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="section-title mb-30">Who We Are</h3>
                    <p className="section-descr mb-20">
                      We are a passionate team dedicated to capturing the world
                      from unique perspectives.
                    </p>
                    <p className="mb-0">
                      From aerial drone shots to high-quality printing, we bring
                      your vision to life. Our commitment to quality and
                      creativity sets us apart in the industry.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="post-prev-img rounded-4 overflow-hidden shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                        width={800}
                        height={500}
                        alt="Team"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="post-prev-img rounded-4 overflow-hidden shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                        width={800}
                        height={500}
                        alt="Office"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="post-prev-img rounded-4 overflow-hidden shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                        width={800}
                        height={500}
                        alt="Work"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="post-prev-img rounded-4 overflow-hidden shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
                        width={800}
                        height={500}
                        alt="Meeting"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="post-prev-img rounded-4 overflow-hidden shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                        width={800}
                        height={500}
                        alt="Brainstorming"
                        className="w-100"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
