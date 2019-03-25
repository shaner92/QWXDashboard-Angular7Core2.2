import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
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
 */
@Injectable()
export class FileDatabase {
    dataChange = new BehaviorSubject<FileNode[]>([]);

    get data(): FileNode[] { return this.dataChange.value; }
    constructor(treeData: string) {
        // assign the get data from controller to data ojbect
        const dataObject = JSON.parse(treeData);
        //build tree from part controller json data
        const data = this.buildFileTree(dataObject, 0);
        //// Notify the change.
        this.dataChange.next(data);
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
export class PartHistoryComponent implements OnInit {
    SN: object;
    toLoad: boolean = false;
    treeControl: FlatTreeControl<FileFlatNode>;
    treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
    dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
    http: HttpClient;
    baseUrl: string;
    database: FileDatabase;
    radius = 10;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    transformer = (node: FileNode, level: number) => {
        return new FileFlatNode(!!node.children, node.filename, level, node.type);
    }

    private _getLevel = (node: FileFlatNode) => node.level;

    private _isExpandable = (node: FileFlatNode) => node.expandable;

    private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

    hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;


    ngOnInit() {
    }

   

    public PostData(SerialNum: string) {
        const retVal = this.http.post(this.baseUrl + 'api/PartHistory/Post', { SN: SerialNum }).subscribe
            (data => {
                this.toLoad = true;
                this.SN = data;
                this.database = new FileDatabase(JSON.stringify(this.SN));
                this.loadTree();
            });

    }


    public loadTree() {
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
            this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

        this.database.dataChange.subscribe(data => this.dataSource.data = data);
    }


    //public GenerateGraph() {
    //    var height = 300;
    //    var width = 600;
    //    var margin = { top: 20, right: 20, bottom: 50, left: 20 };

    //    // formatters for axis and labels
    //    var currencyFormat = d3.format("$0.2f");
    //    var decimalFormat = d3.format("0.2f");

    //    var svg = d3.select("body")
    //        .append("svg")
    //        .attr("width", width + margin.left + margin.right)
    //        .attr("height", height + margin.top + margin.bottom)
    //        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //    svg.append("g")
    //        .attr("class", "y axis");

    //    svg.append("g")
    //        .attr("class", "x axis");

    //    //var xScale = d3.axisBottom.ordinal()
    //    //    .rangeRoundBands([margin.left, width], .1);

    //    var xScale = d3.scaleLinear()
    //        .range([margin.left, width]);

    //    var yScale = d3.scaleLinear()
    //        .range([height, 0]);

    //    var xAxis = d3.axisBottom(xScale);

    //    var yAxis = d3.axisLeft(yScale);

    //}
}
