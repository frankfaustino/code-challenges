# Decimal Time Conversion

<b>Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.</b>

<ul><li>One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.</li>
<li>Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.</li>
<li>The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.</li>
<li><code>ToIndustrial(time)</code> should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a float that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!</li>
<li><code>ToNormal(time)</code></code>should accept a float representing decimal time in hours.
Return a string that represents standard time in the format "h:mm".</li>
<li>There will be no seconds in the tests. We'll neglect them for the purpose of this kata.</li>
</ul>


<b>Write three functions, two that convert standard time to decimal time with different input types and one that converts decimal time to standard time.</b>

<ul><li>One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.</li>
<li>Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.</li>
<li>The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.</li>
<li><code>to_industrial(time)</code>  should accept the time in minutes as an integer, <code>string_to_industrial(time)</code> should accept a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a float that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
</li>
<li><code>to_normal(time)</code> should accept a float representing decimal time in hours.
Return a string that represents standard time in the format "h:mm".</li>
<li>There will be no seconds in the tests. We'll neglect them for the purpose of this kata.</li>
</ul>



<ul><li>One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.</li>
<li>Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.</li>
<li>The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.</li>
<li><code>to_industrial(time)</code> should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a float that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
</li>
<li><code>to_normal(time)</code> should accept a float representing decimal time in hours.
Return a string that represents standard time in the format "h:mm".</li>
<li>There will be no seconds in the tests. We'll neglect them for the purpose of this kata.</li>
</ul>


<ul><li>One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.</li>
<li>Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.</li>
<li>The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.</li>
<li><code>toIndustrial(time)</code> should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more.
Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
</li>
<li><code>toNormal(time)</code> should accept a double representing decimal time in hours.
Return a string that represents standard time in the format "h:mm".</li>
<li>There will be no seconds in the tests. We'll neglect them for the purpose of this kata.</li>
</ul>

<br/>
<details><summary>Flavor text (click to expand)</summary>
Calculations with time units can be confusing, because we are used to calculating in the decimal system in every day use. An hour, however, consists of sixty minutes, which in turn consist of sixty seconds each.

When dealing with multiple entries of measured time - for example, in a working time recording - it can get hard to correctly sum up the total. A seemingly natural algorithm is to add up hours and minutes separately, then divmod the minutes with 60 to get additional complete hours and remaining minutes.

In Germany, some companies use decimal time (in German: "Industriezeit" or "Industriestunden") to keep track of working hours, which makes it a lot easier to calculate multiple entries.</details>
<br/>

<h1>Examples:</h1>
<code>toIndustrial(1) => 0.02</code><br/>
<code>toIndustrial("1:45") => 1.75</code><br/>
<code>toNormal(0.33) => "0:20"</code><br/>


<h1>Examples:</h1>
<code>to_industrial(1) => 0.02</code><br/>
<code>to_industrial("1:45") => 1.75</code><br/>
<code>to_normal(0.33) => "0:20"</code><br/>


<h1>Examples:</h1>
<code>to_industrial(1) => 0.02</code><br/>
<code>string_to_industrial("1:45") => 1.75</code><br/>
<code>to_normal(0.33) => "0:20"</code><br/>

<i>Please leave a rating if you liked this kata!</i>
