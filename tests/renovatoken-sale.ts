import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { RenovatokenSale } from "../target/types/renovatoken_sale";

describe("renovatoken-sale", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.RenovatokenSale as Program<RenovatokenSale>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
