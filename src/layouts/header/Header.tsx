import { Github, Settings } from 'lucide-react';
import { IconButton } from '../../components/IconButton';

export const Header = () => {
  return (
    <div className="w-full p-3.5">
      <header className="py-3 px-5 border-b rounded-lg shadow-md border-gray-200 flex items-center justify-center bg-white">
        <div className="flex justify-between items-center space-x-3 w-full">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" width={24} height={24} alt="App logo" />
            <div className="font-logo font-bold text-2xl text-gray-800">Random Kana</div>
          </div>
          <div className="flex items-center space-x-2">
            <IconButton
              icon={<Github size={22} />}
              onClick={() => window.open('https://github.com/MichaelFarquhar/japanese-random-kana', '_blank')}
            />
            <IconButton icon={<Settings size={22} />} onClick={() => {}} />
          </div>
        </div>
      </header>
    </div>
  );
};
