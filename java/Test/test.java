
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class test {
    public WebDriver driver;
    public void checkScore(Integer min, Integer sec, Integer ms, String expected) throws InterruptedException {
        driver.findElement(By.id("men")).click();
        driver.findElement(By.id("min")).sendKeys(String.valueOf(min));
        driver.findElement(By.id("sec")).sendKeys(String.valueOf(sec));
        driver.findElement(By.id("ms")).sendKeys(String.valueOf(ms));
        driver.findElement(By.id("calcPoints")).click();
        Thread.sleep(100);
        String result= driver.findElement(By.xpath("/html/body/div[1]/div/div[3]/div[2]/div/div[2]/table/tbody/tr[1]/td[3]")).getText();
        //1400 is score from iaaf tables;
        Assert.assertEquals(expected,result);
    }

    public void checkTime(int points, String expected) throws InterruptedException {
        driver.findElement(By.id("men")).click();
        driver.findElement(By.id("points")).sendKeys(String.valueOf(points));
        driver.findElement(By.id("calcTime")).click();
        Thread.sleep(100);
        String time= driver.findElement(By.xpath("/html/body/div[1]/div/div[3]/div[2]/div/div[2]/table/tbody/tr[1]/td[2]")).getText();
        Assert.assertEquals(time, expected);
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
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
    }
    @Test
    public void navigateToEstimator() throws InterruptedException {
        Thread.sleep(100);
        driver.findElement(By.xpath("/html/body/div[1]/div/nav/ul/li[2]/a")).click();
        String estimatorURl= driver.getCurrentUrl();
        Assert.assertEquals(estimatorURl,"http://localhost:3000/estimator");
    }

    @Test
    public void navigateToGithub(){
        driver.findElement(By.className("bi-github")).click();
        String estimatorURl= driver.getCurrentUrl();
        Assert.assertEquals(estimatorURl,"https://github.com/jsheh67/IAAF-SC-estimator");
    }


//---calculating points---------------
    @Test
    public void checkMax100m() throws InterruptedException {
        checkScore(null,9,46, "1400");
    }

    @Test
    public void checkMin100m() throws InterruptedException {
        checkScore(null,20,46, "0");
    }

//---calculating times--------------------
    @Test
    public void check900point100m() throws InterruptedException {
        checkTime(900, "10.96");
    }

    @Test
    public void check0point100m() throws InterruptedException {
        checkTime(0, "16.96");
    }


//--tear-down----------------

    @AfterMethod
    public void clearResults(){
//        driver.findElement(By.id("clearButton")).click()
        driver.navigate().to("http://localhost:3000/");
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
