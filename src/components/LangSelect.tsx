import { ChangeEvent, FC } from 'react';

interface IProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  currentLang: string;
}

const LangSelect: FC<IProps> = props => {
  const { currentLang, onChange } = props;

  return (
    <div className="ml-auto flex items-center justify-end mb-3">
      <p className="mr-2 text-gray-200 text-md">Language: </p>
      <select
        value={currentLang}
        onChange={onChange}
        name="lang"
        id="lang"
        className="bg-slate-800 px-2 py-1 rounded-md cursor-pointer"
      >
        <option value="eng">English</option>
        <option value="tur">Turkish</option>
        <option value="ind">Indonesian</option>
      </select>
    </div>
  );
};

export default LangSelect;
