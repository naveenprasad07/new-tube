import { trpc } from "@/app/trpc/client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";

interface ThumbnailUploadModalProps {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ThumbnailUploadModal = ({
  videoId,
  open,
  onOpenChange,
}: ThumbnailUploadModalProps) => {
  const utils = trpc.useUtils();

  const onUploadComplete = ()=>{
    utils.studio.getOne.invalidate({id:videoId})
    utils.studio.getMany.invalidate();
    onOpenChange(false);

  }
  return (
    <ResponsiveModal
      title="Uplaod a thumbnail"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone endpoint="thumbnailUploader"  input={{videoId}} onClientUploadComplete={onUploadComplete}/>
    </ResponsiveModal>
  );
};
