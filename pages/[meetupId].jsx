/* eslint-disable @next/next/no-img-element */
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import classes from "../styles/meetupDetails.module.css";

export default function MeetupDetials(props) 
{
  return <>
    <Head>
      <title>{props.details.title}</title>
      <meta
        name="description"
        content="Read all the needed deatails about a specific meetup"
      />
    </Head>
    <section className={classes.detail}>
      <img src={props.details.image} alt="Place Image" />
      <h1>{props.details.title}</h1>
      <p>{props.details.description}</p>
      <address>{props.details.address}</address>
    </section>
    </>;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kareemE125:XDNbyXGBXT5jmcx2@meetupcluster.oekcire.mongodb.net/?retryWrites=true&w=majority"
  );

  const meetupsCollection = client.db("meetupDB").collection("meetups");
  const meetupList = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetupList.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://kareemE125:XDNbyXGBXT5jmcx2@meetupcluster.oekcire.mongodb.net/?retryWrites=true&w=majority"
  );

  const meetupsCollection = client.db("meetupDB").collection("meetups");
  let meetup = await meetupsCollection.findOne({ _id: ObjectId(id) });
  meetup._id = id;

  client.close();

  return {
    props: {
      details: meetup,
    },
    revalidate: 20,
  };
}
