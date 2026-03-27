export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="glass p-8 text-center text-gray-400">
      <p>{text}</p>
    </div>
  );
}