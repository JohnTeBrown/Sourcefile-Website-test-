import { createSignal } from 'solid-js';

// Function to simulate a delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to check the connection speed
async function checkConnectionSpeed() {
  const startTime = performance.now();
  try {
    await fetch('https://johntebrown.github.io/Sourcefile-Website-Revamped/');
    const endTime = performance.now();
    const duration = endTime - startTime;
    return duration;
  } catch (error) {
    console.error('Error checking connection speed:', error);
    return null;
  }
}

// Function to slow down page load based on connection speed
async function slowPageLoad() {
  const speed = await checkConnectionSpeed();
  if (speed !== null) {
    if (speed >= 3000) {
      // Slowest speed: Delay page load by 5 seconds
      await delay(5000);
    } else if (speed >= 1000) {
      // Medium speed: Delay page load by 3 seconds
      await delay(3000);
    } else {
      // Fastest speed: No delay
    }
  } else {
    // Error occurred while checking connection speed, no delay
  }
}

// Entry point
async function main() {
  const [isLoading, setIsLoading] = createSignal(true);

  // Simulate slow page load
  await slowPageLoad();

  // Perform any other necessary actions
  // ...

  setIsLoading(false);
}

export default main;
