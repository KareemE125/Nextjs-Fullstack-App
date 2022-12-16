import Head from "next/head.js";
import { useRouter } from "next/router.js";
import React from "react";

import NewMeetupForm from "../components/meetups/NewMeetupForm.js";

export default function NewMeetup() {
  const router = useRouter();

  async function addMeetup(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "Post",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <meta
          name="description"
          content="Relax and choose a meetup for your next hang out from an amazing meetups list"
        />
      </Head>
      <NewMeetupForm addMeetup={addMeetup} />
    </>
  );
}
