
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class test {
    public WebDriver driver;

    @BeforeClass
    public void openPage(){
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/");
    }

    @Test
    public void checkTitle(){
        String title = driver.getTitle();
        Assert.assertEquals(title, "IAAF calculator");
    }

    @Test
    public void checkInput(){
        System.out.println("check input");
    }


    @AfterClass
    public void closeBrowser(){
       driver.quit();
    }



    @AfterSuite
    public void generateReport(){
        System.out.println("generate test report");
    }





    
}
