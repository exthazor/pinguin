"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommands extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public Commands",
            description: {
                content: "Check the latency of the ping to the Discord API",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.util.send(`Cyka Blyat! \`${this.client.ws.ping}ms \``);
    }
}
exports.default = PingCommands;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljIENvbW1hbmRzL1BpbmdDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXdDO0FBR3hDLE1BQXFCLFlBQWEsU0FBUSx3QkFBTztJQUM3QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtEQUFrRDtnQkFDM0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLE1BQU07aUJBQ1Q7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUN4QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFBO0lBQ3pFLENBQUM7Q0FDSjtBQW5CRCwrQkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kcyBleHRlbmRzIENvbW1hbmR7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFwicGluZ1wiLHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWMgQ29tbWFuZHNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgcGluZyB0byB0aGUgRGlzY29yZCBBUElcIixcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJwaW5nXCIsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwaW5nXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYEN5a2EgQmx5YXQhIFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31tcyBcXGBgKVxuICAgIH1cbn0iXX0=