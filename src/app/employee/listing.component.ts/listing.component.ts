import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListingComponent implements OnInit {
  userId: any;
  @Input() productsList = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.userId = localStorage.getItem('AuthToken');
  }

  // Open confirmation popup to delete the product
  deleteProduct(productId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete this product? This action can not be rollback.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Hi');
      }
    });
  }
}
