"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
const Database_1 = __importDefault(require("../structures/Database"));
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "commands")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has now been cancelled...",
                    ended: "You exceeded the maximum amount of tries, this command has now been cancelled...",
                    cancel: "This command has been cancelled...",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll(); //load all commands
        this.listenerHandler.loadAll(); //load all events
        this.db = Database_1.default.get(config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBK0U7QUFHL0UsK0JBQTRCO0FBQzVCLHNDQUFtRDtBQUVuRCxzRUFBNkM7QUFlN0MsTUFBcUIsU0FBVSxTQUFRLDZCQUFZO0lBOEIvQyxZQUFvQixNQUFrQjtRQUNsQyxLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFBO1FBOUJDLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztTQUMvQyxDQUFDLENBQUE7UUFFSyxtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFO1lBQzdELFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDNUMsTUFBTSxFQUFFLGVBQU07WUFDZCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNkLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxPQUFPLEVBQUUsMERBQTBEO29CQUNuRSxLQUFLLEVBQUUsa0ZBQWtGO29CQUN6RixNQUFNLEVBQUUsb0NBQW9DO29CQUM1QyxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQjtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDNUIsQ0FBQyxDQUFBO1FBT0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1YsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFFLG1CQUFtQjtRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUUsaUJBQWlCO1FBRWpELElBQUksQ0FBQyxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLENBQUE7UUFDOUIsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0NBQ0o7QUExREQsNEJBMERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XG5pbXBvcnQgeyBEaXNjb3JkQVBJRXJyb3IgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBkYk5hbWUgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIlxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi9zdHJ1Y3R1cmVzL0RhdGFiYXNlXCJcblxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcbiAgICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcbiAgICAgICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xuICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlcjtcbiAgICAgICAgZGI6IENvbm5lY3Rpb25cbiAgICB9XG59XG5cbmludGVyZmFjZSBCb3RPcHRpb25ze1xuICAgIHRva2VuPzogc3RyaW5nO1xuICAgIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudHtcbiAgICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zO1xuICAgIHB1YmxpYyBkYjogQ29ubmVjdGlvblxuICAgIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xuICAgICAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIilcbiAgICB9KVxuXG4gICAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcbiAgICAgICAgaGFuZGxlRWRpdHM6IHRydWUsXG4gICAgICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxuICAgICAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXG4gICAgICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxuICAgICAgICBhcmd1bWVudERlZmF1bHRzOiB7XG4gICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZC4uLmAsXG4gICAgICAgICAgICAgICAgdGltZW91dDogXCJZb3UgdG9vayB0b28gbG9uZywgdGhlIGNvbW1hbmQgaGFzIG5vdyBiZWVuIGNhbmNlbGxlZC4uLlwiLFxuICAgICAgICAgICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgdHJpZXMsIHRoaXMgY29tbWFuZCBoYXMgbm93IGJlZW4gY2FuY2VsbGVkLi4uXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBcIlRoaXMgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxsZWQuLi5cIixcbiAgICAgICAgICAgICAgICByZXRyaWVzOiAzLFxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG90aGVyd2lzZTogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXG4gICAgfSlcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoY29uZmlnOiBCb3RPcHRpb25zKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdCgpOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcilcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXG4gICAgICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxuICAgICAgICAgICAgcHJvY2Vzc1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpICAvL2xvYWQgYWxsIGNvbW1hbmRzXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKSAgLy9sb2FkIGFsbCBldmVudHNcblxuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2UuZ2V0KGRiTmFtZSlcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5jb25uZWN0KClcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5zeW5jaHJvbml6ZSgpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXQoKVxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbilcbiAgICB9XG59XG4iXX0=