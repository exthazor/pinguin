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
exports.Giveaways = void 0;
const typeorm_1 = require("typeorm");
let Giveaways = class Giveaways {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Giveaways.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Giveaways.prototype, "end", void 0);
Giveaways = __decorate([
    typeorm_1.Entity("giveaways")
], Giveaways);
exports.Giveaways = Giveaways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9HaXZlYXdheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdFO0FBR2hFLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FZckIsQ0FBQTtBQVZHO0lBREMsZ0NBQXNCLEVBQUU7O3FDQUNkO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzBDQUN4QjtBQUdoQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MENBQ3hCO0FBR2hCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7c0NBQ2hCO0FBWEgsU0FBUztJQURyQixnQkFBTSxDQUFDLFdBQVcsQ0FBQztHQUNQLFNBQVMsQ0FZckI7QUFaWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSdcblxuQEVudGl0eShcImdpdmVhd2F5c1wiKVxuZXhwb3J0IGNsYXNzIEdpdmVhd2F5c3tcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXJcblxuICAgIEBDb2x1bW4oeyB0eXBlOiAndmFyY2hhcicsIGxlbmd0aDogMjIgfSlcbiAgICBjaGFubmVsITogc3RyaW5nXG5cbiAgICBAQ29sdW1uKHsgdHlwZTogJ3ZhcmNoYXInLCBsZW5ndGg6IDIyIH0pXG4gICAgbWVzc2FnZSE6IHN0cmluZ1xuXG4gICAgQENvbHVtbih7IHR5cGU6ICdpbnRlZ2VyJyB9KVxuICAgIGVuZCE6IG51bWJlclxufSJdfQ==