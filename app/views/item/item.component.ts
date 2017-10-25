import {Component, OnInit} from '@angular/core'
import {Item} from "../../classes/item";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'ns-item',
    templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

    item: Item;

    constructor(private itemService: ItemService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.init();
    }

    private init() {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id)
    }


}
