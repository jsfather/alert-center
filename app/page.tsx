import SparklineDots from '@/app/components/SparklineDots';

export default function Page() {
  return (
    <div className="h-full bg-dotted p-4">
      <SparklineDots
        squareSize={10}
        rows={3}
        columns={31}
        colors={[
          { color: 'transparent', chance: 3 },
          { color: '#19ddd5', chance: 1 },
          { color: '#2e2e2e', chance: 3 },
          { color: '#4a4a4a', chance: 2 },
          { color: '#121212', chance: 3 },
          { color: '#ffffff', chance: 1 },
          { color: '#575757', chance: 1 },
        ]}
      />
    </div>
  );
}
