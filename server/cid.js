const ipfsClient = require("ipfs-http-client");

const run = async () => {
  const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
  const buf = Buffer.from("hello world1", "ascii");
  // const results = await ipfs.add(buf, { onlyHash: true });
  const results = await ipfs.addFromFs("./data/yan.jpg", { onlyHash: true });
  console.log(results);
};

run();
