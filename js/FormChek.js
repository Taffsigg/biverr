// VARIABLE DECLARATIONS

var digits = "0123456789";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// whitespace characters
var whitespace = " \t\n\r";


// decimal point character differs by language and culture
var decimalPointDelimiter = "."


// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()-+ ";


// characters which are allowed in US phone numbers
var validUSPhoneChars = digits + phoneNumberDelimiters;


// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = digits + phoneNumberDelimiters + "+";


// non-digit characters which are allowed in 
// Social Security Numbers
var SSNDelimiters = "- ";



// characters which are allowed in Social Security Numbers
var validSSNChars = digits + SSNDelimiters;





// U.S. Social Security Numbers have 9 digits.
// They are formatted as 123-45-6789.
var digitsInSocialSecurityNumber = 9;



// U.S. phone numbers have 10 digits.
// They are formatted as 123 456 7890 or (123) 456-7890.
var digitsInUSPhoneNumber = 10;



// non-digit characters which are allowed in ZIP Codes
var ZIPCodeDelimiters = "-";



// our preferred delimiter for reformatting ZIP Codes
var ZIPCodeDelimeter = "-"


// characters which are allowed in Social Security Numbers
var validZIPCodeChars = digits + ZIPCodeDelimiters



// U.S. ZIP codes have 5 or 9 digits.
// They are formatted as 12345 or 12345-6789.
var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9


// non-digit characters which are allowed in credit card numbers
var creditCardDelimiters = " "


// CONSTANT STRING DECLARATIONS
// (grouped for ease of translation and localization)

// m is an abbreviation for "missing"

var mPrefix = "You did not enter a value into the "
var mSuffix = " field. This is a required field. Please enter it now."

// s is an abbreviation for "string"

var sUSLastName = "Last Name"
var sUSFirstName = "First Name"
var sWorldLastName = "Family Name"
var sWorldFirstName = "Name"
var sWorldLoginId = "Given Login ID"
var sWorldPassword = "Given Password"
var sWorldContactPerson = "Given Contact Person Name"
var sDesignation ="Given Designation"
var sTitle = "Title"
var sCompanyName = "Company Name"
var sInstituteName = "Institute Name"
var sUSAddress = "Street Address"
var sWorldAddress = "Address"
var sCity = "City"
var sStateCode = "State Code"
var sWorldState = "State, Province, or Prefecture"
var sCountry = "Country"
var sZIPCode = "ZIP Code"
var sWorldPostalCode = "Postal Code"
var sPhone = "Phone Number"
var sFax = "Fax Number"
var sDateOfBirth = "Date of Birth"
var sExpirationDate = "Expiration Date"
var sEmail = "Email"
var sSSN = "Social Security Number"
var sCreditCardNumber = "Credit Card Number"
var sOtherInfo = "Other Information"
var sFuntionalInfo = "Funtional Area of Interest"
var sPositionVacant = "Position Vacant"
var sBrifeofJob = "Brief Description of job"
var sEssSkil = "Essential Skill"
var sResPone = "Responsibility"
var sPostedby = "Posted By"
var sLoginid = "User Name"
var sPassword = "Password"
var sKeywd = "Key Word for Skill Set"
var sCompanyName = "Company Name"





// i is an abbreviation for "invalid"

var iStateCode = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please reenter it now."
var iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043). Please reenter it now."
var iUSPhone = "This field must be a 10 digit U.S. phone number (like 415 555 1212). Please reenter it now."
var iWorldPhone = "This field must be a valid international phone number. Please reenter it now."
var iSSN = "This field must be a 9 digit U.S. social security number (like 123 45 6789). Please reenter it now."
var iEmail = "This field must be a valid email address (user@host.domain). Please reenter it now."
var iCreditCardPrefix = "This is not a valid "
var iCreditCardSuffix = " credit card number. (Click the link on this form to see a list of sample numbers.) Please reenter it now."
var iDay = "This field must be a day number between 1 and 31.  Please reenter it now."
var iMonth = "This field must be a month number between 1 and 12.  Please reenter it now."
var iYear = "This field must be a 4 digit year number.  Please reenter it now."
var iDatePrefix = "The Day, Month, and Year for "
var iDateSuffix = " do not form a valid date.  Please reenter them now."



