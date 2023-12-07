import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';
import { getUser, updateUser } from '../services/userAPI';
import { UserType } from '../types';
import ProfileInput from '../components/ProfileInput';
import Loading from '../components/Loading';

type ProfileEditProps = {
  setChangedUser: Dispatch<SetStateAction<boolean>>,
  changedUser: boolean,
};

function ProfileEdit({ setChangedUser, changedUser }:ProfileEditProps) {
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
    if (user) {
      await updateUser(user);
    }
    navigate('/profile');
    setIsLoading(false);
    setChangedUser(!changedUser);
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
      className="w-10/12 self-center flex flex-col items-center"
      onSubmit={ (e) => { handleSubmit(e); } }
    >
      <button
        className="text-md p-2 border border-sky-500 h-fit w-fit text-sky-500
        disabled:border-gray-300 disabled:text-gray-300
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
          <h3 className="text-xl font-medium">
            Descrição
            <span className="text-red-500">
              *
            </span>
          </h3>
          <textarea
            data-testid="edit-input-description"
            id="description"
            className="font-light text-gray-950  px-3 py-1 rounded-lg"
            value={ user?.description }
            onChange={ (e) => handleChange(e) }
          />
          <hr className="border-gray-400 my-1" />
        </label>
      </div>
    </form>
  );
}

export default ProfileEdit;
