"use client";

import { trpc } from "@/app/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { videoUpdateSchema } from "@/db/schema";

interface FormSectionProps {
  videoId: string;
}

export const FormSection = ({ videoId }: FormSectionProps) => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<FormSectionSkeleton />}>
        <FormSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const FormSectionSkeleton = () => {
  return <p>Loading...</p>;
};

const FormSectionSuspense = ({ videoId }: FormSectionProps) => {
  const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });

  const form = useForm<z.infer<typeof videoUpdateSchema>>({
    resolver: zodResolver(videoUpdateSchema),
    defaultValues: video,
  });
  const onSubmit = async (data: z.infer<typeof videoUpdateSchema>) => {};

  return (
    <Form {...form}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Video details</h1>
          <p className="text-xs text-muted-foreground">
            Manage your video details
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button type="submit" disabled={false}>
            Save
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <TrashIcon className="size-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Form>
  );
};
