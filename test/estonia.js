var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Estonia VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('EE100007796')).to.be.true;
        expect(jsvat.checkVAT('EE100014404')).to.be.true;
        expect(jsvat.checkVAT('EE100037342')).to.be.true;
        expect(jsvat.checkVAT('EE100050879')).to.be.true;
        expect(jsvat.checkVAT('EE100050989')).to.be.true;
        expect(jsvat.checkVAT('EE100054752')).to.be.true;
        expect(jsvat.checkVAT('EE100067066')).to.be.true;
        expect(jsvat.checkVAT('EE100183238')).to.be.true;
        expect(jsvat.checkVAT('EE100196403')).to.be.true;
        expect(jsvat.checkVAT('EE100207415')).to.be.true;
        expect(jsvat.checkVAT('EE100210457')).to.be.true;
        expect(jsvat.checkVAT('EE100229859')).to.be.true;
        expect(jsvat.checkVAT('EE100235791')).to.be.true;
        expect(jsvat.checkVAT('EE100338245')).to.be.true;
        expect(jsvat.checkVAT('EE100396999')).to.be.true;
        expect(jsvat.checkVAT('EE100402498')).to.be.true;
        expect(jsvat.checkVAT('EE100434084')).to.be.true;
        expect(jsvat.checkVAT('EE100461536')).to.be.true;
        expect(jsvat.checkVAT('EE100619906')).to.be.true;
        expect(jsvat.checkVAT('EE100645682')).to.be.true;
        expect(jsvat.checkVAT('EE100660230')).to.be.true;
        expect(jsvat.checkVAT('EE100672736')).to.be.true;
        expect(jsvat.checkVAT('EE100691542')).to.be.true;
        expect(jsvat.checkVAT('EE100692266')).to.be.true;
        expect(jsvat.checkVAT('EE100069349')).to.be.true;
        expect(jsvat.checkVAT('EE100715473')).to.be.true;
        expect(jsvat.checkVAT('EE100721878')).to.be.true;
        expect(jsvat.checkVAT('EE100818723')).to.be.true;
        expect(jsvat.checkVAT('EE100900754')).to.be.true;
        expect(jsvat.checkVAT('EE100945641')).to.be.true;
        expect(jsvat.checkVAT('EE101007643')).to.be.true;
        expect(jsvat.checkVAT('EE101039763')).to.be.true;
        expect(jsvat.checkVAT('EE101193861')).to.be.true;
        expect(jsvat.checkVAT('EE101246514')).to.be.true;
        expect(jsvat.checkVAT('EE101246938')).to.be.true;
        expect(jsvat.checkVAT('EE101259750')).to.be.true;
        expect(jsvat.checkVAT('EE101261706')).to.be.true;
        expect(jsvat.checkVAT('EE101274434')).to.be.true;
        expect(jsvat.checkVAT('EE101282772')).to.be.true;
        expect(jsvat.checkVAT('EE101321015')).to.be.true;
        expect(jsvat.checkVAT('EE101331966')).to.be.true;
        expect(jsvat.checkVAT('EE101344209')).to.be.true;
        expect(jsvat.checkVAT('EE101367804')).to.be.true;
        expect(jsvat.checkVAT('EE101378466')).to.be.true;
        expect(jsvat.checkVAT('EE101482239')).to.be.true;
        expect(jsvat.checkVAT('EE101560290')).to.be.true;
        expect(jsvat.checkVAT('EE101589064')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('EE000207418')).to.be.false;
        expect(jsvat.checkVAT('EE110207418')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('EE 101 321015')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('EE-1013-21015')).to.be.true;
    });
});