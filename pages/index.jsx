import React, { useEffect, useMemo, useState } from "react";
import { MongoClient } from "mongodb";
import Link from "next/link";

import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups😉</title>
        <meta name="description" content="Relax and choose a meetup for your next hang out from an amazing meetups list"/>
      </Head>
      <MeetupList meetups={props.meetupList} />
    </>
  );
}

// For "you can say" non-frequent updates
// faster as caching take palce
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kareemE125:XDNbyXGBXT5jmcx2@meetupcluster.oekcire.mongodb.net/?retryWrites=true&w=majority"
  );

  const meetupsCollection = client.db("meetupDB").collection("meetups");
  const meetupList = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetupList: meetupList.map((item, index) => ({
        id: item._id.toString(),
        title: item.title,
        image: item.image,
        address: item.address,
      })),
    },
    revalidate: 1,
  };
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
