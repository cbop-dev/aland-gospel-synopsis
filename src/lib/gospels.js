export const gospels = Object.freeze({
    names:{
        MATTHEW: "Matthew",
        MARK: "Mark",
        LUKE: "Luke",
        JOHN: "John",
    },

    abbreviations:{
        MATTHEW: "Matt",
        MARK: "Mark",
        LUKE: "Luke",
        JOHN: "John",
    },

    nameAbbrevDict:{
        "Matthew":"Matt",
        "Mark": "Mark",
        "Luke": "Luke",
        "John": "John"
    },
    /**
     * 
     * @param {string} gospelEnumName 
     * @returns true if gospelEnumName exactly matches one of the 'gospels.names' property values. 
     */
    isValid(gospelEnumName){
        const retVal = Object.values(this.names).includes(gospelEnumName);
        //mylog("isValid('"+gospelEnum+"')="+retVal, true);
        return retVal;
    }
}); 

export default{
    gospels
}