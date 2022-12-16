import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function showDetails() {
    setIsLoading(true);
    if(isLoading){return}
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails} style={isLoading ? { backgroundColor: '#5f283d', borderColor: '#5f283d' } : {}}>
            {isLoading ? 'Loading...' : 'Show Details'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
