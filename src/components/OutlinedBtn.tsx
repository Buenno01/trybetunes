import { ButtonHTMLAttributes, ReactNode } from 'react';

interface OutlinedBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  validation?: boolean,
  Icon: ReactNode,
  text?: string
}

function OutlinedBtn({ Icon, validation = false, text = '', ...rest }: OutlinedBtnProps) {
  return (
    <button
      { ...rest }
      className="text-md p-2 border border-sky-500 h-fit w-fit text-sky-500
    disabled:border-gray-300 disabled:text-gray-300
    rounded-lg flex items-center gap-2 self-center"
      type="submit"
      aria-label="Editar perfil"
      disabled={ validation }
      data-testid="edit-button-save"
    >
      {text}
      <span className="text-xl">
        {Icon}
      </span>
    </button>
  );
}

export default OutlinedBtn;
