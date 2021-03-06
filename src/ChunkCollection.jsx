// @ts-check
import React, { useEffect, useState } from "react";

import { api } from "./api";
import { ChunkCollectionContext } from "./ChunkCollectionContext";

export function ChunkCollection({
  children,
  className,
  identifier,
  limit = "",
  tags = [],
}) {
  const [[error, chunks], setResponse] = useState([undefined, []]);

  useEffect(() => {
    const urlParams = new URLSearchParams({
      limit,
      collection_identifier: identifier,
    });

    tags.map((tag) => urlParams.append("tags[]", tag));

    api
      .get(`chunks?${urlParams}`)
      .then((res) => setResponse([null, res.data.chunks]))
      .catch((error) => setResponse([error, []]));
  }, [identifier]);

  if (error) {
    console.log(
      `Something went wrong trying to retrieve chunk collection: ${error}. Have you provided the correct Editmode identifier as a prop to your ChunkCollection component instance?`
    );

    return <>{children}</>;
  }

  if (!chunks.length) {
    return <>children</>;
  }

  return chunks.map((chunk) => (
    <ChunkCollectionContext.Provider key={chunk.identifier} value={chunk}>
      <div data-collection-name={chunk.collection.name} className={className}>
        {children}
      </div>
    </ChunkCollectionContext.Provider>
  ));
}

export default ChunkCollection;
