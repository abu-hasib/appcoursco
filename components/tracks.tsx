"use client";

import TrackCard from "@/container/track-card";
import Layout from "./layout";
import QueryResult from "./pieces/query";

function Tracks({ payload }: { payload: any }) {
  return (
    <Layout grid fullWidth>
      <QueryResult data={payload}>
      {payload?.tracksForHome?.map((track: any, index: any) => (
        <TrackCard key={track.id} track={track} />
      ))}
      </QueryResult>
    </Layout>
  );
}

export default Tracks;