// p is an abbreviation for "prompt"

var pEntryPrompt = "Please enter a "
var pStateCode = "2 character code (like CA)."
var pZIPCode = "5 or 9 digit U.S. ZIP Code (like 94043)."
var pUSPhone = "10 digit U.S. phone number (like 415 555 1212)."
var pWorldPhone = "international phone number."
var pSSN = "9 digit U.S. social security number (like 123 45 6789)."
var pEmail = "valid email address (like foo@bar.com)."
var pCreditCard = "valid credit card number."
var pDay = "day number between 1 and 31."
var pMonth = "month number between 1 and 12."
var pYear = "2 or 4 digit year number."


// Global variable defaultEmptyOK defines default return value 
// for many functions when they are passed the empty string. 
// By default, they will return defaultEmptyOK.
//
// defaultEmptyOK is false, which means that by default, 
// these functions will do "strict" validation.  Function
// isInteger, for example, will only return true if it is
// passed a string containing an integer; if it is passed
// the empty string, it will return false.
//
// You can change this default behavior globally (for all 
// functions which use defaultEmptyOK) by changing the value
// of defaultEmptyOK.
//
// Most of these functions have an optional argument emptyOK
// which allows you to override the default behavior for 
// the duration of a function call.
//
// This functionality is useful because it is possible to
// say "if the user puts anything in this field, it must
// be an integer (or a phone number, or a string, etc.), 
// but it's OK to leave the field empty too."
// This is the case for fields which are optional but which
// must have a certain kind of content if filled in.

var defaultEmptyOK = false




// Attempting to make this library run on Navigator 2.0,
// so I'm supplying this array creation routine as per
// JavaScript 1.0 documentation.  If you're using 
// Navigator 3.0 or later, you don't need to do this;
// you can use the Array constructor instead.

function makeArray(n) {
//*** BUG: If I put this line in, I get two error messages:
//(1) Window.length can't be set by assignment
//(2) daysInMonth has no property indexed by 4
//If I leave it out, the code works fine.
//   this.length = n;
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   } 
   return this
}



var daysInMonth = makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   // must programmatically check this
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;




// Valid U.S. Postal Codes for states, territories, armed forces, etc.
// See http://www.usps.gov/ncsc/lookups/abbr_state.txt.

var USStateCodeDelimiter = "|";
var USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"




// Check whether string s is empty.

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}



// Returns true if string s is empty or 
// whitespace characters only.

function isWhitespace (s)

{   var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }

    // All characters are whitespace.
    return true;
}



// Removes all characters which appear in string bag from string s.

function stripCharsInBag (s, bag)

{   var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}



// Removes all characters which do NOT appear in string bag 
// from string s.

function stripCharsNotInBag (s, bag)

{   var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}



// Removes all whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

function stripWhitespace (s)

{   return stripCharsInBag (s, whitespace)
}




// WORKAROUND FUNCTION FOR NAVIGATOR 2.0.2 COMPATIBILITY.
//
// The below function *should* be unnecessary.  In general,
// avoid using it.  Use the standard method indexOf instead.
//
// However, because of an apparent bug in indexOf on 
// Navigator 2.0.2, the below loop does not work as the
// body of stripInitialWhitespace:
//
// while ((i < s.length) && (whitespace.indexOf(s.charAt(i)) != -1))
//   i++;
//
// ... so we provide this workaround function charInString
// instead.
//
// charInString (CHARACTER c, STRING s)
//
// Returns true if single character c (actually a string)
// is contained within string s.

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}



// Removes initial (leading) whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

function stripInitialWhitespace (s)

{   var i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    
    return s.substring (i, s.length);
}







// Returns true if character c is an English letter 
// (A .. Z, a..z).
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isLetter (c)
{   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) )
}



// Returns true if character c is a digit 
// (0 .. 9).

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}



// Returns true if character c is a letter or digit.

function isLetterOrDigit (c)
{   return (isLetter(c) || isDigit(c))
}



// isInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if all characters in string s are numbers.
//
// Accepts non-signed integers only. Does not accept floating 
// point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// By default, returns defaultEmptyOK if s is empty.
// There is an optional second argument called emptyOK.
// emptyOK is used to override for a single function call
//      the default behavior which is specified globally by
//      defaultEmptyOK.
// If emptyOK is false (or any value other than true), 
//      the function will return false if s is empty.
// If emptyOK is true, the function will return true if s is empty.
//
// EXAMPLE FUNCTION CALL:     RESULT:
// isInteger ("5")            true 
// isInteger ("")             defaultEmptyOK
// isInteger ("-5")           false
// isInteger ("", true)       true
// isInteger ("", false)      false
// isInteger ("5", false)     true

function isInteger (s)

{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}







// isSignedInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if all characters are numbers; 
// first character is allowed to be + or - as well.
//
// Does not accept floating point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// EXAMPLE FUNCTION CALL:          RESULT:
// isSignedInteger ("5")           true 
// isSignedInteger ("")            defaultEmptyOK
// isSignedInteger ("-5")          true
// isSignedInteger ("+5")          true
// isSignedInteger ("", false)     false
// isSignedInteger ("", true)      true

function isSignedInteger (s)

{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}




// isPositiveInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer > 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a positive, not negative, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}






// isNonnegativeInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer >= 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number >= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}






// isNegativeInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer < 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a negative, not positive, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}






// isNonpositiveInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer <= 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number <= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}



// isFloat (STRING s [, BOOLEAN emptyOK])
// 
// True if string s is an unsigned floating point (real) number. 
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isInteger, then call isFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isFloat (s)

{   var i;
    var seenDecimalPoint = false;

    if (isEmpty(s)) 
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    if (s == decimalPointDelimiter) return false;

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}







// isSignedFloat (STRING s [, BOOLEAN emptyOK])
// 
// True if string s is a signed or unsigned floating point 
// (real) number. First character is allowed to be + or -.
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isSignedInteger, then call isSignedFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isSignedFloat (s)

{   if (isEmpty(s)) 
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedFloat.arguments.length > 1)
            secondArg = isSignedFloat.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isFloat(s.substring(startPos, s.length), secondArg))
    }
}




// isAlphabetic (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is English letters 
// (A .. Z, a..z) only.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isAlphabetic (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphabetic character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is letter.
        var c = s.charAt(i);

        if (!isLetter(c))
        return false;
    }

    // All characters are letters.
    return true;
}




// isAlphanumeric (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is English letters 
// (A .. Z, a..z) and numbers only.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isAlphanumeric (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphanumeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number or letter.
        var c = s.charAt(i);

        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    // All characters are numbers or letters.
    return true;
}




// reformat (TARGETSTRING, STRING, INTEGER, STRING, INTEGER ... )       
//
// Handy function for arbitrarily inserting formatting characters
// or delimiters of various kinds within TARGETSTRING.
//
// reformat takes one named argument, a string s, and any number
// of other arguments.  The other arguments must be integers or
// strings.  These other arguments specify how string s is to be
// reformatted and how and where other strings are to be inserted
// into it.
//
// reformat processes the other arguments in order one by one.
// * If the argument is an integer, reformat appends that number 
//   of sequential characters from s to the resultString.
// * If the argument is a string, reformat appends the string
//   to the resultString.
//
// NOTE: The first argument after TARGETSTRING must be a string.
// (It can be empty.)  The second argument must be an integer.
// Thereafter, integers and strings must alternate.  This is to
// provide backward compatibility to Navigator 2.0.2 JavaScript
// by avoiding use of the typeof operator.
//
// It is the caller's responsibility to make sure that we do not
// try to copy more characters from s than s.length.
//
// EXAMPLES:
//
// * To reformat a 10-digit U.S. phone number from "1234567890"
//   to "(123) 456-7890" make this function call:
//   reformat("1234567890", "(", 3, ") ", 3, "-", 4)
//
// * To reformat a 9-digit U.S. Social Security number from
//   "123456789" to "123-45-6789" make this function call:
//   reformat("123456789", "", 3, "-", 2, "-", 4)
//
// HINT:
//
// If you have a string which is already delimited in one way
// (example: a phone number delimited with spaces as "123 456 7890")
// and you want to delimit it in another way using function reformat,
// call function stripCharsNotInBag to remove the unwanted 
// characters, THEN call function reformat to delimit as desired.
//
// EXAMPLE:
//
// reformat (stripCharsNotInBag ("123 456 7890", digits),
//           "(", 3, ") ", 3, "-", 4)

