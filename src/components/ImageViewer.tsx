import { FC } from 'react';

interface IProps {
  file: File | null;
}

const ImageViewer: FC<IProps> = props => {
  const { file } = props;

  // Renders
  if (!file) {
    return <></>;
  }

  return (
    <div className="flex flex-col w-full items-center">
      <img src={URL.createObjectURL(file)} alt="image-to-text" className="w-44 h-auto" />
      <p className="text-sm mb-4">{file.name}</p>
    </div>
  );
};

export default ImageViewer;
