import { ethers } from "ethers";
import { deployMetaTxContracts } from "./deploy";

export const ADMIN_MNEMONIC =
  "faint soul weapon churn there eagle awkward pause wagon pepper poverty farm";

/**
 * Set up the provider and wallet
 */
async function setup() {
  const infuraProvider = new ethers.providers.InfuraProvider(
    "mainnet",
    "7333c8bcd07b4a179b0b0a958778762b"
  );

  if (ADMIN_MNEMONIC.length == 0) {
    console.log("Please fill in the ADMIN_MNEMONIC");
    process.exit(0);
  }
  const adminMnemonicWallet = ethers.Wallet.fromMnemonic(ADMIN_MNEMONIC);
  const admin = adminMnemonicWallet.connect(infuraProvider);
  return {
    admin,
    provider: infuraProvider,
  };
}

(async () => {
  // Set up wallets & provider
  const { admin } = await setup();

  await deployMetaTxContracts(admin, true);
})().catch((e) => {
  console.log(e);
  // Deal with the fact the chain failed
});
