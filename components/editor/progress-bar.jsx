const ProgressBar = ({ progress }) => {
  const ProgressNumber = Number(progress).toFixed(0);  // Ensure it's a number and round it to zero decimal places
  const ProgressWidth = `${ProgressNumber}%`;          // Create a string that will be used for the width style

  return (
    <div className="w-full border p-3 rounded-md">
      <div className="flex w-full items-center justify-between mb-1">
        <span className="text-base font-medium text-accent dark:text-white">Uploading</span>
        <span className="text-sm font-medium text-accent dark:text-white">{ProgressNumber}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        {/* Apply the dynamic width using the style prop */}
        <div className="bg-primary h-2.5 rounded-full" style={{ width: ProgressWidth }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
