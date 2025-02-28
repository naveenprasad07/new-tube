"use client";

import { trpc } from "@/app/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";

export const VidoesSelection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return <div>{JSON.stringify(data)}</div>;
};
