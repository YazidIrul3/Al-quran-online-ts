import Link from "next/link";

type PropsLinkHeader = {
  href: string;
  children: React.ReactNode;
};
const LinkHeader: React.FC<PropsLinkHeader> = ({ href, children }) => {
  return (
    <Link
      className="bg-green-200 px-3 py-2 rounded-full text-sm font-thin text-green-800 hover:bg-green-700 hover:text-slate-50 hover:duration-500 min-w-[100px] w-[100px] flex justify-center items-center h-fit"
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkHeader;
