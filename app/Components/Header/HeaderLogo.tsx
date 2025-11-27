import Link from "next/link";
import Image from "next/image";

interface HeaderLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function HeaderLogo({ 
  src, 
  alt, 
  width, 
  height, 
}: HeaderLogoProps) {
  return (
    <Link 
      href="/" 
      className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto"
        priority
      />
    </Link>
  );
}