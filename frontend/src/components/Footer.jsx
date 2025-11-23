const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-center py-3 border-t border-white/40">
      <p className="text-xs text-slate-600">
        © {new Date().getFullYear()} Smart Menu | Built by{" "}
        <span className="font-semibold text-pink-600">Kandadi Manasa Reddy</span>
      </p>
      <p className="text-[11px] text-slate-500">
        Contact:{" "}
        <a 
          href="mailto:kandadimanasareddy12@gmail.com"
          className="text-blue-500 underline"
        >
          kandadimanasareddy12@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
