import { FC } from 'react';
import { RecognizeResult } from 'tesseract.js';
import Loader from './Loader';

interface IProps {
  output: RecognizeResult | null;
  loading: boolean;
}

const OutputText: FC<IProps> = props => {
  const { output, loading } = props;

  // Renders
  const renderOutput = () => {
    return output?.data.paragraphs.map((p, index) => (
      <p key={index} className="mb-3">
        {p.text}
      </p>
    ));
  };

  return (
    <div className="relative w-full rounded-lg bg-zinc-800 text-white  h-96 border-2 border-zinc-200 overflow-auto">
      <div className="p-4">
        {output ? renderOutput() : <p className="text-xs text-gray-400">Output text is here...</p>}
      </div>

      {loading && (
        <div className="absolute top-4 right-4 flex flex-col justify-center items-center">
          <Loader />
          <p className="text-[10px] text-gray-500 mt-1">Converting..</p>
        </div>
      )}
    </div>
  );
};

export default OutputText;
