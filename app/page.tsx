import Tracks from "@/components/tracks";

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
  const { data } = await fetch("https://coursco.onrender.com", {
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
