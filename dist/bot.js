"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF1QztBQUN2QyxtRUFBMEM7QUFFMUMsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQTtBQUMxRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rva2VuLCBvd25lcnN9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IEJvdENsaWVudCBmcm9tIFwiLi9jbGllbnQvQm90Q2xpZW50XCJcblxuY29uc3QgY2xpZW50OiBCb3RDbGllbnQgPSBuZXcgQm90Q2xpZW50KHsgdG9rZW4sIG93bmVycyB9KVxuY2xpZW50LnN0YXJ0KCkiXX0=