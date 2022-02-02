const { Client } = require("@twilio/conversations");

export default function chatConv(token) {
  const client = new Client(token);

  async function getConversation() {
    try {
      let res = await client.getConversationByUniqueName("07d42b86-928e-45ca-bd5a-572782523d12-ce82d301-f648-445f-864d-e80e628f82b9");
      console.log(res);
    } catch (err) {
      console.log("error", err);
    }
  }

 

  client.on("connectionStateChanged", (val) => {
    console.log(val);
    client.on("conversationJoined", vall => console.log(vall, "conversation test"))
   
    // getConversation();

  });
}
