// Define a large array for testing
const largeArray = Array(1000000).fill(0).map((_, index) => index);

// Function to test for-loop performance
function testForLoop() {
  console.time('For-loop');
  for (let i = 0; i < largeArray.length; i++) {
    largeArray[i] = largeArray[i] * 2;
  }
  console.timeEnd('For-loop');
}

// Function to test forEach performance
function testForEach() {
  console.time('ForEach');
  largeArray.forEach((element, index) => {
    largeArray[index] = element * 2;
  });
  console.timeEnd('ForEach');
}

// Function to test map performance
function testMap() {
  console.time('Map');
  largeArray.map((element, index) => {
    largeArray[index] = element * 2;
  });
  console.timeEnd('Map');
}

// Function to test for-of loop performance
function testForOfLoop() {
  console.time('For-of loop');
  for (const element of largeArray) {
    largeArray[largeArray.indexOf(element)] = element * 2;
  }
  console.timeEnd('For-of loop');
}

// Test the performance of each method
testForLoop();
testForEach();
testMap();
testForOfLoop();