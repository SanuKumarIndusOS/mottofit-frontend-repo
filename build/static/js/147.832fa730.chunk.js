(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[147],{238:function(e,a,s){"use strict";s.r(a);a.default=function(e){var a={};return e.name?e.name.length<=1?a.name="This field should contain more than one character":/^[a-zA-Z]+(\s[a-zA-Z]+)+$/gm.test(e.name)?/^[a-zA-Z]+\s[a-zA-Z]+\s?$/g.test(e.name)||(a.name=" Enter a valid name"):a.name="Enter full name":a.name="This field is required",e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(e.email)?e.email.length<8&&(a.email=" This field should contain greater then 8 charater"):a.email=" Please enter a valid email address":a.email="   This field is required",e.phoneNumber?/^[0-9]*$/i.test(e.phoneNumber)?e.phoneNumber.length<11?a.phoneNumber="Enter a valid number":e.phoneNumber.length>=12&&(a.phoneNumber=" This field exceed max length"):a.phoneNumber="Invalid Number":a.phoneNumber="   This field is required",e.password?e.password.length<=8?a.password=" Password should be more then 8 Charcters":e.password.length>12?a.password=" Password should not be more then 12 Charcters":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.password)||(a.password=" Password should be 8 characters long and contain a Capital letter, Number & Special character"):a.password="This field is required",e.cpassword?e.cpassword.length<=8?a.cpassword=" Password should be more then 8 Charcters":e.cpassword.length>12?a.cpassword=" Password should not be more then 12 Charcters":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.cpassword)?e.password!==e.cpassword&&(a.cpassword="  The passwords do not match"):a.cpassword=" Password should be 8 characters long and contain a Capital letter, Number & Special character":a.cpassword="This field is required",a}}}]);
//# sourceMappingURL=147.832fa730.chunk.js.map