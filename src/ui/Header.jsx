function Header({ content, children }) {
  return (
    <header className="my-10 flex h-[8rem] items-center justify-center bg-faintBlue px-4">
      <h1 className=" text-center text-2xl font-bold sm:text-3xl">{content}</h1>
      {children}
    </header>
  );
}

export default Header;
