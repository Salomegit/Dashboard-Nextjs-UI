"use client";
const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold"> Announcement</h1>
        <span className="text-xs tet-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-sallySkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum, dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
        <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            rerum. Cum non itaque explicabo facere aliquam ab praesentium, nemo
            enim tempore 
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-sallyPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum, dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            rerum. Cum non itaque explicabo facere aliquam ab praesentium, nemo
            enim tempore 
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-sallyYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum, dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            rerum. Cum non itaque explicabo facere aliquam ab praesentium, nemo
            enim tempore 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
