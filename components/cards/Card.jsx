import React from "react";

const Card = ({ children }) => {
  const contents = [
    {
      id: 1,
      desc: "Total stock count",
      quantities: "3480",
      color:
        "linear-gradient(104.81deg, rgba(23, 199, 192, 0.2) 69.16%, rgba(222, 210, 7, 0.126) 105.23%)",
    },
    {
      id: 2,
      desc: "No available stock",
      quantities: "207",
      color:
        "linear-gradient(108.76deg, rgba(225, 213, 7, 0.2) 76.69%, rgba(238, 136, 45, 0.116) 104.41%)",
    },
    {
      id: 3,
      desc: "No of distributed stock",
      quantities: "3273",
      color:
        "linear-gradient(109.51deg, rgba(238, 136, 45, 0.2) 76.71%, rgba(23, 199, 192, 0.096) 99.35%)",
    },
  ];
  return (
    <div className="p-5  flex flex-col sm:flex-row  justify-evenly">
      {contents.map((item) => {
        return (
          <div
            key={item.id}
            style={{ background: `${item.color}` }}
            className="relative flex-1 px-5 py-10 m-5 h-32"
          >
            <p className="lg:absolute lg:top-5 lg:left-5 font-bold">
              {item.desc}
            </p>
            <h1 className="lg:absolute lg:bottom-3 lg:right-3 text-4xl font-bold text-[#181350]">
              {item.quantities}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
