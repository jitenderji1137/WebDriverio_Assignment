describe('Checking webdricerio',() => {
    it('mobile', async() => {
        // to identify element by accesablity id.
        const ele = await $('~App');
        await ele.click();

        const actbar = await $('~Action Bar');
        await expect(actbar).toBeExisting();


        
    });
    it('views', async() => {


        await $('~Preference').click(); //by accesablityid
        await $('~3. Preference dependencies').click();  //by accesablityid


        await $('android.widget.CheckBox').click(); //by classname
        // await $('android.widget.TextView').click(); //by classname
        await $('//android.widget.TextView[@text="WiFi settings"]').click();
        await $('//*[@resource-id="android:id/edit"]').addValue("Jitender"); // by xpath to type in input box
        await $('android.widget.Button').click();
        driver.back(); // goback
        await driver.pause(2000);
        driver.openNotifications();

        driver.toggleAirplaneMode();
        await driver.pause(2000);
    });


    it('for tap', async() => {
        await $('~Views').touchAction('tap');
        await $('~Expandable Lists').touchAction('tap');
        await $('~1. Custom Adapter').touchAction('tap');
        await $('//*[@text="People Names"]').touchAction('longPress');
    });


    it('drag and drop', async() => {
        await $('~Views').touchAction('tap');
        await $('~Drag and Drop').touchAction('tap');
        await $('//*[@resource-id="io.appium.android.apis:id/drag_dot_3"]').touchAction(['press',{action:'moveTo',element:'//*[@resource-id="io.appium.android.apis:id/drag_dot_1'},'release']); //for drag and drop
    });

    it('scroll', async() => {
        await $('~Views').touchAction('tap');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("ScrollBars"))').click();
    });
    it('Scroll to end', async() => {
        await $('~Views').touchAction('tap');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    });
    it('gallery', async() => {
        await $('~Views').touchAction('tap');
        await $('~Gallery').touchAction('tap');
        await $('~1. Photos').touchAction('tap');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5).scrollBackward()');
    });
    it.only('Swithching between apps', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//*[@text="Text"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Kaushik Biswas");
        await driver.back();
        await driver.back();
        await driver.back();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').touchAction('longPress');
        await $('//*[@text="Delete"]').click();
        await $('//*[@text="OK"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Like us on Facebook"]').click();
        await driver.pause(5000);
        await driver.switchContext("WEBVIEW_chrome");
        await driver.pause(5000);
        const text = await driver.getTitle();
        await expect(text).toEqual("ColorNote");
        await driver.switchContext("NATIVE_APP");
        await driver.back();
        await driver.back();
    });
});