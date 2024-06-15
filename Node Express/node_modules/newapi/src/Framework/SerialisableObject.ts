/**
 * Base framework class which all objects extend.  This supports passing a standard object containing
 * properties which are converted to internal properties on a class instance
 */
export default class SerialisableObject {

    /**
     * Single method
     *
     * @param data
     * @private
     */
    public __setData(data: any) {
        const properties = Object.keys(data);

        const container: any = this;

        // Loop through each property
        properties.forEach(function (key) {
            container["_" + key] = data[key];
        });

    }


    /**
     * Get data from the object (converting _ to regular props)
     *
     * @private
     */
    public __getData(): any {

        const container: any = this;

        const properties = Object.keys(container);
        const data: any = {};

        // Loop through each property
        properties.forEach((key) => {
            data[key.substr(1)] = container[key];
        });


        return data;
    }


}
