(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[127],{230:function(e,a,s){"use strict";s.r(a);a.default=function(e){var a={};return e.firstName?e.firstName.length<=1?a.firstName="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.firstName)||(a.firstName="  This field accepts only alphabets"):a.firstName="This field is required",e.lastName?e.lastName.length<=1?a.lastName="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.lastName)||(a.lastName="This field accepts only alphabets"):a.lastName="This field is required",e.location?e.location.length<=1?a.location="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.location)||(a.location="This field accepts only alphabets"):a.location="This field is required",e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(e.email)?e.email.length<8&&(a.email=" This field should contain greater then 8 character"):a.email=" Please enter a valid email address":a.email="This field is required",e.phoneNo?/^[0-9]*$/i.test(e.phoneNo)?e.phoneNo.length<10?a.phoneNo="Enter a valid number":e.phoneNo.length>=11&&(a.phoneNo=" This field exceed max length"):a.phoneNo="Invalid Number":a.phoneNo="This field is required",e.password?e.password.length<6?a.password=" Password should be more then 6 Charcters":e.password.length>16?a.password=" This field exceed max length":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.password)||(a.password=" Password should contain atleast one one captial letter, number and special character"):a.password="This field is required",e.cpassword?e.cpassword.length<6?a.cpassword=" Password should be more then 6 Charcters":e.cpassword.length>16?a.cpassword=" This field exceed max length":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.cpassword)?e.password!==e.cpassword&&(a.cpassword="  The passwords do not match"):a.cpassword=" Password should contain atleast one one captial letter, number and special character":a.cpassword="This field is required",a}}}]);
//# sourceMappingURL=127.84745f36.chunk.js.map