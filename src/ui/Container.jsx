function Container({ children, classes }) {
  return (
    <div className={`ml-auto mr-auto  w-[92%] ${classes}`}>{children}</div>
  );
}

export default Container;
