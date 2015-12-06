export declare function BoolMust(val?: any): {
    bool: {
        must: any;
    };
};
export declare function BoolShould(val?: any): {
    bool: {
        should: any;
    };
};
export declare function SimpleQueryString(query: any, options?: {}): {
    "simple_query_string": {};
};
export interface TermOptions {
    $name?: string;
    $value?: string | number;
    $remove?: Function;
}
export declare function Term(key: any, value: any, options?: TermOptions): {};
export declare function Terms(key: any, options: any): {
    terms: {};
};
