import { NavLink, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
                <span>Products-App</span>
                <span>
                    <NavLink className="mr-2" to='/'>Main</NavLink>
                    <NavLink className="mr-2" to='/products'>Products</NavLink>
                    <NavLink className="mr-2" to='/about'>About</NavLink>
                </span>
            </nav>
            <Outlet />
        </div>
    );
};

export { Layout } 
