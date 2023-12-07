import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';
import MusicalNote from '../images/musical_note.svg';
import { getUser, updateUser } from '../services/userAPI';
import { UserType } from '../types';
import ProfileItems from '../components/ProfileItems';
import ProfileInput from '../components/ProfileInput';
import Loading from '../components/Loading';

function ProfileEdit() {
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      if (userData) { setUser(userData); }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    navigate('/profile');
    if (user) {
      await updateUser(user);
    }
    setIsLoading(false);
  }

  function handleChange({ target }
  : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (user) {
      setUser({ ...user, [target.id]: target.value });
    }
  }

  const items = [
    {
      headline: 'Nome',
      value: user?.name ? user.name : '',
      id: 'name',
      handleChange,
    },
    {
      headline: 'E-mail',
      value: user?.email ? user.email : '',
      id: 'email',
      handleChange,
    },
    {
      headline: 'Imagem',
      value: user?.image ? user.image : '',
      id: 'image',
      handleChange,
    },
  ];

  const validation = !(user?.name && user?.email && user?.image && user?.description);

  if (isLoading) return <Loading />;
  return (
    <form
      className="w-10/12 self-center flex flex-col"
      onSubmit={ (e) => { handleSubmit(e); } }
    >
      <button
        className="text-md p-2 border h-fit w-fit
      rounded-lg flex items-center gap-2 self-center"
        type="submit"
        aria-label="Editar perfil"
        disabled={ validation }
        data-testid="edit-button-save"
      >
        Salvar alterações
        <span className="text-xl">
          <GoPencil />
        </span>
      </button>
      <div className="flex flex-col gap-2 mt-4">
        {
        items.map((item) => <ProfileInput key={ item.headline } { ...item } />)
        }
        <label>
          <h3 className="text-xl font-medium">Descrição</h3>
          <textarea
            data-testid="edit-input-description"
            id="description"
            className="font-light text-gray-950  px-3 py-1 rounded-lg"
            value={ user?.description }
            onChange={ (e) => handleChange(e) }
          />
          <hr className="border-gray-600 my-1" />
        </label>
      </div>
    </form>
  );
}

export default ProfileEdit;
