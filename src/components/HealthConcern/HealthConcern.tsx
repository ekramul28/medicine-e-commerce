import Image from "next/image";

const HealthConcern = () => {
  const HealthData = [
    {
      title: "Full Body checkups",
      image: "https://i.ibb.co/Zh36MZX/4cb2baf3234-Fullbody.png",
      backgroundImage: "",
    },
    {
      title: "Vitamins",
      image: "https://i.ibb.co/zb5RrfD/e1a18d8deac-Vitamins3.png",
      backgroundImage: "",
    },
    {
      title: "Diabetes",
      image: "https://i.ibb.co/qr1BvpT/1e927857c26-Diabetes3.png",
      backgroundImage: "",
    },
    {
      title: "Fever & Infection",
      image: "https://i.ibb.co/9244FhB/e1c60c444bf-Fever2.png",
      backgroundImage: "",
    },
    {
      title: "Hair & Skin Care",
      image: "https://i.ibb.co/4V6qg4f/cd9606a9173-efr.png",
      backgroundImage: "",
    },
    {
      title: "Thyroid",
      image: "https://i.ibb.co/3NMxfBt/71fb3c06e71-Thyroid3.png",
      backgroundImage: "",
    },
  ];
  return (
    <div className="my-16">
      <h1 className="text-[26px] font-semibold ">
        Lab Tests by Health Concern
      </h1>
      <p className="flex items-center font-normal text-base mb-5">
        Powered by{" "}
        <span className="my-2 w-20 ">
          {" "}
          <Image
            src="https://i.ibb.co/xzg7M5N/Thyrocare.webp"
            alt="Thyrocare Image"
            layout="responsive"
            width={40}
            height={40}
          />
        </span>
      </p>
      <div className="flex justify-center items-center gap-4">
        {HealthData.map((health, index) => (
          <div key={index}>
            <div>
              <Image
                src={health?.image}
                alt={health?.title}
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConcern;
