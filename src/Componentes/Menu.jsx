import { Link } from 'react-router-dom';

const Menu = () => {
    return (<>
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white hover:text-gray-200 font-semibold px-4 py-2 rounded transition duration-300">Inicio</Link></li>
            </ul>
        </nav>
    </>);
}

export default Menu