import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service3() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">What We Are Able</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="To Do For You..." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="text-gray mb-50 mb-sm-30"
                data-wow-delay="0.4s"
              >
                With the help of our white-label services, you may provide clients with superior web development solutions. Behind the scenes, our skilled group of developers, designers, and project managers produces outstanding outcomes that are tailored to the individual requirements of your clients.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Front-End <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Website CMS <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                E-Commerce <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Other Services <span className="number">04</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Front-End</h4>
                  <p className="text-gray mb-0">
                    - Design to HTML Conversions<br />
                    - Custom JavaScript Coding<br />
                    - React Development<br />
                    - Vue JS Development<br />
                    - HTML Email Templates<br />
                    - HTML5 Banners
                  </p>

                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Website CMS</h4>
                  <p className="text-gray mb-0">
                    - WordPress<br />
                    - HubSpot CMS<br />
                    - Contentful<br />
                    - Craft CMS<br />
                    - Squarespace<br />
                    - Other Website Builders
                  </p>


                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">E-Commerce</h4>
                  <p className="text-gray mb-0">
                    - Shopify<br />
                    - WooCommerce<br />
                    - BigCommerce<br />
                    - Craft Commerce<br />
                    - Squarespace<br />
                    - Custom eCommerce
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Other Services</h4>
                  <p className="text-gray mb-0">
                    - Web Applications<br />
                    - Headless Solutions<br />
                    - Design - UI / UX<br />
                    - Quality Assurance<br />
                    - Project Discovery<br />
                    - Server Administration
                  </p>

                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
