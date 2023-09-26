import Image from "next/image";
import styles from "./page.module.css";
import Tracks from "@/components/tracks";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";

const tracks = `
query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`

async function getPosts() {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: tracks,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  console.log({da: data})

  return data;
}

async function Home() {
  const data = await getPosts();
  console.log({ data });
  return (
    <main>
      <Tracks payload={data}/>
    </main>
  );
}

export default Home;
