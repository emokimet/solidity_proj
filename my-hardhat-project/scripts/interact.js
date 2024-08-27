async function main() {
    const [deployer] = await ethers.getSigners();
  
    // Replace with the address from the deployment script
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = HelloWorld.attach(contractAddress);
  
    console.log("Current message:", await helloWorld.message());
  
    const tx = await helloWorld.setMessage("New Message");
    await tx.wait();
  
    console.log("Updated message:", await helloWorld.message());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  