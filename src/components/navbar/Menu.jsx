const Menu = () => {
  const menuList = [
    {
      name: "Restaurants",
      link: "/restaurants",
    },
    {
      name: "Deals",
      link: "/deals",
    },
    {
      name: "My Orders",
      link: "/my-orders",
    },
  ];
  return (
    <div className="menu">
      <ul>
        {menuList.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
