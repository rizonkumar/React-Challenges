export const UserForm = (props) => {
  const {
    handleSubmit,
    handleBack,
    index,
    forms,
    formData,
    handleInputChange,
  } = props;
  return (
    <form className="container" onSubmit={handleSubmit}>
      {index > 0 && (
        <a href="/" onClick={handleBack} className="">
          Back
        </a>
      )}

      <label>{forms[index].label}</label>
      <input
        value={formData[forms[index].id]} // formData['name']
        id={forms[index].id}
        onChange={handleInputChange}
        type={forms[index].inputType}
        placeholder={forms[index].placeHolder}
      />
      <button>{forms[index].buttonName}</button>
    </form>
  );
};
