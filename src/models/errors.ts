class NcellError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, NcellError.prototype);
    }
}