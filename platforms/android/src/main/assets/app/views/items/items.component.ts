import {Component, OnInit} from '@angular/core'
import {ItemService} from "../../services/item.service";
import {Item} from "../../classes/item";


@Component({
    moduleId: module.id,
    selector: 'ns-items',
    templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

    items: Item[];

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.init();
    }

    private init() {
        this.items = this.itemService.getItems();
    }

    getTest() {
        return "test";
    }

    getIndexRow(index) {
        return ((index % 2) === 0) ? index / 2 : (index === 0) ? 0 : this.getIndexRow(index - 1);
    }

    getIndexColumn(index) {
        return (index % 2);
    }


}
