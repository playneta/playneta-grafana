export default class SqlSeries {
    series: any;
    meta: any;
    tillNow: any;
    from: any;
    to: any;
    /** @ngInject */
    constructor(options: any);
    toTable(): any;
    toTimeSeries(): any;
    extrapolate(datapoints: any): any;
    _toJSType(type: any): string;
    _formatValue(value: any): any;
}
