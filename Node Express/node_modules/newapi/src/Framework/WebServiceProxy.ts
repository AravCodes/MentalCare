/**
 * Web service proxy object.  Implements calls to the backend REST service.
 */
import SerialisableObject from "./SerialisableObject";

var syncRequest = require('sync-request');
var asyncRequest = require('then-request');

export default class WebServiceProxy {

    private _webServiceURL: string;
    private _globalParameters: any[];
    private _synchronous: boolean;


    constructor(webServiceURL: string, globalParameters: any[], synchronous: boolean) {
        this._webServiceURL = webServiceURL;
        this._globalParameters = globalParameters;
        this._synchronous = synchronous;
    }


    /**
     * Call a method on the remote web service, using the passed options.
     */
    protected callMethod(requestPath: string, method: string = "GET", params: any = {}, payload: any = null, returnClass: any): any {


        let url = this._webServiceURL + "/" + requestPath;

        let getParams: any = Object.assign({}, this._globalParameters);

        // Also assign any params to the object.
        getParams = Object.assign(getParams, params);

        let paramsAsStrings: string[] = [];
        Object.keys(getParams).forEach(function (key) {
            if (getParams[key] !== undefined)
                paramsAsStrings.push(key + "=" + getParams[key]);
        });

        if (paramsAsStrings.length > 0)
            url += "?" + paramsAsStrings.join("&");

        // If we have a payload, ensure we remap _ properties back in object modes
        if (payload) {
            payload = this._processPayload(payload);
        }


        if (this._synchronous) {

            var res = syncRequest(method, url, payload ? {
                json: payload
            } : null);

            var body = JSON.parse(res.body.toString());

            if (res.statusCode != 200) {
                throw (body.message);
            } else {
                return this._processReturnValue(body, returnClass);
            }


        } else {

            return new Promise((resolve, reject) => {

                asyncRequest(method, url, payload ? {
                    json: payload
                } : null).done((res: any) => {
                    var body = JSON.parse(res.body.toString());

                    if (res.statusCode != 200) {
                        reject(body.message);
                    } else {
                        resolve(this._processReturnValue(body, returnClass));
                    }
                });

            });

        }

    }


    // Process a return value and ensure we get the correct class.
    private _processReturnValue(returnValue: any, returnValueClass: any) {

        // If we are primitive, quit
        if (typeof returnValueClass == "string") {
            return returnValue;
        } else {

            if (Array.isArray(returnValue)) {

                let newArray: any[] = [];
                returnValue.forEach((entry) => {
                    newArray.push(this._processReturnValue(entry, returnValueClass));
                });

                return newArray;

            } else {

                var newObject = new returnValueClass();
                newObject.__setData(returnValue);
                return newObject;

            }

        }


    }


    // Process the payload getting data
    private _processPayload(payload: any): any {

        if (Array.isArray(payload)) {
            let newPayload: any[] = [];
            payload.forEach(entry => {
                newPayload.push(this._processPayload(entry));
            });
            return newPayload;
        } else if (payload instanceof SerialisableObject) {
            return payload.__getData();
        } else {
            return payload;
        }
    }
}
