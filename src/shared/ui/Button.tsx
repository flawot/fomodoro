import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const posType = {
  topRight: 'topRight',
  topLeft: 'topLeft',
  bottomRight: 'bottomRight',
  bottomLeft: 'bottomLeft',
} as const;

type posType = typeof posType[keyof typeof posType];

interface IProps {
  icon: IconDefinition;
  onClick: () => void;
  pos: posType;
}

const positions = {
  topRight: 'top-3 right-3',
  topLeft: 'top-3 left-3',
  bottomRight: 'bottom-3 right-3',
  bottomLeft: 'bottom-3 left-3',
}

const Button: FC<IProps> = ({ icon, onClick, pos }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed ${positions[pos]} border w-10 h-10 rounded-full flex justify-center items-center border-gray text-text transition-all duration-150 hover:scale-120 cursor-pointer`}
    >
      <FontAwesomeIcon icon={icon} className="rotate-90 scale-120" />
    </button>
  );
};

export default Button;
