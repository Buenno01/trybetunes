import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';
import { getUser, updateUser } from '../services/userAPI';
import { UserType } from '../types';
import ProfileInput from '../components/ProfileInput';
import Loading from '../components/Loading';
import useForm from '../utils/useForm';
import OutlinedBtn from '../components/OutlinedBtn';

type ProfileEditProps = {
  setChangedUser: Dispatch<SetStateAction<boolean>>,
  changedUser: boolean,
};

const init:UserType = {
  description: '',
  email: '',
  image: '',
  name: '',
};

const inputs = [
  {
    headline: 'Nome',
    id: 'name',
  },
  {
    headline: 'E-mail',
    id: 'email',
  },
  {
    headline: 'Imagem',
    id: 'image',
  },
];

function ProfileEdit({ setChangedUser, changedUser }:ProfileEditProps) {
  const [initialState, setInitialState] = useState(init);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      if (userData) { setInitialState(userData); }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  const [user, handleChange] = useForm(initialState);

  const checkIfItIsUserType = (obj: any): obj is UserType => {
    return (obj.name && obj.email && obj.image && obj.description);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (checkIfItIsUserType(user)) {
      await updateUser(user);
    }
    navigate('/profile');
    setIsLoading(false);
    setChangedUser(!changedUser);
  }

  const validation = !(user?.name && user?.email && user?.image && user?.description);

  if (isLoading) return <Loading />;
  return (
    <form
      className="w-10/12 self-center flex flex-col items-center"
      onSubmit={ (e) => { handleSubmit(e); } }
    >
      <OutlinedBtn
        validation={ validation }
        Icon={ <GoPencil /> }
        text="Salvar Alterações"
      />
      <div className="flex flex-col gap-2 mt-4">
        {
        inputs.map((item) => (<ProfileInput
          key={ item.id }
          { ...item }
          handleChange={ (e) => { handleChange(e); } }
          value={ user[item.id] }
        />))
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
