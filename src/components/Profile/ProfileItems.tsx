type ProfileItemsProps = {
  headline?: string,
  information?: string,
};

function ProfileItems({ headline = 'Nome',
  information = 'Oops! Parece que não tem nada aqui' }:ProfileItemsProps) {
  return (
    <div>
      <h3 className="text-xl font-medium">{headline}</h3>
      <p className="font-light">{information}</p>
      <hr className="border-gray-600 my-1" />
    </div>
  );
}

export default ProfileItems;
