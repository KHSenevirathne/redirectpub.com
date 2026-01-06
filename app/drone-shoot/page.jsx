import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const onePage = false;
const dark = false;
import Image from "next/image";
import { mainDemoOnepage, strongMultiPages } from "@/data/menu";
import Link from "next/link";
import Service from "@/components/homes/home-4/Service";
import AnimateButton from "@/components/common/AnimateButton";
import { progressData } from "@/data/skills";
import { features5 } from "@/data/features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export const metadata = {
  title: "Drone Shoot || Redirect Pub - Professional Web Development Services",
  description: "Professional Drone Shoot Services",
};

export default function DroneShootPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header1 links={mainDemoOnepage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Drone" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Shoot" />
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
                      Stunning aerial photography and videography for your
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section pb-0 scrollSpysection   ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="services"
            >
              <div className="container position-relative">
                <div className="row mb-70 mb-sm-50">
                  <div className="col-md-8 offset-md-2 text-center">
                    <p className="section-descr mb-0">
                      We offer a wide range of drone services including aerial
                      surveys, event coverage, real estate photography, and
                      cinematic video production to help your brand stand out.
                    </p>
                  </div>
                </div>
              </div>
              <Service />
              <div className="container mt-60 mb-60">
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-30">
                    <Image
                      src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=800&h=600&auto=format&fit=crop"
                      width={800}
                      height={600}
                      alt="Drone Service 1"
                      className="w-100 object-fit-cover rounded-4"
                      unoptimized
                    />
                  </div>
                  <div className="col-md-4 mb-30">
                    <Image
                      src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&h=600&auto=format&fit=crop"
                      width={800}
                      height={600}
                      alt="Drone Service 2"
                      className="w-100 object-fit-cover rounded-4"
                      unoptimized
                    />
                  </div>
                  <div className="col-md-4 mb-30">
                    <Image
                      src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&h=600&auto=format&fit=crop"
                      width={800}
                      height={600}
                      alt="Drone Service 3"
                      className="w-100 object-fit-cover rounded-4"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="container position-relative z-index-1">
                <div className="row text-center">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div className="text-center mb-40 mb-sm-30">
                      <Image
                        src="/assets/images/demo-corporate/section-image-1.png"
                        width={100}
                        height={100}
                        alt="Image Description"
                      />
                    </div>
                    <p className="section-descr-medium mb-50 mb-sm-40">
                      Looking for reliable drone services? Contact us today for
                      a quote on your aerial needs.
                    </p>
                    <div className="local-scroll text-center">
                      <Link
                        href={`/strong-contact${dark ? "-dark" : ""}`}
                        className={`btn btn-mod ${
                          dark ? "btn-dark" : "btn-w"
                        } btn-with-icon btn-circle`}
                      >
                        <span className="btn-icon color-1">
                          <i className="mi-heart" />
                        </span>
                        <span data-btn-animate="y">
                          <AnimateButton text={"Request Price"} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
                <Image
                  src="/assets/images/demo-corporate/decoration-3.svg"
                  alt=""
                  width={1600}
                  height={243}
                />
              </div>
            </section>
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h3 className="section-title mb-30">
                      What our area of&nbsp;expertise?
                    </h3>
                    <p className="text-gray mb-0">
                      From 4K video to high-res stills, we handle all your
                      aerial requirements with precision and safety. Our
                      advanced drone technology ensures stable footage and
                      unique perspectives.
                    </p>
                  </div>
                  <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                    {/* Bar Item */}
                    {progressData.map((elm, i) => (
                      <div key={i} className="progress tpl-progress">
                        <div
                          className="progress-bar bg-gradient-primary-1"
                          role="progressbar"
                          style={{ width: `${elm.value}%` }}
                        >
                          <div>{elm.label}, %</div>
                          <span>{elm.value}</span>
                        </div>
                      </div>
                    ))}
                    {/* End Bar Item */}
                  </div>
                </div>
                <div className="page-section">
                  <hr className="mt-0 mb-0" />
                </div>
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                    <h2 className="section-title-small mb-20">
                      Why choose Resonance?
                    </h2>
                    <p className="text-gray mb-0">
                      We provide fast turnaround times, competitive pricing, and
                      exceptional quality for all your printing projects.
                    </p>
                  </div>
                </div>
                {/* Features Grid */}
                <div className="row mt-n30 wow fadeInUp">
                  {/* Feature Item */}
                  {features5.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                    >
                      <div className="alt-features-item box-shadow text-center mt-30">
                        <div className="alt-features-icon mb-10 color-primary-1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d={elm.svgPath} />
                          </svg>
                        </div>
                        <h4 className="alt-features-title">{elm.title}</h4>
                        <div className="alt-features-descr">
                          {elm.description}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Feature Item */}

                  {/* End Feature Item */}
                </div>
                {/* End Features Grid */}
              </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer1 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
