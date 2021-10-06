
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

const initialize = () => {
  //You will start here
 window.addEventListener('DOMContentLoaded', initialize);
 const onboardButton = document.getElementById('connectButton');
  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
};



