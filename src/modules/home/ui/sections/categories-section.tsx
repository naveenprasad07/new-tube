"use client";

import { trpc } from "@/app/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error....</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

export const CategoriesSectionSuspense = ({
  categoryId,
}: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  return <div>{JSON.stringify(categories)}</div>;
};
