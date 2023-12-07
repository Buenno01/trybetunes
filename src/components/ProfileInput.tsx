type ProfileInputProps = {
  headline?: string,
  value: string,
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
  id: string,
};

function ProfileInput({ headline = 'Nome', value, handleChange, id }: ProfileInputProps) {
  return (
    <label>
      <h3 className="text-xl font-medium">{headline}</h3>
      <input
        id={ id }
        type="text"
        className="font-light text-gray-950 px-3 py-1 rounded-lg"
        value={ value }
        onChange={ (e) => handleChange(e) }
        data-testid={ `edit-input-${id}` }
      />
      <hr className="border-gray-600 my-1" />
    </label>
  );
}

export default ProfileInput;
