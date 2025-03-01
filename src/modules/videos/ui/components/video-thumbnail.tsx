import Image from "next/image";

interface VideoThumbnailProps {
  imageUrl?: string | null;
}

export const VideoThumbnail = ({ imageUrl }: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper  */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/* Video duration box  */}
      {/* TODO : Add video duratioon box  */}
    </div>
  );
};
