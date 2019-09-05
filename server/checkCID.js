const ipfsClient = require("ipfs-http-client");

const run = async () => {
  const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
  ipfs.get(
    "/ipfs/QmRYYdcSmzz38WUqouU3uq3Wson8Y14UzczjCoB9qceQoY",
    (err, file) => {
      if (err) console.log("error");
      else console.log(file.toString("utf8"));
    }
  );

  /*  try {
    const results = await ipfs.cat(
      "/ipfs/QmRYYdcSmzz38WUqouU3uq3Wson8Y14UzczjCoB9qceQpY"
    );
    console.log(results);
  } catch (error) {
    console.log("sdsdsd");
  }*/
};

run();
