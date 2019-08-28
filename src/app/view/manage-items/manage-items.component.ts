import {Component, OnInit} from '@angular/core';
import {Item} from '../../dto/item';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

}
