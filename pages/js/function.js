window.addEventListener('DOMContentLoaded', () => {
    const onboarding = new MetaMaskOnboarding();
    const onboardButton = document.getElementById('onboard');
    let accounts;
  
    const updateButton = () => {
      if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
        onboardButton.innerText = 'Click here to install MetaMask!';
        onboardButton.onclick = () => {
          onboardButton.innerText = 'Onboarding in progress';
          onboardButton.disabled = true;
          onboarding.startOnboarding();
        };
      } else if (accounts && accounts.length > 0) {
        onboardButton.innerText = 'Connect';
        onboardButton.disabled = true;
        onboarding.stopOnboarding();
        connectButton = true
      } else {
        onboardButton.innerText = 'Connect';
        onboardButton.onclick = async () => {
          await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
        };
      }
    };
  
    updateButton();
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.on('accountsChanged', (newAccounts) => {
        accounts = newAccounts;
        updateButton();
      });
    }
  
  
  
  const showAccount = document.querySelector('.showAccount');
  
  onboardButton.addEventListener('click', () => {
    getAccount();
  });
  
  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); //
    const account = accounts[0];
    showAccount.innerHTML = account; //account
  }
  });

  if (connectButton = true) {
    function next() {
      window.location.href = 'mainpage.html';
  }

  }



  