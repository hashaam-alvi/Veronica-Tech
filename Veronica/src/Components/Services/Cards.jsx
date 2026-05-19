import "./Cards.css";
import { ourservicesCardsData } from "../SliderContent";
import { useEffect } from "react";

export default function ServicesSection() {

  useEffect(() => {
    const rows = document.querySelectorAll(".serviceRow");

    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          // Removes active class when leaving viewport
          // so animation can replay when scrolling back
          entry.target.classList.remove("active");
        }

      });
    }, observerOptions);

    rows.forEach((row) => {
      scrollObserver.observe(row);
    });

    return () => {
      rows.forEach((row) => {
        scrollObserver.unobserve(row);
      });
    };

  }, []);

  return (
    <div className="servicesLayoutContainer">

      {ourservicesCardsData.map((service, index) => {

        const isImageRight = index % 2 === 0;

        return (
          <div
            key={service.id}
            className={`serviceRow ${
              isImageRight ? "imageRight" : "imageLeft"
            }`}
          >

            {/* Text Column */}
            <div className="serviceTextColumn">
              <h2 className="serviceRowTitle">
                {service.title}
              </h2>

              <p className="serviceRowDesc">
                {service.desc}
              </p>

              {service.features && service.features.length > 0 && (
                <ul className="serviceFeatureList">
                  {service.features.map((feature, i) => (
                    <li key={i} className="serviceFeatureItem">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image Column */}
            <div className="serviceImageColumn">
              <img
                src={service.image}
                alt={service.title}
                className="serviceRowImg"
              />
            </div>

          </div>
        );
      })}
    </div>
  );
}