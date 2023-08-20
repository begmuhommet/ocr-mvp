import { ChangeEvent, useState } from 'react';
import Tesseract, { RecognizeResult } from 'tesseract.js';
import ActionButtons from './components/ActionButtons';
import ImageUploader from './components/ImageUploader';
import ImageViewer from './components/ImageViewer';
import LangSelect from './components/LangSelect';
import OutputText from './components/OutputText';

const App = () => {
  // State
  const [lang, setLang] = useState('eng');
  const [output, setOutput] = useState<RecognizeResult | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Variables
  const showActionButtons = Boolean(file) && !loading;

  // Handlers
  const handleChangeLang = (event: ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    setLang(target.value);
  };

  const handleSetFile = (newFile: File | null) => {
    setFile(newFile);
    setOutput(null);
  };

  const handleCancel = () => {
    setFile(null);
    setOutput(null);
  };

  const handleConvert = async () => {
    setOutput(null);
    setLoading(true);
    const result = await Tesseract.recognize(file, 'eng');
    setOutput(result);
    setLoading(false);
  };

  // Renders
  return (
    <div className="h-screen w-screen py-10 bg-gray-900 text-white overflow-auto px-3">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mb-10">Convert Image to Text</h1>

        <LangSelect currentLang={lang} onChange={handleChangeLang} />

        <ImageUploader file={file} onSetFile={handleSetFile} />
        <ImageViewer file={file} />

        {showActionButtons && <ActionButtons onConvert={handleConvert} onCancel={handleCancel} output={output} />}

        <div className="my-10" />

        <OutputText output={output} loading={loading} />
      </div>
    </div>
  );
};

export default App;
