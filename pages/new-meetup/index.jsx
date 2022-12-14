import React from 'react'

import NewMeetupForm from '../../components/meetups/NewMeetupForm.js'

export default function NewMeetup() 
{
  
  function addMeetup(meetupData) {
    console.log('====================================');
    console.log(meetupData);
    console.log('====================================');
  }

  return <>
    <section>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  </>
}
