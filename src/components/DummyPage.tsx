interface Props {
  title: string;
  icon: string;
  description: string;
}

export default function DummyPage({ title, icon, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
      <span className="text-[64px] leading-none">{icon}</span>
      <h1 className="text-2xl font-bold text-text">{title}</h1>
      <p className="text-sm text-text-muted max-w-[240px] leading-relaxed">{description}</p>
    </div>
  );
}
