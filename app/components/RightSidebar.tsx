export default function RightSidebar() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h4 className="font-bold text-sm">Add to your feed - Rozlance</h4>
      <div className="mt-3 space-y-3 text-">
        <div className="flex justify-between"><span>Tech Jobs Pakistan</span><button className="border rounded-full px-3 text-">+ Follow</button></div>
        <div className="flex justify-between"><span>Freelance Gigs</span><button className="border rounded-full px-3 text-">+ Follow</button></div>
        <div className="flex justify-between"><span>Rozi Roti Group</span><button className="border rounded-full px-3 text-">+ Follow</button></div>
      </div>
    </div>
  );
}