import React from 'react'
import classes from '../styles/meetupDetails.module.css'


export default function MeetupDetials(props) {



  return <section className={classes.detail}>
    <img src={props.details.image} alt='Place Image' />
    <h1>{props.details.title}</h1>
    <p>{props.details.description}</p>
    <address>{props.details.address}</address>
  </section>
}



export async function getStaticPaths()
{

  return {
    paths: [
      {
        params: { meetupId: '1000' }
      },
      {
        params: { meetupId: '1001' }
      },
    ],
    fallback: false
  }

}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  
  return {
    props: {
      details: {
        id: id,
        title: 'meetup title',
        image: 'https://assets.architecturaldigest.in/photos/602e4571caebc40de00b0f57/16:9/w_2560%2Cc_limit/Bali-villa-Uluwatu-SAOTA-1366x768.jpg',
        description: 'meetup description lorem lorem lorem',
        address: 'meetup address, 5 st. 23 appart.'
      }
    },
    revalidate: 5
  }
}