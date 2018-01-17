/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export declare class ClickHouseDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    type: string;
    name: string;
    supportMetrics: boolean;
    url: string;
    directUrl: string;
    basicAuth: any;
    withCredentials: any;
    usePOST: boolean;
    addCorsHeader: boolean;
    responseParser: any;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    _request(query: any): any;
    query(options: any): any;
    metricFindQuery(query: any): any;
    testDatasource(): any;
    _seriesQuery(query: any): any;
    targetContainsTemplate(target: any): any;
}
