const { openBrowser, goto, click, into, write, below, checkBox, textBox, clear, closeBrowser } = require('taiko');
const assert = require("assert");
'use strict';




step("enter valid register", async function() {

    await write("Rahmi",into('Masukkan Nama Lengkap'));
    await write("Test1122@gmail.com",into('Masukkan Email'));
    await write("Test1122@gmail.com",into('Ulangi Email di atas'));
    await write("12345678",into('Masukkan Password'));
    await write("12345678",into('Ulangi Password di atas'));
    await checkBox({id:'remember-me'}).check();

    });


/*step("Enter valid Nama: <nama>, Masukkan Email: <email>, Ulangi Email: <konfirm_email>, Masukkan Password: <password>, Ulangi Password: <konfirm_pass>", async function(nama, email, konfirm_email, password, konfirm_pass) {

    await write("Rahmi",into('Masukkan Nama Lengkap'));
    await write("Test1122@gmail.com",into('Masukkan Email'));
    await write("Test1122@gmail.com",into('Ulangi Email di atas'));
    await write("12345678",into('Masukkan Password'));
    await write("12345678",into('Ulangi Password di atas'));
    await checkBox({id:'remember-me'},below('text')).check()
 



});
*/
/*step("click(<checkbox>)", async (checkBox) => {
    await click(checkBox(({id:'remember-me'}))).check();
    });
    
*/

   



step("Enter invalid register", async function() {
    await write("Rahmi",into('Masukkan Nama Lengkap'));
    await write("Test1122@gmail.com",into('Masukkan Email'));
    await write("Test1122@gmail.com",into('Ulangi Email di atas'));
    await write("12345678",into('Masukkan Password'));
    await write("12345678",into('Ulangi Password di atas'));
    await checkBox({id:'remember-me'}).uncheck();
    });
    


step("Click <Daftar> button", async function(button) {
    await click('Daftar',{ navigationTimeout: 60000 });
        });

/*step("Check <remember-me> button", async function (checkbox) {
    await checkBox({id:'remember-me'}).check();
        });
*/
step("Submit <Submit> button", async function(submit) {
    await click("Daftar Sekarang");
        });
        


step("Verify <page_text> message exists", async (homepage) => {
    goto("https://academy.bitlabs.id/")
})

/*step("Must Display Error Message <error_message>", async (error_message) => {
    assert.ok(await text(error_message).exists())
})
*/
step("Must Display daftar page", async()=> {
    goto("https://academy.bitlabs.id/login?tab=daftar")
    });