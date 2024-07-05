import react from "react"
function Details() {
    return (
        <div>
            <table align="center" cellpadding="10">
                <h1>Registration Form</h1>
                <tr>
                    <td>First name:</td>
                    <td><input type="text" id="name" name="name" placeholder="Enter u r First name"/></td>
                </tr>
                <tr>
                    <td>Last name:</td>
                    <td><input type="text" id="name" name="name" placeholder="Enter u r Last name"/></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="email" id="name" name="email" placeholder="Enter u r email"/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" id="name" name="psd" placeholder="Enter u r password"/></td>
                </tr>
                <tr>
                    <td>Re enter Password:</td>
                    <td><input type="password" id="name" name="psd" placeholder="Re Enter u r password"/></td>
                </tr>
                <tr>
                    <td>Date of birth:</td>
                    <td><input type="date" id="DOB" name="name"/></td>
                </tr>
                <tr>
                    <td>Mobile Number:</td>
                    <td><input type="number" id="name" name="MNUM" placeholder="Enter u r mobilenumber"/></td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td><input type="radio" name="male"/>male
                        <input type="radio" name="male"/>female
                            <input type="radio" name="male"/>other</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td><textarea rows="6" cols="25" placeholder="enter u r address"></textarea></td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td><input type="text" id="name" name="state" placeholder="Enter u r state"/></td>
                        </tr>
                        <td align="center" colspan="2">
                            <button type="submit" >submit</button>
                            <button type="reset" >Reset</button>
                                
                                </td>
                            </table>
                        </div>
     )
}
export default Details;