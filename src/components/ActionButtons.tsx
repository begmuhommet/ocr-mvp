import { FC } from 'react';
import { IoCloseOutline, IoConstructOutline } from 'react-icons/io5';
import { RecognizeResult } from 'tesseract.js';

interface IProps {
  onConvert: () => void;
  onCancel: () => void;
  output: RecognizeResult | null;
}

const ActionButtons: FC<IProps> = props => {
  const { onConvert, onCancel, output } = props;

  // Variables
  const haveOutput = Boolean(output);

  // Renders
  return (
    <div className="flex items-center justify-center">
      {!haveOutput && (
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 active:scale-95 transition-colors flex items-center justify-center"
          onClick={onConvert}
        >
          <IoConstructOutline size={18} className="mr-1" />
          Convert
        </button>
      )}
      <button
        className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 active:scale-95 transition-colors flex items-center justify-center"
        onClick={onCancel}
      >
        <IoCloseOutline size={18} className="mr-1" />
        {haveOutput ? 'Remove' : 'Cancel'}
      </button>
    </div>
  );
};

export default ActionButtons;
