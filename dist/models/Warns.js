"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Warns = class Warns {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Warns.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "moderator", void 0);
__decorate([
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], Warns.prototype, "reason", void 0);
Warns = __decorate([
    typeorm_1.Entity("warns")
], Warns);
exports.Warns = Warns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FybnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL1dhcm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdFO0FBR2hFLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQUs7Q0FlakIsQ0FBQTtBQWJHO0lBREMsZ0NBQXNCLEVBQUU7O2lDQUNkO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O29DQUMxQjtBQUdkO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzttQ0FDM0I7QUFHYjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7d0NBQ3RCO0FBR2xCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7cUNBQ1Y7QUFkTixLQUFLO0lBRGpCLGdCQUFNLENBQUMsT0FBTyxDQUFDO0dBQ0gsS0FBSyxDQWVqQjtBQWZZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiXG5cbkBFbnRpdHkoXCJ3YXJuc1wiKVxuZXhwb3J0IGNsYXNzIFdhcm5ze1xuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlclxuXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyIH0pXG4gICAgZ3VpbGQhOiBzdHJpbmdcblxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMiB9KVxuICAgIHVzZXIhOiBzdHJpbmdcblxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMiB9KVxuICAgIG1vZGVyYXRvciE6IHN0cmluZ1xuXG4gICAgQENvbHVtbih7IHR5cGU6IFwidGV4dFwiIH0pXG4gICAgcmVhc29uITogc3RyaW5nXG59Il19