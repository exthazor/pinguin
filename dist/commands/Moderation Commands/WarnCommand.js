"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");
class WarnCommand extends discord_akairo_1.Command {
    constructor() {
        super("warn", {
            aliases: ["warn"],
            category: "Moderation Commands",
            description: {
                content: "Warn a member in the server",
                usage: "warn [ member ] < reason> ",
                examples: [
                    "warn @Host#0001 swearing",
                    "warn host swearing",
                    "warn @Captain Entropy$8973 defaming"
                ]
            },
            ratelimit: 3,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg) => `${"<@" + msg.author + ">"}, please provide a member to warn...`,
                        retry: (msg) => `${"<@" + msg.author + ">"}, please provide a valid member to warn...`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    default: "being a generic asshole"
                }
            ]
        });
    }
    async exec(message, { member, reason }) {
        const warnRepo = this.client.db.getRepository(Warns_1.Warns);
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.util.reply("This member has higher or equal roles than you! Sucks to be you, isn't it?");
        await warnRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        });
        return message.util.send(`Announcement! **${"<@" + member.user.id + ">"}** has been warned by **${"<@" + message.author.id + ">"}** for *${reason}*`);
    }
}
exports.default = WarnCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FybkNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvTW9kZXJhdGlvbiBDb21tYW5kcy9XYXJuQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF3QztBQUd4Qyw4Q0FBMEM7QUFFMUMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxLQUFLLEVBQUUsNEJBQTRCO2dCQUNuQyxRQUFRLEVBQUU7b0JBQ04sMEJBQTBCO29CQUMxQixvQkFBb0I7b0JBQ3BCLHFDQUFxQztpQkFDeEM7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDcEMsSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxzQ0FBc0M7d0JBQ3pGLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLDRDQUE0QztxQkFDbEc7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLHlCQUF5QjtpQkFDckM7YUFDSjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUEwQztRQUMxRixNQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUssQ0FBQyxDQUFBO1FBRXZFLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3hILE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtRQUV2RyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDZixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQTtRQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLDJCQUEyQixJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDekosQ0FBQztDQUNKO0FBbERELDhCQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIlxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiXG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIlxuaW1wb3J0IHsgV2FybnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1dhcm5zXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FybkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5ke1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihcIndhcm5cIiwge1xuICAgICAgICAgICAgYWxpYXNlczogW1wid2FyblwiXSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1vZGVyYXRpb24gQ29tbWFuZHNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJXYXJuIGEgbWVtYmVyIGluIHRoZSBzZXJ2ZXJcIixcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJ3YXJuIFsgbWVtYmVyIF0gPCByZWFzb24+IFwiLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwid2FybiBASG9zdCMwMDAxIHN3ZWFyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2FybiBob3N0IHN3ZWFyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2FybiBAQ2FwdGFpbiBFbnRyb3B5JDg5NzMgZGVmYW1pbmdcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbnM6IFtcIk1BTkFHRV9NRVNTQUdFU1wiXSxcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHtcIjxAXCIgKyBtc2cuYXV0aG9yICsgXCI+XCJ9LCBwbGVhc2UgcHJvdmlkZSBhIG1lbWJlciB0byB3YXJuLi4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5OiAobXNnOiBNZXNzYWdlKSA9PiBgJHtcIjxAXCIgKyBtc2cuYXV0aG9yICsgXCI+XCJ9LCBwbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG1lbWJlciB0byB3YXJuLi4uYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInJlYXNvblwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiYmVpbmcgYSBnZW5lcmljIGFzc2hvbGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBtZW1iZXIsIHJlYXNvbiB9OiB7bWVtYmVyOiBHdWlsZE1lbWJlciwgcmVhc29uOiBzdHJpbmcgfSk6IFByb21pc2U8TWVzc2FnZT57XG4gICAgICAgIGNvbnN0IHdhcm5SZXBvOiBSZXBvc2l0b3J5PFdhcm5zPiA9IHRoaXMuY2xpZW50LmRiLmdldFJlcG9zaXRvcnkoV2FybnMpXG5cbiAgICAgICAgaWYobWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gbWVzc2FnZS5tZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiAmJiBtZXNzYWdlLmF1dGhvci5pZCAhPT0gbWVzc2FnZS5ndWlsZC5vd25lcklEKVxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnJlcGx5KFwiVGhpcyBtZW1iZXIgaGFzIGhpZ2hlciBvciBlcXVhbCByb2xlcyB0aGFuIHlvdSEgU3Vja3MgdG8gYmUgeW91LCBpc24ndCBpdD9cIilcblxuICAgICAgICBhd2FpdCB3YXJuUmVwby5pbnNlcnQoe1xuICAgICAgICAgICAgZ3VpbGQ6IG1lc3NhZ2UuZ3VpbGQuaWQsXG4gICAgICAgICAgICB1c2VyOiBtZW1iZXIuaWQsXG4gICAgICAgICAgICBtb2RlcmF0b3I6IG1lc3NhZ2UuYXV0aG9yLmlkLFxuICAgICAgICAgICAgcmVhc29uOiByZWFzb25cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYEFubm91bmNlbWVudCEgKioke1wiPEBcIiArIG1lbWJlci51c2VyLmlkICsgXCI+XCJ9KiogaGFzIGJlZW4gd2FybmVkIGJ5ICoqJHtcIjxAXCIgKyBtZXNzYWdlLmF1dGhvci5pZCArIFwiPlwifSoqIGZvciAqJHtyZWFzb259KmApXG4gICAgfVxufVxuIl19