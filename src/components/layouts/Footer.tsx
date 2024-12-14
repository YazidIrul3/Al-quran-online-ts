import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-slate-800 text-slate-50 flex flex-col justify-center items-center py-2">
      <p>
        Copyright &copy; {new Date().getFullYear()} Al Quran Online By Yazid
        Khairul
      </p>
      <p>
        API From{" "}
        <Link className="text-blue-400" href={"https://github.com/bachors/Al-Quran-ID-API"}>
          Al-Quran-ID-AP
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
