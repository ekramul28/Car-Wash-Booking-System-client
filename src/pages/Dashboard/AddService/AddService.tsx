import EditService from "@/pages/Service/Editservice/EditService";

const AddService = () => {
  const handelService = () => {};
  return (
    <div>
      <EditService onSubmit={handelService} />
    </div>
  );
};

export default AddService;
