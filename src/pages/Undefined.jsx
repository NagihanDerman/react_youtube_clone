import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="grid place-items-center my-52 text-2xl">
      <h1 className="font-bold">404</h1>
      <h1>- Page Not Found</h1>
      <Link to="/" className="textDecoration-none bg-blue text-[18px] ">
        Accueil
      </Link>
    </div>
  );
};

export default Undefined;
