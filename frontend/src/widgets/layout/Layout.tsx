import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='layout'>
      <header className='header'>HEADER</header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>FOOTER</footer>
    </div>
  );
};
