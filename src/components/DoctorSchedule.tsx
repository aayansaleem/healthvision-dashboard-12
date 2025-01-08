const doctors = [
  {
    name: "Dr. Hanzer Jon",
    image: "https://ui-avatars.com/api/?name=Hanzer+Jon",
  },
  {
    name: "Dr. Steve Alex",
    image: "https://ui-avatars.com/api/?name=Steve+Alex",
  },
  {
    name: "Dr. Johan Fraz",
    image: "https://ui-avatars.com/api/?name=Johan+Fraz",
  },
];

export function DoctorSchedule() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">My Schedule</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <span className="text-sm text-gray-600">20-March-23</span>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">{doctor.name}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 bg-medical-blue text-white py-3 rounded-xl hover:bg-medical-blue/90 transition-colors">
        Consult Now
      </button>
    </div>
  );
}