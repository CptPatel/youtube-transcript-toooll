interface AdSlotProps {
  position: 'top-right' | 'in-content';
}

export default function AdSlot({ position }: AdSlotProps) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[200px] w-full">
      <div className="text-center text-gray-500">
        <p className="font-medium">Ad Space</p>
        <p className="text-sm mt-1">Position: {position}</p>
      </div>
    </div>
  );
}