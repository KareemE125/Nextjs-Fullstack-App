import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';

import MeetupList from '../components/meetups/MeetupList'

const DummyMeetupList = [
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
];

export default function HomePage(props) 
{


  return <>
    <MeetupList meetups={props.meetupList} />
  </>

}

// For "you can say" non-frequent updates
// faster as caching take palce
export async function getStaticProps()
{
  return {
    props: {
      meetupList: DummyMeetupList
    },
    revalidate: 5
  }
}


// // For "you can say" frequent updates [runs for every incoming request]
// // and if you want to get the request and response
// export async function getServerSideProps(context)
// {
//   // This code only runs on the server

//   const req = context.req;
//   const res = context.res;
  
//   return{
//     props:{
//       meetupList: DummyMeetupList
//     }
//   }
// }
