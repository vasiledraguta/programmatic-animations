interface SourceProps {
  href: string;
}

export default function Source({ href }: SourceProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground my-auto hover:underline"
    >
      source
    </a>
  );
}
