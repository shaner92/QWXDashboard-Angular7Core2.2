import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Inject } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
    children: FileNode[];
    filename: string;
    type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
    constructor(
        public expandable: boolean, public filename: string, public level: number, public type: any) { }
}


/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
    dataChange = new BehaviorSubject<FileNode[]>([]);

    get data(): FileNode[] { return this.dataChange.value; }

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/PartHistory/Get').subscribe(result => {
              // assign the get data from controller to data ojbect
            const dataObject = result;
            //build tree from part controller json data
            const data = this.buildFileTree(dataObject, 0);
                   //// Notify the change.
             this.dataChange.next(data);
            console.log(result)
        }, error => console.error(error));
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
        return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
            const value = obj[key];
            const node = new FileNode();
            node.filename = key;

            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                } else {
                    node.type = value;
                }
            }

            return accumulator.concat(node);
        }, []);
    }
    
}

/**
 * @title Tree with flat nodes
 */
@Component({
    selector: 'app-PartHistory',
    templateUrl: './PartHistory.component.html',
    providers: [FileDatabase]
})
export class PartHistoryComponent {
    treeControl: FlatTreeControl<FileFlatNode>;
    treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
    dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
    constructor(database: FileDatabase) {
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
        this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

        database.dataChange.subscribe(data => this.dataSource.data = data);
    }

    transformer = (node: FileNode, level: number) => {
        return new FileFlatNode(!!node.children, node.filename, level, node.type);
    }

    private _getLevel = (node: FileFlatNode) => node.level;

    private _isExpandable = (node: FileFlatNode) => node.expandable;

    private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

    hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

    
}
