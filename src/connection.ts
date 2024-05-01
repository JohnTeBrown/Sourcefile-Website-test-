import { createSignal } from 'solid-js'; // - why the fuck are we using solids functions just fucking use vanilla js or alpine or even fucking jquery

// Function to simulate a delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to check the connection speed
async function checkConnectionSpeed() {
  const startTime = performance.now();
  try {
    await fetch('https://rainsoftware.github.io/Sourcefile-Website-Revamped/'); // forgot to say the reason why this wasent fucking working was because it was using the old account name
    const endTime = performance.now();
    const duration = endTime - startTime;
    return duration;
  } catch (error) {
    console.error('Error checking connection speed:', error); // this can be removed as logging wont replicate to the client and deploys with GH actions make this useless
    return null;
  }
}

// Function to slow down page load based on connection speed - this is also fucking useless but once again it prevents the TS compiler from bitching so i'll keep it
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

// I wont even start to act like I know what the fuck is going on here - Rainyonrecord
async function main() {
  const [isLoading, setIsLoading] = createSignal(true);

  // Simulate slow page load - this literally isnt fucking required, but it keeps the TS compiler from bitching so I'll keep it
  await slowPageLoad();

  // Perform any other necessary actions - stop typing this comment out it's literally not required, alpine handles the rest, THERE IS NO MORE DOWNLOAD LOGIC TO BE PREFOMED
  // ...  - is there a reason somebody started a fucking comment and didnt write anything of use?

  setIsLoading(false);
}

export default main;
