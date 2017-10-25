"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("../../services/item.service");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ItemsComponent.prototype.init = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.getTest = function () {
        return "test";
    };
    ItemsComponent.prototype.getIndexRow = function (index) {
        return ((index % 2) === 0) ? index / 2 : (index === 0) ? 0 : this.getIndexRow(index - 1);
    };
    ItemsComponent.prototype.getIndexColumn = function (index) {
        return (index % 2);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-items',
            templateUrl: './items.component.html'
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStDO0FBQy9DLDREQUF3RDtBQVN4RDtJQUlJLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUM1QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sNkJBQUksR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBekJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBS21DLDBCQUFXO09BSm5DLGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi8uLi9jbGFzc2VzL2l0ZW1cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaXRlbXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pdGVtcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaXRlbXM6IEl0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUZXN0KCkge1xuICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XG4gICAgfVxuXG4gICAgZ2V0SW5kZXhSb3coaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgoaW5kZXggJSAyKSA9PT0gMCkgPyBpbmRleCAvIDIgOiAoaW5kZXggPT09IDApID8gMCA6IHRoaXMuZ2V0SW5kZXhSb3coaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICBnZXRJbmRleENvbHVtbihpbmRleCkge1xuICAgICAgICByZXR1cm4gKGluZGV4ICUgMik7XG4gICAgfVxuXG5cbn1cbiJdfQ==