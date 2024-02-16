// Source : https://www.codewars.com/kata/514a024011ea4fb54200004b
// Author : Frank Faustino
// Date   : 2024-02-16
// Tags   : regex

function domainName(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)
}

// (?:...)? non-capturing group - groups together matched text to apply a quantifier (? in this case) but doesn't capture
// ([^\.]+) capturing group - matching one or more characters that aren't dots.
//  - will match first segment of a domain name up until the dot (i.e, "example.com", would capture "example")

module.exports = domainName

