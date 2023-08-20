import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface IProps {
  file: File | null;
  onSetFile: (file: File | null) => void;
}

const ImageUploader: FC<IProps> = props => {
  const { file, onSetFile } = props;

  // Hooks (lib)
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onSetFile(acceptedFiles[0]);
    },
    [file],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': [], 'image/jpg': [], 'image/png': [] },
    onDrop,
  });

  // Renders
  if (file) {
    return <></>;
  }

  return (
    <>
      <div
        {...getRootProps()}
        className="border-2 border-gray-300 bg-gray-900 text-white rounded-lg transition-all duration-300 p-10 flex flex-col items-center justify-center hover:cursor-pointer hover:bg-zinc-800"
      >
        <IoCloudUploadOutline size={30} />
        <input {...getInputProps()} />
        <p>Drag 'n' drop image here, or click to select image</p>
      </div>

      <p className="text-xs text-gray-400 p-1">Accepted file types: png, jpg, jpeg</p>
    </>
  );
};

export default ImageUploader;
