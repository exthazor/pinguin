"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const ms_1 = require("ms");
class GiveawayCommand extends discord_akairo_1.Command {
    constructor() {
        super('giveaway', {
            aliases: ['giveaway', 'gift', 'competition'],
            category: 'Public Commands',
            description: {
                content: 'Start a giveaway',
                usage: 'giveaway [ time ] [ item ]',
                examples: [
                    'giveaway 10m Discord Nitro'
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: 'time',
                    type: (msg, str) => {
                        return Number(ms_1.ms(str)); //returns a time in ms, if not then goes to prompt
                    },
                    prompt: {
                        start: (msg) => `${"<@" + msg.author + ">"}, you must provide a time!`,
                        retry: (msg) => `${"<@" + msg.author + ">"}, you must provide a valid time!`
                    }
                },
                {}
            ]
        });
    }
}
exports.default = GiveawayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlDb21tYW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMgQ29tbWFuZHMvR2l2ZWF3YXlDb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUF3QztBQUV4QywyQkFBdUI7QUFLdkIsTUFBcUIsZUFBZ0IsU0FBUSx3QkFBTztJQUNoRDtRQUNJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQztZQUM1QyxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixLQUFLLEVBQUUsNEJBQTRCO2dCQUNuQyxRQUFRLEVBQUU7b0JBQ04sNEJBQTRCO2lCQUMvQjthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO3dCQUNoQyxPQUFPLE1BQU0sQ0FBQyxPQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFNLGtEQUFrRDtvQkFDbEYsQ0FBQztvQkFDRCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsNEJBQTRCO3dCQUMvRSxLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxrQ0FBa0M7cUJBQ3hGO2lCQUNKO2dCQUNELEVBRUM7YUFDSjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQTlCRCxrQ0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lIH0gZnJvbSAnY29uc29sZSdcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gJ2Rpc2NvcmQuanMnXG5pbXBvcnQgeyBtcyB9IGZyb20gJ21zJ1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nXG5pbXBvcnQgeyBHaXZlYXdheXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvR2l2ZWF3YXlzJ1xuaW1wb3J0IEdpdmVhd2F5TWFuYWdlciBmcm9tICcuLi8uLi9zdHJ1Y3R1cmVzL2dpdmVhd2F5cy9HaXZlYXdheU1hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdmVhd2F5Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2dpdmVhd2F5Jywge1xuICAgICAgICAgICAgYWxpYXNlczogWydnaXZlYXdheScsICdnaWZ0JywgJ2NvbXBldGl0aW9uJ10sXG4gICAgICAgICAgICBjYXRlZ29yeTogJ1B1YmxpYyBDb21tYW5kcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTdGFydCBhIGdpdmVhd2F5JyxcbiAgICAgICAgICAgICAgICB1c2FnZTogJ2dpdmVhd2F5IFsgdGltZSBdIFsgaXRlbSBdJyxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xuICAgICAgICAgICAgICAgICAgICAnZ2l2ZWF3YXkgMTBtIERpc2NvcmQgTml0cm8nXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IChtc2c6IE1lc3NhZ2UsIHN0cjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKG1zKHN0cikpICAgICAgLy9yZXR1cm5zIGEgdGltZSBpbiBtcywgaWYgbm90IHRoZW4gZ29lcyB0byBwcm9tcHRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT4gYCR7XCI8QFwiICsgbXNnLmF1dGhvciArIFwiPlwifSwgeW91IG11c3QgcHJvdmlkZSBhIHRpbWUhYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5OiAobXNnOiBNZXNzYWdlKSA9PiBgJHtcIjxAXCIgKyBtc2cuYXV0aG9yICsgXCI+XCJ9LCB5b3UgbXVzdCBwcm92aWRlIGEgdmFsaWQgdGltZSFgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICB9XG59Il19