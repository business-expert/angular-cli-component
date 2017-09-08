import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { TableColumnType } from "./table.model";

@Component({
    selector: 'md-table-plus',
    templateUrl: 'table.component.html',
    styleUrls: [ 'table.component.css' ]
})
export class TableComponent {

    dataSource: TableDataSource;

    @Input()
    public columns: [{
        field: string,
        displayField: string
    }];

    @Input()
    public set data(data: Observable<any>) {
        if (this.dataSource != null)
            this.dataSource.disconnect();
        if (data == null)
            this.dataSource = new TableDataSource(Observable.of([]));
        else
            this.dataSource = new TableDataSource(data);
    }

    @Output()
    public rowClicked = new EventEmitter<any>();

    @Output()
    public rowChanged = new EventEmitter<any>();

    @Input()
    public paginate = false;

    @Input()
    public elevate = true;

    private _emptyColumnNames = [];
    private _columnNames: string[] = [];
    private _lastColumns: any;

    public get columnNames(): string[] {
        if (this.columns == null) {
            return this._emptyColumnNames;
        }
        if (this.columns.length != this._columnNames.length || this.columns != this._lastColumns) {
            this._columnNames = this.columns.map(c => c.field);
        }
        return this._columnNames;
    }

    onRowClicked(row: any) {
        this.rowClicked.emit(row);
    }

    onRowChanged(row: any) {
        this.rowChanged.emit(row);
    }

    columnReadonly(column: any) {    
        return column.type == null || column.type == TableColumnType.ReadonlyText
    }

    columnCheckbox(column: any) {    
        return column.type == TableColumnType.Checkbox
    }

}

export class TableDataSource extends DataSource<any> {

    private updateSubject = new Subject<any>();

    noData = true;

    constructor(private data: Observable<any>) {
        super();
    }

    update() {
        this.updateSubject.next();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any> {
        return Observable.merge(this.updateSubject, this.data).map((data: any[]) => {
            this.noData = data == null || data.length == 0;
            return data;
        });
    }

    disconnect() {
    }

}