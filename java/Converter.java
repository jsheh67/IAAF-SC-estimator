
import java.io.*;

public class Converter {

    public static void converter(String fileName) throws IOException {
        String fileCsv= fileName.concat(".csv");

        File file = new File(fileCsv);
        try {
            if (file.createNewFile()) {
                System.out.println(fileCsv.concat(" created!"));
            } else {
                System.out.println(fileCsv.concat(" already exists"));
                file.delete();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
        FileWriter fileWriter = new FileWriter(fileCsv, true);
        PrintWriter writer = new PrintWriter(fileWriter);

        try(FileReader fileReader = new FileReader("/Users/joesheh/IAAF-DATA/IAAF-SC-estimator/java/data/"+fileName+".txt");
            BufferedReader reader = new BufferedReader(fileReader)){

            for(String line = reader.readLine();(line != null ); line = reader.readLine()){
                if(line.startsWith("MEN")||line.startsWith("WOMEN")||line.length()<4){
                    continue;
                }
                writer.println(line.replaceAll("\\s",","));
            }
            writer.close();

        }catch (IOException e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException {
        String[] fileNames = {"mensSprints", "mensMid","mensDis","womenSprints", "womensMid","womensDis"};

        for(String file: fileNames){
            converter(file);
        }
    }
}

