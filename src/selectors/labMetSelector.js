
//just function that uses and filters redux data when called from mapStateToProps in component
const labMetSelector = (labMet, filter) => {

    //goes through lab tests object and check if each passes through filtering conditions
    return labMet.filter((item) => {
       
        // ALPHABET //// boolean if test name starts with selected letter or with number or if alphabet filter is not selected
        const byAlphabet = item.name.charAt(0) === filter.alphabet || (!isNaN(item.name.charAt(0)) && filter.alphabet === '0-9') || filter.alphabet === '';

        //CATEGORY ///// boolean if test is in selected category or if no category is selected
        const byCategory = item.category === filter.category || filter.category === 'all';


        // PROVOZ ////// byStatim is true if filter.statim is set to false (all methods are displayed) or if filter is applied and method has statCare === true (method is run in statim mode)
        const byStatim = item.statCare === filter.statim || filter.statim === false;
        const byEr = item.erCare === filter.er || filter.er === false;
        const byAdditional = (item.additionalOrder !== '' && filter.additional === true)  || filter.additional === false;

        //TEXT STRING ////// if name or synonyme contains string from input (byTextSyn is fuction beacuse we must check if syn exists)
        const byTextName = accentFold(item.name.toLowerCase()).includes(filter.text.toLowerCase());
        const byTextSyn = () => {
            if(item.syn) {
                return accentFold(item.syn.toLowerCase()).includes(accentFold(filter.text.toLowerCase()));
            } else {
                return false;
            }
        };
        const byText = byTextName || byTextSyn();


        //GROUPS //// if groups string contains filtered group from selected button
        //NESLO PROTOZE DRIVE ZADANE METODY NEMAJI GROUPS TAKZE TO NENI STRING
        const byGroup = () => {
            // if (typeof item.groups === 'string' && item.groups.length > 0) {
            //     if (item.groups === filter.groups) {
            //         return true;
            //     }   else {
            //         return false;
            //     }                     
            // } else {
            //     return true;
            // }
            if(filter.groups === '') {
                return true;
            } else {
                if(typeof item.groups === 'string' && item.groups.includes(filter.groups)) {
                    return true;
                } else {
                    return false;
                }
            }

        };



        return byCategory && byAlphabet && byText && byStatim && byEr && byAdditional && byGroup();
        // return true;
        
    }).sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else if ( a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
};

export const accentFold = (str) => {   //převede string s diakritikou na string bez
    if (!str) return '';
    const accentMap = {
        'á':'a',
        'é':'e',
        'í':'i',
        'ó':'o',
        'ú':'u',
        'ě': 'e',
        'š': 's',
        'č': 'c',
        'ř': 'r',
        'ž': 'z',
        'ý': 'y',
        'ď': 'd'
    };
    let bezDia = '';
    for (let i = 0; i < str.length; i++) {
        bezDia += accentMap[str.charAt(i)] || str.charAt(i);
    }
    return bezDia;
};

export default labMetSelector;