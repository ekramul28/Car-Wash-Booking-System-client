import FunctionalityComponent from "./Functionality/FunctionalityCom";

const Service = () => {
  return (
    <div className="grid grid-cols-4  min-h-screen pt-10">
      <div className="grid-cols-1 border">
        <FunctionalityComponent />
      </div>
      <div className="grid-col-3 text-white">
        <h1>done</h1>
      </div>
    </div>
  );
};

export default Service;
