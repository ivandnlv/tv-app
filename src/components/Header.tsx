import { NavLink } from 'react-router-dom';
import { routerPaths } from '../types';

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to={routerPaths.MAIN} className={({ isActive }) => (isActive ? '_selected' : '')}>
          Главная
        </NavLink>
        <NavLink
          to={'/' + routerPaths.INPUT_NUMBER}
          className={({ isActive }) => (isActive ? '_selected' : '')}>
          Ввод номера
        </NavLink>
        <NavLink
          to={'/' + routerPaths.FINAL_INFO}
          className={({ isActive }) => (isActive ? '_selected' : '')}>
          Final info
        </NavLink>
      </nav>
    </header>
  );
}