function reformat (s)

{   var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}





// isSSN (STRING s [, BOOLEAN emptyOK])
// 
// isSSN returns true if string s is a valid U.S. Social
// Security Number.  Must be 9 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this function.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isSSN (s)
{   if (isEmpty(s)) 
       if (isSSN.arguments.length == 1) return defaultEmptyOK;
       else return (isSSN.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInSocialSecurityNumber)
}




// isUSPhoneNumber (STRING s [, BOOLEAN emptyOK])
// 
// isUSPhoneNumber returns true if string s is a valid U.S. Phone
// Number.  Must be 10 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this function.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isUSPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}




// isInternationalPhoneNumber (STRING s [, BOOLEAN emptyOK])
// 
// isInternationalPhoneNumber returns true if string s is a valid 
// international phone number.  Must be digits only; any length OK.
// May be prefixed by + character.
//
// NOTE: A phone number of all zeros would not be accepted.
// I don't think that is a valid phone number anyway.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this function.  You may leave in 
// leading + character if you wish.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isInternationalPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isInternationalPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isInternationalPhoneNumber.arguments[1] == true);
    return (isPositiveInteger(s))
}




// isZIPCode (STRING s [, BOOLEAN emptyOK])
// 
// isZIPCode returns true if string s is a valid 
// U.S. ZIP code.  Must be 5 or 9 digits only.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this function.  
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isZIPCode (s)
{  if (isEmpty(s)) 
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   return (isInteger(s) && 
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))
}



// isStateCode (STRING s [, BOOLEAN emptyOK])
// 
// Return true if s is a valid U.S. Postal Code 
// (abbreviation for state).
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isStateCode(s)
{   if (isEmpty(s)) 
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}




// isEmail (STRING s [, BOOLEAN emptyOK])
// 
// Email address must be of form a@b.c -- in other words:
// * there must be at least one character before the @
// * there must be at least one character before and after the .
// * the characters @ and . are both required
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isEmail (s)
{   if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
   
    // is s whitespace?
    if (isWhitespace(s)) return false;
    
    // there must be >= 1 character before @, so we
    // start looking at character position 1 
    // (i.e. second character)
    var i = 1;
    var sLength = s.length;

    // look for @
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;

    // look for .
    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    // there must be at least one character after the .
    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
    else return true;
}

// isYear (STRING s [, BOOLEAN emptyOK])
// 
// isYear returns true if string s is a valid 
// Year number.  Must be 2 or 4 digits only.
// 
// For Year 2000 compliance, you are advised
// to use 4-digit year numbers everywhere.
//
// And yes, this function is not Year 10000 compliant, but 
// because I am giving you 8003 years of advance notice,
// I don't feel very guilty about this ...
//
// For B.C. compliance, write your own function. ;->
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isYear (s)
{   if (isEmpty(s)) 
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return (s.length == 4);
}



// isIntegerInRange (STRING s, INTEGER a, INTEGER b [, BOOLEAN emptyOK])
// 
// isIntegerInRange returns true if string s is an integer 
// within the range of integer arguments a and b, inclusive.
// 
// For explanation of optional argument emptyOK,
// see comments of function isInteger.


function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    // Catch non-integer strings to avoid creating a NaN below,
    // which isn't available on JavaScript 1.0 for Windows.
    if (!isInteger(s, false)) return false;

    // Now, explicitly change the type to integer via parseInt
    // so that the comparison code below will work both on 
    // JavaScript 1.2 (which typechecks in equality comparisons)
    // and JavaScript 1.1 and before (which doesn't).
    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}



// isMonth (STRING s [, BOOLEAN emptyOK])
// 
// isMonth returns true if string s is a valid 
// month number between 1 and 12.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isMonth (s)
{   if (isEmpty(s)) 
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}



