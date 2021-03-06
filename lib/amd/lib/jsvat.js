define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeResult(vat, isValid, country) {
        return {
            value: vat || undefined,
            isValid: Boolean(isValid),
            isValidFormat: country ? isVatValidToRegexp(vat, country.rules.regex).isValid : false,
            isSupportedCountry: Boolean(country),
            country: !country
                ? undefined
                : {
                    name: country.name,
                    isoCode: {
                        short: country.codes[0],
                        long: country.codes[1],
                        numeric: country.codes[2]
                    }
                }
        };
    }
    function removeExtraChars(vat = '') {
        return vat
            .toString()
            .toUpperCase()
            .replace(/(\s|-|\.)+/g, '');
    }
    function getCountryCodes(country) {
        return [...country.codes, country.name === 'Greece' ? 'EL' : undefined].filter(Boolean);
    }
    function getCountry(vat, countriesList) {
        for (const country of countriesList) {
            if (startsWithCode(vat, country))
                return { ...country };
        }
        return undefined;
    }
    function startsWithCode(vat, country) {
        const countryCodes = getCountryCodes(country);
        return countryCodes.filter((code) => vat.startsWith(code)).length > 0;
    }
    function isVatValidToRegexp(vat, regexArr) {
        for (const regex of regexArr) {
            const isValid = regex.test(vat);
            if (isValid)
                return { isValid: true, regex: regex };
        }
        return { isValid: false, regex: undefined };
    }
    function isVatValid(vat, country) {
        const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
        if (!regexpValidRes.isValid || !regexpValidRes.regex)
            return false;
        const regexResult = regexpValidRes.regex.exec(vat);
        if (!regexResult)
            return false;
        return country.calcFn(regexResult[2]);
    }
    function checkVAT(vat, countriesList = []) {
        if (!vat)
            return makeResult(vat, false);
        const cleanVAT = removeExtraChars(vat);
        const country = getCountry(cleanVAT, countriesList);
        const isValid = country ? isVatValid(cleanVAT, country) : false;
        return makeResult(cleanVAT, isValid, country);
    }
    exports.checkVAT = checkVAT;
});
