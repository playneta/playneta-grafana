/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import SqlQuery from './sql_query';
import { QueryCtrl } from 'app/plugins/sdk';
declare class SqlQueryCtrl extends QueryCtrl {
    private uiSegmentSrv;
    static templateUrl: string;
    queryModel: SqlQuery;
    databaseSegment: any;
    dateTimeType: any;
    dateColDataTypeSegment: any;
    dateTimeColDataTypeSegment: any;
    tableSegment: any;
    formats: any[];
    panel: any;
    datasource: any;
    target: any;
    resolutions: any;
    scanner: any;
    editMode: boolean;
    textareaHeight: any;
    dateTimeTypeOptions: any;
    tableLoading: boolean;
    datetimeLoading: boolean;
    dateLoading: boolean;
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any, uiSegmentSrv: any);
    fakeSegment(value: any): any;
    getDateColDataTypeSegments(): any;
    dateColDataTypeChanged(): void;
    dateTimeTypeChanged(): void;
    getDateTimeColDataTypeSegments(): any;
    dateTimeColDataTypeChanged(): void;
    toggleEditorMode(): void;
    toggleEdit(e: any, editMode: boolean): void;
    getDatabaseSegments(): any;
    databaseChanged(): void;
    getTableSegments(): any;
    tableChanged(): void;
    formatQuery(): void;
    toQueryMode(): void;
    format(): any;
    getScanner(): any;
    handleQueryError(err: any): any[];
    querySegment(type: string): any;
    applySegment(dst: any, src: any): void;
    buildExploreQuery(type: any): any;
}
export { SqlQueryCtrl };
