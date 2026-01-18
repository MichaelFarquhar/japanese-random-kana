import { useAtom } from 'jotai';
import { soundMutedState } from '../atoms';

const VolumeOnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const VolumeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="22" y1="9" x2="16" y2="15" />
    <line x1="16" y1="9" x2="22" y2="15" />
  </svg>
);

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useAtom(soundMutedState);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 bg-white hover:bg-gray-100 rounded-md transition cursor-pointer text-gray-600 hover:text-gray-800"
      title={isMuted ? 'Unmute sound' : 'Mute sound'}
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
    </button>
  );
};
