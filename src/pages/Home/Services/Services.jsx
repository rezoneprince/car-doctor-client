import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className=" text-center p-8">
        <h3 className="text-2xl text-orange-600 font-bold">Service</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <h5 className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected humour, or randomised
          words which do not look even slightly believable.{" "}
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
