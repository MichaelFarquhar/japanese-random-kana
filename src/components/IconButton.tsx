interface Props {
  icon: React.ReactNode;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: Props) => {
  return (
    <div className="p-2 hover:bg-gray-100 rounded-md transition cursor-pointer" onClick={onClick}>
      {icon}
    </div>
  );
};
