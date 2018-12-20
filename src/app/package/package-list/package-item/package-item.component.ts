import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Package } from '../../package.model';
import { PackageService } from '../../package.service';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent implements OnInit {

  @Input() recipe:Package;
  @Input() index:number;

  ngOnInit() {
  }
}
