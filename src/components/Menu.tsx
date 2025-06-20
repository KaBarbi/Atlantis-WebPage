import { NavLink } from "react-router-dom";

export const Menu = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/cardapio", label: "Cardápio" },
  ];

  return (
    <nav className="flex justify-center py-3"> 
      <ul className="flex gap-10 list-none p-0 m-0">
        {links.map(({ path, label }) => (
          <li key={path} className="relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                [
                  "relative text-lg transition-colors duration-300",
                  "hover:text-[#a69137]",
                  isActive ? "text-[#a69137]" : "text-white",
                  "px-2",
                  "after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#a69137] after:transition-all after:duration-300",
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
