import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './MainNavigation.module.css';

function MainNavigation() 
{
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link style={{color: router.pathname === '/' ? 'white':'#FCB8D1'}} href='/'>All Meetups</Link>
          </li>
          <li>
            <Link style={{color: router.pathname === '/new-meetup' ? 'white':'#FCB8D1'}} href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
