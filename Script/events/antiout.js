module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি মোহাম্মদ নাবিল বস  \n ${name} এই শালা'কে আর আমাদের গ্যাং এ এড দিতে পারলাম না_⬅️⚠️ \n\n ──────·····✦·····──── \n 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 | ᵁᴸᴸ⁴ˢᴴ `, event.threadID)
   } else api.sendMessage(`শোন, ${name} এই গ্রুপ হইলো ভেজাল মাল বস এর একটা গ্যাং! \n এখান থেকে যাইতে হইলে ভেজাল মাল এর ক্লিয়ারেন্স লাগে! \nতুই পারমিশন ছাড়া লিভ নিছোস – তোকে আবার মাফিয়া স্টাইলে ধরে আনলাম =༺ভেজাল-মাল༻=। \n\n ── ·······✦·······──── \n ༺ভেজাল-মাল༻|  `, event.threadID);
  })
 }
}