// isDay (STRING s [, BOOLEAN emptyOK])
// 
// isDay returns true if string s is a valid 
// day number between 1 and 31.
// 
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isDay (s)
{   if (isEmpty(s)) 
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);   
    return isIntegerInRange (s, 1, 31);
}



// daysInFebruary (INTEGER year)
// 
// Given integer argument year,
// returns number of days in February of that year.

function daysInFebruary (year)
{   // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}



// isDate (STRING year, STRING month, STRING day)
//
// isDate returns true if string arguments year, month, and day 
// form a valid date.
// 

function isDate (year, month, day)
{   // catch invalid years (not 2- or 4-digit) and invalid months and days.
    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;

    // Explicitly change type to integer to make code work in both
    // JavaScript 1.1 and JavaScript 1.2.
    var intYear = parseInt(year);
    var intMonth = parseInt(month);
    var intDay = parseInt(day);

    // catch invalid days, except for February
    if (intDay > daysInMonth[intMonth]) return false; 

    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;

    return true;
}




/* FUNCTIONS TO NOTIFY USER OF INPUT REQUIREMENTS OR MISTAKES. */


// Display prompt string s in status bar.

function prompt (s)
{   window.status = s
}



// Display data entry prompt string s in status bar.

function promptEntry (s)
{   window.status = pEntryPrompt + s
}




// Notify user that required field theField is empty.
// String s describes expected contents of theField.value.
// Put focus in theField and return false.

function warnEmpty (theField, s)
{   
    alert(mPrefix + s + mSuffix)
    theField.focus()
    return false
}



// Notify user that contents of field theField are invalid.
// String s describes expected contents of theField.value.
// Put select theField, pu focus in it, and return false.

function warnInvalid (theField, s)
{   
    theField.select()
    alert(s)
    theField.focus()
    return false
}




/* FUNCTIONS TO INTERACTIVELY CHECK VARIOUS FIELDS. */

// checkString (TEXTFIELD theField, STRING s, [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is not all whitespace.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkString (theField, s, emptyOK)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkString.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (isWhitespace(theField.value)) 
       return warnEmpty (theField, s);
       
    else return true;
}


// checkStateCode (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid U.S. state code.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkStateCode (theField, emptyOK)
{   if (checkStateCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  theField.value = theField.value.toUpperCase();
       if (!isStateCode(theField.value, false)) 
          return warnInvalid (theField, iStateCode);
       else return true;
    }
}



// takes ZIPString, a string of 5 or 9 digits;
// if 9 digits, inserts separator hyphen

function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 5, "-", 4));
}




// checkZIPCode (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid ZIP code.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkZIPCode (theField, emptyOK)
{   if (checkZIPCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    { var normalizedZIP = stripCharsInBag(theField.value, ZIPCodeDelimiters)
      if (!isZIPCode(normalizedZIP, false)) 
         return warnInvalid (theField, iZIPCode);
      else 
      {  // if you don't want to insert a hyphen, comment next line out
         theField.value = reformatZIPCode(normalizedZIP)
         return true;
      }
    }
}



// takes USPhone, a string of 10 digits
// and reformats as (123) 456-789

function reformatUSPhone (USPhone)
{   return (reformat (USPhone, "(", 3, ") ", 3, "-", 4))
}



// checkUSPhone (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid US Phone.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkUSPhone (theField, emptyOK)
{   if (checkUSPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedPhone = stripCharsInBag(theField.value, phoneNumberDelimiters)
       if (!isUSPhoneNumber(normalizedPhone, false)) 
          return warnInvalid (theField, iUSPhone);
       else 
       {  // if you don't want to reformat as (123) 456-789, comment next line out
          theField.value = reformatUSPhone(normalizedPhone)
          return true;
       }
    }
}


function checkMonthsExp (theField, emptyOK)
{   if (checkMonthsExp.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  if (!isInteger(theField.value, false)) 
          return warnInvalid (theField, "You must enter a numeric value for months of experience.");
       else
		  return true;
    }
}




// checkInternationalPhone (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid International Phone.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkInternationalPhone (theField, emptyOK)
{   if (checkInternationalPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else 
		var thisPhone = (stripCharsInBag(theField.value,phoneNumberDelimiters));
    {  if (!isInternationalPhoneNumber(thisPhone, false))
          return warnInvalid (theField, iWorldPhone);
       else return true;
    }
}



// checkEmail (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid Email.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkEmail (theField, emptyOK)
{   if (checkEmail.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isEmail(theField.value, false)) 
       return warnInvalid (theField, iEmail);
    else return true;
}



// takes SSN, a string of 9 digits
// and reformats as 123-45-6789

function reformatSSN (SSN)
{   return (reformat (SSN, "", 3, "-", 2, "-", 4))
}


// Check that string theField.value is a valid SSN.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkSSN (theField, emptyOK)
{   if (checkSSN.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedSSN = stripCharsInBag(theField.value, SSNDelimiters)
       if (!isSSN(normalizedSSN, false)) 
          return warnInvalid (theField, iSSN);
       else 
       {  // if you don't want to reformats as 123-456-7890, comment next line out
          theField.value = reformatSSN(normalizedSSN)
          return true;
       }
    }
}




// Check that string theField.value is a valid Year.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkYear (theField, emptyOK)
{   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isYear(theField.value, false)) 
       return warnInvalid (theField, iYear);
    else return true;
}


// Check that string theField.value is a valid Month.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkMonth (theField, emptyOK)
{   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isMonth(theField.value, false)) 
       return warnInvalid (theField, iMonth);
    else return true;
}


