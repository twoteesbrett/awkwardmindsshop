import Card from "react-bootstrap/Card";

type VideoCardProps = {
  src: string;
  title?: string;
  description?: string;
  poster?: string;
  aspectRatio?: "1x1" | "4x3" | "16x9" | "21x9";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
};

export default function VideoCard({
  src,
  title,
  description,
  poster,
  aspectRatio = "16x9",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
}: VideoCardProps) {
  return (
    <Card className="shadow-lg rounded-4 overflow-hidden border border-dark">
      <div className={`ratio ratio-${aspectRatio}`}>
        <video
          className="w-100 h-100"
          playsInline
          autoPlay={autoPlay}
          muted={muted || autoPlay}   // autoplay safety
          loop={loop}
          controls={controls}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {(title || description) && (
        <Card.Body>
          {title && <Card.Title>{title}</Card.Title>}
          {description && (
            <Card.Text className="text-muted mb-0">
              {description}
            </Card.Text>
          )}
        </Card.Body>
      )}
    </Card>
  );
}
