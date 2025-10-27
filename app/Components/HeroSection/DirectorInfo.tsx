interface DirectorInfoProps {
  name: string;
  role: string;
}

export default function DirectorInfo({ name, role }: DirectorInfoProps) {
  return (
    <div className="flex justify-start">
      <div className="flex flex-col items-end leading-none bg-blue-500/30 h-fit">
        <p className="hero-name leading-none">
          <span>{name}</span>
        </p>
        <p className="hero-role mb-3 md:mb-4 leading-none mt-2 self-start">
          {role}
        </p>
      </div>
    </div>
  );
}