// Check that string theField.value is a valid Day.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkDay (theField, emptyOK)
{   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isDay(theField.value, false)) 
       return warnInvalid (theField, iDay);
    else return true;
}
function CheckExt(file_name)
{
	//var filename = document.getElementById(name).value;
	//formname is name specified in <form> and formfield is name in <input type =file> tag
	filename=file_name;
	//alert(filename);
	var exploded=filename.split(".");
	var length = exploded.length;
	var ext = exploded[length-1];
	//alert(find1);
	if(ext!='jpg' && ext!='jpeg' && ext!='gif'&& ext!='tif'&& ext!='bmp' && ext!='JPEG' && ext!='JPG' && ext!='GIF' && ext!='TIF'&& ext!='BMP'&& ext!='swf')
	{
		alert("Please Insert a JPEG ,GIF, BMP, SWF or TIF Image.");
		return false;
	}
	else
	{
		return true;
	}
}
function CheckExtMovie(file_name)
{
	//var filename = document.getElementById(name).value;
	//formname is name specified in <form> and formfield is name in <input type =file> tag
	filename=file_name;
	//alert(filename);
	var exploded=filename.split(".");
	var length = exploded.length;
	var ext = exploded[length-1];
	//alert(find1);
	if(ext!='avi' && ext!='AVI' && ext!='wmv'&& ext!='WMV')
	{
		alert("Please Insert a AVI or WMV format.");
		return false;
	}
	else
	{
		return true;
	}
}




// checkDate (yearField, monthField, dayField, STRING labelString [, OKtoOmitDay==false])
//
// Check that yearField.value, monthField.value, and dayField.value 
// form a valid date.
//
// If they don't, labelString (the name of the date, like "Birth Date")
// is displayed to tell the user which date field is invalid.
//
// If it is OK for the day field to be empty, set optional argument
// OKtoOmitDay to true.  It defaults to false.

function checkDate (yearField, monthField, dayField, labelString, OKtoOmitDay)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkDate.arguments.length == 4) OKtoOmitDay = false;
    if (!isYear(yearField.value)) return warnInvalid (yearField, iYear);
    if (!isMonth(monthField.value)) return warnInvalid (monthField, iMonth);
    if ( (OKtoOmitDay == true) && isEmpty(dayField.value) ) return true;
    else if (!isDay(dayField.value)) 
       return warnInvalid (dayField, iDay);
    if (isDate (yearField.value, monthField.value, dayField.value))
       return true;
    else {
	    dayField.focus();
		alert (iDatePrefix + labelString + iDateSuffix)
		return false
		}
}



// Get checked value from radio button.

function getRadioButtonValue (radio)
{   for (var i = 0; i < radio.length; i++)
    {   if (radio[i].checked) { break }
    }
    return radio[i].value
}


