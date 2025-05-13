// Function to get memory usage in MB
export function getMemoryUsage(startMemoryUsage) {
  const memoryUsage = process.memoryUsage();

  const memoryDiff = {
    heapUsed: (
      (memoryUsage.heapUsed - startMemoryUsage.heapUsed) /
      1024 /
      1024
    ).toFixed(2), // in MB
    heapTotal: (
      (memoryUsage.heapTotal - startMemoryUsage.heapTotal) /
      1024 /
      1024
    ).toFixed(2), // in MB
  };

  return memoryDiff;
}

// Function to get CPU usage in ms
export function getCPUUsage(startUsage) {
  const currentUsage = process.cpuUsage(startUsage);
  return {
    user: (currentUsage.user / 1000).toFixed(2), // in ms
    system: (currentUsage.system / 1000).toFixed(2), // in ms
  };
}

// Function to get elapsed time in ms
export function getElapsedTime(startTime) {
  const endTime = process.hrtime(startTime);
  return (endTime[0] * 1000 + endTime[1] / 1000000).toFixed(2); // time in ms
}
