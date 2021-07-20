import { europe } from '../index';
import { codes, invalid, name, valid } from './countries_vat_lists/europe.vat';
import { addCharsToString, checkInvalidVat, checkValidVat } from './utils';

describe('Europe', () => {
  it('should return "true" result for valid VATs', () => {
    valid.forEach((vat) => checkValidVat(vat, [europe], codes, name));
  });

  // we can't check this for EU vat's cause isValid always true if regxp is true
  // it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
  //   validOnlyByFormat.forEach(vat => checkOnlyValidFormatVat(vat, [europe], codes, name))
  // })

  it('should return "true" result for valid VATs with extra dash characters', () => {
    valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, [europe], codes, name));
  });

  it('should return "true" result for valid VATs with extra space characters', () => {
    valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, [europe], codes, name));
  });

  it('should return "false" result for invalid VATs', () => {
    invalid.forEach((vat) => checkInvalidVat(vat, [europe]));
  });
});
