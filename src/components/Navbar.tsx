import { Link, NavLink } from 'react-router-dom';
import { api, useLogoutMutation } from '../api/apiSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export default function Navbar() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    dispatch(api.util.resetApiState());
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-semibold text-blue-700' : 'text-gray-600 hover:text-gray-900';

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
        <Link to="/" className="font-bold text-blue-700">
          IEEE CUSB
        </Link>
        <NavLink to="/events" className={linkClass}>
          Events
        </NavLink>
        {user?.role === 'admin' && (
          <NavLink to="/admin" className={linkClass}>
            Admin
          </NavLink>
        )}
        {user?.role === 'hr' && (
          <NavLink to="/hr" className={linkClass}>
            HR
          </NavLink>
        )}

        <div className="ml-auto flex items-center gap-3 text-sm">
          {user ? (
            <>
              <span className="text-gray-600">
                {user.name} ({user.role})
              </span>
              <button onClick={handleLogout} className="rounded border px-3 py-1 hover:bg-gray-50">
                Log out
              </button>
            </>
          ) : (
            <Link to="/login" className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
              Log in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
