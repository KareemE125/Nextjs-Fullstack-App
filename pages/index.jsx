import Link from 'next/link';
import React, { useMemo } from 'react'
import MeetupList from '../components/meetups/MeetupList'
export default function HomePage() {

  const meetupList = useMemo(() => [
    {
      id: '1000',
      title: 'Sea Home',
      image: 'https://assets.architecturaldigest.in/photos/602e4571caebc40de00b0f57/16:9/w_2560%2Cc_limit/Bali-villa-Uluwatu-SAOTA-1366x768.jpg',
      address: 'Landscape of Bali 5, 56 appartement',
      description: 'Relaxing home'
    },
    {
      id: '1001',
      title: 'Sulbing Dessert Cafe',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/f7/e5/c1/dining-area.jpg',
      address: 'M. Cuenco Avenue Gaisano Country Mall, Cebu City 6000 Philippines',
      description: 'Great place for having a dessert'
    },
  ], []);

  return <>
    <section>
      <h1 style={{ textAlign: 'center' }}>Meetups</h1>
      <button>
        <Link href='/new-meetup'>Add New Meetup</Link>
      </button>
    </section>
    <section style={{width: '50%'}}>
      <MeetupList meetups={meetupList} />
    </section>

  </>

}
