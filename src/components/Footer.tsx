const Footer = () => {
  return (
    <footer className="bg-transparent text-brand-light py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} dap nfc Colombia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
