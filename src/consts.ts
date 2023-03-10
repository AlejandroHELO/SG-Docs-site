export const SITE = {
  title: "SG Documentation",
  description: "The Stargaze ecosystem documentation.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "StargazeZone",
};

// export const KNOWN_LANGUAGES = {
// 	English: 'en',
// } as const;
// export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<string, { text: string; link: string }[]>;

export const SIDEBAR: Sidebar = {
  Introduction: [{ text: "Introduction", link: "/introduction" }],
  Guides: [
    {
      text: "1. Setup a basic project",
      link: "/guides/1-setup-a-basic-project/1-setup-a-basic-project",
    },
    {
      text: "2. Configure your project",
      link: "/guides/2-configure-your-project",
    },
    {
      text: "3. Add assets and metadata",
      link: "/guides/3-add-assets-and-metadata/3-add-assets-and-metadata",
    },
    {
      text: "NFT.Storage",
      link: "/guides/3-add-assets-and-metadata/nft-storage",
    },
    {
      text: "NFT.Storage (Script)",
      link: "/guides/3-add-assets-and-metadata/nft-storage-script",
    },
    {
      text: "Pinata Upload",
      link: "/guides/3-add-assets-and-metadata/pinata-upload",
    },
    {
      text: "4. Instantiate minter contract on testnet",
      link: "/guides/4-instantiate-minter-contract-on-testnet",
    },
    { text: "5. Whitelist", link: "/guides/5-whitelist" },
    {
      text: "6. Mint from your contract",
      link: "/guides/6-mint-from-your-contract",
    },
    { text: "7. Query contract", link: "/guides/7-query-contract" },
    {
      text: "8. Testing your contract on testnet",
      link: "/guides/8-testing-your-contract-on-testnet",
    },
    {
      text: "9. Launching on mainnet",
      link: "/guides/9-launching-on-mainnet/9-launching-on-mainnet",
    },
    {
      text: "9a. Launching on mainnet with Keplr (optional)",
      link: "/guides/9-launching-on-mainnet/9a-launching-on-mainnet-with-keplr-optional-with-keplr",
    },
  ],
  "Stargaze Studio": [
    { text: "Stargaze Studio", link: "/stargaze-studio/stargaze-studio" },
    {
      text: "1. Create an NFT Collection",
      link: "/stargaze-studio/create-an-nft-collection/create-an-nft-collection",
    },
    {
      text: "1.1 Upload Assets and Metadata",
      link: "/stargaze-studio/create-an-nft-collection/upload-assets-and-metadata",
    },
    {
      text: "1.2 Configure collection and Minting Details",
      link: "/stargaze-studio/create-an-nft-collection/configure-collection-and-minting-details",
    },
    {
      text: "1.3 Whitelist and Royalty Options",
      link: "/stargaze-studio/create-an-nft-collection/whitelist-and-royalty-options",
    },
    {
      text: "2. Interact with a collection",
      link: "/stargaze-studio/interact-with-a-collection/interact-with-a-collection",
    },
    {
      text: "2.1 Execute Messages",
      link: "/stargaze-studio/interact-with-a-collection/execute-messages",
    },
    {
      text: "2.2 Query Data",
      link: "/stargaze-studio/interact-with-a-collection/query-data",
    },
  ],
  Names: [
    { text: "Mint", link: "/names/mint" },
    { text: "Verify Socials", link: "/names/verify-socials" },
    { text: "Integrate", link: "/names/integrate" },
  ],
  Creators: [
    { text: "Collection Guidelines", link: "/creators/collection-guidelines" },
    {
      text: "Create a Multisig Wallet",
      link: "/creators/create-stargaze-multisig",
    },
    {
      text: "Community Vote Process",
      link: "/creators/community-vote-process",
    },
    { text: "Voting Guidelines", link: "/creators/voting-guidelines" },
  ],
  Developers: [
    {
      text: "CosmWasm Smart Contracts",
      link: "/developers/cosmwasm-smart-contracts",
    },
    { text: "Deploy to Testnet", link: "/developers/testnet" },
    { text: "Contract Code IDs", link: "/developers/contract-code-ids" },
  ],
  Governance: [
    { text: "Stargaze Governance", link: "/governance/protocol-governance" },
    { text: "Marketplace", link: "/governance/marketplace" },
  ],
  "Nodes & Validators": [
    { text: "Getting Setup", link: "/nodes-and-validators/getting-setup" },
    { text: "Joining Mainnet", link: "/nodes-and-validators/joining-mainnet" },
    {
      text: "Setting up Cosmovisor",
      link: "/nodes-and-validators/setting-up-cosmovisor",
    },
    {
      text: "Running a Production Validator",
      link: "/nodes-and-validators/running-a-production-validator",
    },
    {
      text: "Configuring StateSync",
      link: "/nodes-and-validators/configuring-statesync",
    },
    {
      text: "Running a Relayer",
      link: "/nodes-and-validators/running-a-relayer",
    },
  ],
  Extras: [
    { text: "Airdrop FAQ", link: "/extras/airdrop-faq" },
    { text: "Glossary", link: "/" },
    { text: "Stargaze Assets", link: "/extras/stargaze-assets" },
  ],
};
