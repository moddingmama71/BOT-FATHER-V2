module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinvideo");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯

________________________

⎯͢⎯⃝🩵 𝙃𝙀𝙇𝙇𝙊 𝙀𝙑𝙀𝙍𝙔𝙊𝙉𝙀 𝙎𝙄𝘿𝙀 𝙋𝙇𝙀𝘼𝙎𝙀 𝙑𝘼𝙍𝙏𝙐𝘼𝙇 𝙏𝙊𝙋 𝙑𝙀𝙅𝘼𝙇 𝙈𝘼𝙇 𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔 𝙄𝙎 𝙃𝙀𝙍𝙀⎯͢⎯⎯͢⎯⃝😻👅🌻😉\n\n- "মাল চৌধরী নামটাই যথেষ্ট—🔰

- Bio  দরকারই পড়ে না।" 😎

- "বাকিদের bio লাগে আমার নামেই headline"⬅️!!

________________________\n\n𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧d

${global.config.PREFIX}Help\n${global.config.PREFIX} Manu

𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :༺ভেজাল⚜️মাল༻

\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
`, attachment: fs.createReadStream(__dirname + "/cache/ullash.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯ \n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n        [   {name} ]\n\n༆-✿ আপনাকে আমাদের࿐\n\n{threadName}\n\n🌺✨!!—এর পক্ষ-থেকে-!!✨🌺\n\n❤️🫰_ভালোবাস_অভিরাম_🫰❤️\n\n༆-✿আপনি_এই_গ্রুপের {soThanhVien} নং মেম্বার࿐\n\n╭•┄┅═══❁🌺❁═══┅┄•╮\n  🌸   𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️  🌸\n╰•┄┅═══❁🌺❁═══┅┄•╯" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
