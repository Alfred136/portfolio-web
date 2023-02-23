import Link from "next/link";

interface IButtonProps {
  title: string;
  link: string;
}

export default function Button({ title, link }: IButtonProps) {
  return (
    <Link href={link} target={"_blank"}>
      <button className="rounded-[4px] bg-lightest text-white text-[14px] xs:text-[16px] shadow-lg px-4 py-2 hover:bg-lighter">
        {title}
      </button>
    </Link>
  );
}
