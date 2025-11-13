interface HeaderBackgroundProps {
  isVisible: boolean;
}

export default function HeaderBackground({ isVisible }: HeaderBackgroundProps) {
  return (
    <div 
      className={`fixed inset-x-0 top-0 h-20 bg-white transition-opacity duration-300 z-40 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}