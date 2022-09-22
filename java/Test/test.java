
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class test {
    public WebDriver driver;
    public void checkScore(Integer min, Integer sec, Integer ms, String expected){
        driver.findElement(By.id("men")).click();
        driver.findElement(By.id("min")).sendKeys(String.valueOf(min));
        driver.findElement(By.id("sec")).sendKeys(String.valueOf(sec));
        driver.findElement(By.id("ms")).sendKeys(String.valueOf(ms));
        driver.findElement(By.id("calcPoints")).click();
        String result= driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[2]/table/tbody/tr/td[3]")).getText();
        //1400 is score from iaaf tables;
        Assert.assertEquals(expected,result);

    }

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
    public void checkMax100m(){
        checkScore(null,9,46, "1400");
    }

    @Test
    public void checkMin100m(){
        checkScore(null,20,46, "0");
    }


    @AfterMethod
    public void clearResults(){
//        driver.findElement(By.id("clearButton")).click()
        driver.navigate().refresh();
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
