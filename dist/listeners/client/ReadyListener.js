"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`*${this.client.user.tag}* is now online and ready!`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L1JlYWR5TGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsTUFBcUIsYUFBYyxTQUFRLHlCQUFRO0lBQy9DO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLElBQUk7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7Q0FDSjtBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeUxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXJ7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKFwicmVhZHlcIiwge1xuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcbiAgICAgICAgICAgIGV2ZW50OiBcInJlYWR5XCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJjbGllbnRcIlxuICAgICAgICB9KVxuICAgIH0gIFxuXG4gICAgcHVibGljIGV4ZWMoKTogdm9pZHtcbiAgICAgICAgY29uc29sZS5sb2coYCoke3RoaXMuY2xpZW50LnVzZXIudGFnfSogaXMgbm93IG9ubGluZSBhbmQgcmVhZHkhYClcbiAgICB9XG59Il19