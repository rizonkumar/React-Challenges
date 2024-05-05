const FormDetail = (props) => {
  const { formData } = props;
  return (
    <div className="">
      <h2>Success</h2>
      <hr />
      <span>Name: {formData.name}</span>
      <hr />
      <span>Email: {formData.email}</span>
      <hr />
      <span>DOB: {formData.dob}</span>
      <hr />
      <span>Password: {formData.password}</span>
      <hr />
    </div>
  );
};

export default FormDetail;
