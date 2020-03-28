package com.example.demo.web.controller;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.entity.StringEntity;
import org.springframework.web.bind.annotation.*;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

import java.sql.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.css.CSSStyleSheet;

//TODO remove this cross origin plz
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductController {



    boolean isLocal = false;


    // Linux: /home/{user}/test
    // Windows: C:/Users/{user}/test
    private static String UPLOAD_DIR = System.getProperty("user.home") + "/uploads";
    private static String db_adress =  "10.5.48.3";//"35.228.151.116";//sur le cloud de puis le local "35.189.88.138"
    private static String db_port = "3306";
    private static String db_user="root";
    private static String db_pass="P2nizoOlj8CJH5qd";
    //private static String UPLOAD_DIR = "./python/uploads";
    @RequestMapping(value="/Produits", method= RequestMethod.GET)
    public String listeProduits() {
        return "Un exemple de produit";
    }


    /*
     * the code for CORONA VIRUS COVID 19 MOROCCAN TRACKER HERE STARTED
     */
    @PostMapping(value = "/login")
    private String login(@RequestBody String body)throws Exception {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        String username="";
        String password="";
        JSONArray ret = new JSONArray();
        print(body);
        JSONObject bodyJSON = new JSONObject(body);

        username=bodyJSON.getString("username");
        password=bodyJSON.getString("password");
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);

            Statement stmt2=con.createStatement();
            //continue from here with geo...
            ResultSet rs2=stmt2.executeQuery("select * from db_covid19.user where username='"+username+"' and password='"+ password+"';");
            if (rs2.next()) {
                return "{\"login\":true}";
            }
            con.close();
        }
        catch(Exception e){ System.err.println(e);}


        return "{\"login\":false}";
    }

    @PostMapping(value = "/getData")
     private String getData(@RequestBody String body)throws Exception {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        JSONArray ret = new JSONArray();
        JSONArray provinces = new JSONArray();
        print(body);
        JSONObject bodyJSON = new JSONObject(body);
        int nbDays=bodyJSON.getInt("nbDays");
        System.out.println("nbDays chosen: "+nbDays);

        //get history

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
            Instant yesterday;
            Instant final_;
            Instant now = Instant.now();
            if(nbDays<7)
            {
                yesterday = now.minus(2, ChronoUnit.DAYS);
                 final_ = now.plus(nbDays, ChronoUnit.DAYS);
            }
            else if(nbDays<15)
            {
                yesterday = now.minus(2, ChronoUnit.DAYS);
                 final_ = now.plus(nbDays, ChronoUnit.DAYS);
            }
            else if(nbDays<30)
            {
                 yesterday = now.minus(7, ChronoUnit.DAYS);
                 final_ = now.plus(nbDays, ChronoUnit.DAYS);
            }
            else
            {
                 yesterday = now.minus(15, ChronoUnit.DAYS);
                 final_ = now.plus(nbDays, ChronoUnit.DAYS);
            }
            yesterday = now.minus(0, ChronoUnit.DAYS);
            String date = yesterday.toString().split("T")[0];
            String final_date = final_.toString().split("T")[0];
            Statement stmt2=con.createStatement();
            //continue from here with geo...
            ResultSet rs2=stmt2.executeQuery("select * from db_covid19.fact where date>='"+date+"' and date <='"+ final_date+"'  ORDER BY date;");
            while (rs2.next()) {//update
                JSONObject row = new JSONObject();
                ResultSetMetaData rsmd = rs2.getMetaData();
                //rsmd.getColumnName(i)
                row.put(rsmd.getColumnName(1),rs2.getInt(1)); //id
                row.put(rsmd.getColumnName(2),rs2.getDate(2)); //date
                row.put(rsmd.getColumnName(3),rs2.getString(3));//region
                row.put(rsmd.getColumnName(4),rs2.getInt(4));//cas confirme
                row.put(rsmd.getColumnName(5),rs2.getInt(5));//cas estime
                row.put(rsmd.getColumnName(6),rs2.getInt(6));//nb mort estime
                row.put(rsmd.getColumnName(7),rs2.getInt(7));//nb cas mort
                row.put(rsmd.getColumnName(8),rs2.getInt(8));// increase rate
                row.put(rsmd.getColumnName(9),rs2.getInt(9));// nb lit
                row.put(rsmd.getColumnName(10),rs2.getInt(10)); //nb retablis
                row.put(rsmd.getColumnName(11),rs2.getInt(11)); //nb hospitalise
                row.put("recommandation",new JSONObject());
                //row.put("recommandation",getRecommandation(rs2.getInt(4),rs2.getInt(9),7000,rs2.getString(3)));
                System.out.println(row);
                //GET RECOMMENDATION HERE!
                     /*if(true)
        {
            return getRecommandation(40,300,7000,"Casablanca-Settat").toString();
        }*/
                ret.put(row);
            }
            //PLZ GET PROVINCE DATA HERE AND APPEND IT TO JSON RETURNED TO FRONT!!!!! TODO
            stmt2=con.createStatement();
            //continue from here with geo...
             rs2=stmt2.executeQuery("select * from db_covid19.province;");
            while (rs2.next()) {//update
                JSONObject row = new JSONObject();
                ResultSetMetaData rsmd = rs2.getMetaData();
                //rsmd.getColumnName(i)
                row.put(rsmd.getColumnName(1),rs2.getInt(1)); //id
                row.put(rsmd.getColumnName(2),rs2.getString(2)); //date
                row.put(rsmd.getColumnName(3),rs2.getInt(3));//region
                row.put(rsmd.getColumnName(4),rs2.getInt(4));//cas confirme
                row.put(rsmd.getColumnName(5),rs2.getInt(5));//cas estime
                row.put(rsmd.getColumnName(6),rs2.getInt(6));//nb mort estime
                row.put(rsmd.getColumnName(7),rs2.getInt(7));//nb cas mort
                row.put(rsmd.getColumnName(8),rs2.getDouble(8));// increase rate
                row.put(rsmd.getColumnName(9),rs2.getDouble(9));// nb lit

                //row.put("recommandation",getRecommandation(rs2.getInt(4),rs2.getInt(9),7000,rs2.getString(3)));
                System.out.println(row);
                //GET RECOMMENDATION HERE!
                     /*if(true)
        {
            return getRecommandation(40,300,7000,"Casablanca-Settat").toString();
        }*/
                provinces.put(row);
            }
            con.close();
        }
        catch(Exception e){ System.err.println(e);}


        JSONObject finalRet = new JSONObject();
        finalRet.put("data",ret);
        finalRet.put("provinces",provinces);
        String data=finalRet.toString();
        //get from python
        return data;
    }

    @RequestMapping(value="/setCas", method= RequestMethod.POST)
    private String setCas(@RequestBody String body)
    {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        String date="";
        JSONObject bodyJSON = new JSONObject(body);
        JSONArray cas=bodyJSON.getJSONArray("cas");
        String dateString = bodyJSON.getString("date");
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
        for(int i=0;i<cas.length();i++)
        {
            // { "name": "Tanger-Tétouan-Al Hoceïma", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1,"nb_retab":1 },
            String region = cas.getJSONObject(i).getString("name");
            int nb_cas_confirme=cas.getJSONObject(i).getInt("nb_diag");
            int nb_cas_mort=cas.getJSONObject(i).getInt("nb_mort");
            int nb_lits=cas.getJSONObject(i).getInt("nb_lit");
            int nb_retablis=cas.getJSONObject(i).getInt("nb_retab");
            int nb_hospitalises=cas.getJSONObject(i).getInt("dont_hosp");
            date = dateString.split("T")[0];
            //print(date);
            Statement stmt2=con.createStatement();
            //continue from here with geo...
            ResultSet rs2=stmt2.executeQuery("select * from db_covid19.fact where date='"+date+"' and region='"+region+"';");
            if(rs2.next()) {//update
                //print("update");
                Statement stmt3=con.createStatement();
                stmt3.executeUpdate("update db_covid19.fact set  nb_cas_confirme="+nb_cas_confirme+",nb_cas_mort="+nb_cas_mort+",nb_lits="+nb_lits+",nb_retablis="+nb_lits+",nb_hospitalises="+nb_lits+" where date='"+date+"' and region='"+region+"' ;");
            }
            else//insert
            {
                //print("insert");
                Statement stmt3=con.createStatement();
                //continue from here with geo...
                //ResultSet rs3=stmt3.executeQuery("insert into db_covid19.fact (region) values('"+region+"',);");
                stmt3.executeUpdate("insert into db_covid19.fact(date,region,nb_cas_confirme,nb_cas_mort,nb_lits,nb_retablis,nb_hospitalises) values('"+date+"','"+region+"',"+nb_cas_confirme+","+nb_cas_mort+","+nb_lits+","+nb_retablis+","+nb_hospitalises+");");

            }
        }
        con.close();
        }
        catch(Exception e){ System.err.println(e);}
        System.out.println(cas);
        String data="";
        //get from python

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
            Statement stmt2=con.createStatement();
            //continue from here with geo...
            ResultSet rs2=stmt2.executeQuery("select * from db_covid19.fact where date='"+date+"';");
            int totale=0;
            JSONObject regions = new JSONObject();
            while(rs2.next()) {//update
                //print("update");

                ResultSetMetaData rsmd = rs2.getMetaData();
                //rsmd.getColumnName(i)
                String region_name = rs2.getString(3);
                if(region_name.equals("ALL"))
                {
                    continue;
                }
                int val = rs2.getInt(4);
                regions.put(region_name,val);
                totale+=val;
            }
            String[] regions_name= {
                    "Tanger-Tétouan-Al-Hoceïma",
                    "Oriental",
                    "Fès-Meknès",
                    "Rabat-Salé-Kénitra",
                    "Béni-Mellal-Khénifra",
                    "Casablanca-Settat",
                    "Marrakech-Safi",
                    "Drâa-Tafilalet",
                    "Souss-Massa",
                    "Guelmim-Oued Noun",
                    "Laâyoune-Sakia-El-Hamra",
                    "Dakhla-Oued-Ed-Dahab",
                    "base_donnees"

            };
           /* for(int k=0;k<regions_name.length;k++)
            {
                try
                {
                    String tmp = regions.getString(regions_name[k]);
                }
                catch(Exception e)
                {
                        regions.put(regions_name[k],0);
                }
            }*/
            regions.put("ALL",totale);
            updateAll(totale,regions);
            con.close();
        }
        catch(Exception e){ System.err.println(e);}


        return data;

    }

    @RequestMapping(value="/setActions", method= RequestMethod.POST)
    private String setActions(@RequestBody String body)
    {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        /*if(true)
        {
            return getRecommandation(40,300,7000,"Casablanca-Settat").toString();
        }*/
        JSONObject bodyJSON = new JSONObject(body);
        JSONArray actions=bodyJSON.getJSONArray("actions");
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
            for(int i=0;i<actions.length();i++)
            {
                // { "name": "Tanger-Tétouan-Al Hoceïma", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1,"nb_retab":1 },
                String region = "ALL";
                String dateString = actions.getJSONObject(i).getString("date");
                String action =  actions.getJSONObject(i).getString("action");
                double reduction_rate = 0;//TODO get ALL

                {
                    Statement stmt2=con.createStatement();
                    //continue from here with geo...
                    ResultSet rs2=stmt2.executeQuery("select * from db_covid19.action_ref where action='"+action+"';");
                    if(rs2.next()) {//update
                        //print("update");
                        JSONObject row = new JSONObject();
                        ResultSetMetaData rsmd = rs2.getMetaData();
                        //rsmd.getColumnName(i)
                        reduction_rate = rs2.getDouble(5);
                    }
                }


                String date = dateString.split("T")[0];
                //print(date);
                Statement stmt2=con.createStatement();
                //continue from here with geo...
                ResultSet rs2=stmt2.executeQuery("select * from db_covid19.action_model where date='"+date+"' and region='"+region+"';");
                if(rs2.next()) {//update
                    //print("update");
                    Statement stmt3=con.createStatement();
                    stmt3.executeUpdate("update db_covid19.action_model set  action='"+action+"',region='"+region+"',reduction_rate="+reduction_rate+" where date='"+date+"' ;");
                }
                else//insert
                {
                    //print("insert");
                    Statement stmt3=con.createStatement();
                    //continue from here with geo...
                    //ResultSet rs3=stmt3.executeQuery("insert into db_covid19.fact (region) values('"+region+"',);");
                    stmt3.executeUpdate("insert into db_covid19.action_model(date,region,action,reduction_rate,active) values('"+date+"','"+region+"','"+action+"',"+reduction_rate+","+1+");");

                }
            }
            con.close();
        }
        catch(Exception e){ System.err.println(e);}
        System.out.println(actions);
        String data="";
        //get from python
        return data;
    }


    /* test
      @RequestMapping(value="/getData", method= RequestMethod.POST)
     private String getData(@RequestBody String body)
    {
        String data="";

        return data;
    }
     */
    @RequestMapping(value="/getRecommandation", method= RequestMethod.POST)
    private String getRec(@RequestBody String body)
    {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        System.out.println(">> "+body);

        JSONArray data = new JSONObject(body).getJSONArray("data");
        for(int i =0;i<data.length();i++)
        {
            data.getJSONObject(i).put("recommandation",getRecommandation(data.getJSONObject(i).getInt("nb_cas_confirme"),data.getJSONObject(i).getInt("nb_lits"),data.getJSONObject(i).getInt("nb_cas_estime"),data.getJSONObject(i).getString("region")));
        }
        return data.toString();
    }


    public JSONArray getRecommandation(int nb_cas_confirme , int nb_lits , int nb_cas_estime,String region)
    {
        JSONArray ret = new JSONArray();
       //run hamza python here
        try {
            Process p;
            if(isLocal)
            {
                p = Runtime.getRuntime().exec("python ./python/mat.py "+nb_cas_confirme+" "+nb_lits+" "+nb_cas_estime);
            }
            else
            {
                p = Runtime.getRuntime().exec("python3 /home/aioxlabscom/python/mat.py "+nb_cas_confirme+" "+nb_lits+" "+nb_cas_estime);
            }
            //local
            //Process p = Runtime.getRuntime().exec("python ./python/mat.py "+nb_cas_confirme+" "+nb_lits+" "+nb_cas_estime);

            //sur google cloud
           //Process p = Runtime.getRuntime().exec("python3 /home/aioxlabscom/python/mat.py "+nb_cas_confirme+" "+nb_lits+" "+nb_cas_estime);
            while(p.isAlive())
            {
                BufferedReader stdInput = new BufferedReader(new
                        InputStreamReader(p.getInputStream()));

                BufferedReader stdError = new BufferedReader(new
                        InputStreamReader(p.getErrorStream()));
                System.out.println("Here is the standard output of the command:\n");
                String s = null;
                while ((s = stdInput.readLine()) != null) {
                    //System.out.println(s);
                }

                System.out.println("Here is the standard error of the command (if any):\n");
                while ((s = stdError.readLine()) != null) {
                    System.out.println(s);
                }
            }
            p.destroy();
            File file = new File("./mat.json");

            BufferedReader br = new BufferedReader(new FileReader(file));

            String st;
            String jsonString="";
            while ((st = br.readLine()) != null)
            {
                jsonString+=st;
            }
            br.close();
            JSONArray mat = new JSONArray(jsonString);

            try{
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection con=DriverManager.getConnection(
                        "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
                for(int i=0;i<mat.length();i++)
                {
                    int level = mat.getJSONObject(i).getInt("level");
                    String subject = mat.getJSONObject(i).getString("subject");

                    //String action="";
                    JSONArray action = new JSONArray();
                    //String channel="";
                    JSONArray channel = new JSONArray();

                    Statement stmt2=con.createStatement();
                    //continue from here with geo...
                    ResultSet rs2=stmt2.executeQuery("select * from db_covid19.channel_recommandation where level="+level+" and region='"+region+"';");

                    while(rs2.next()) {//update
                        //print("update");
                        ResultSetMetaData rsmd = rs2.getMetaData();
                        //rsmd.getColumnName(i)
                        channel.put(rs2.getString(4));
                        //row.put(rsmd.getColumnName(1),rs2.getInt(1));

                    }
                    stmt2=con.createStatement();
                    //continue from here with geo...
                    rs2=stmt2.executeQuery("select * from db_covid19.action_recommandation where level="+level+" and subject='"+subject+"';");
                    while(rs2.next()) {//update
                        //print("update");
                        ResultSetMetaData rsmd = rs2.getMetaData();
                        //rsmd.getColumnName(i)
                         action.put(rs2.getString(4));
                        //row.put(rsmd.getColumnName(1),rs2.getInt(1));
                    }
                    mat.getJSONObject(i).put("channel",channel);
                    mat.getJSONObject(i).put("action",action);

                }
                con.close();
                return mat;
            }
            catch(Exception e){ System.err.println(e);}


        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return ret;
    }

    public void print(Object s)
    {
        System.out.println(s);
    }

    public void updateAll(int nb_cas_confirme, JSONObject regions)
    {
        if(isLocal)
        {
            db_adress="localhost";
            db_pass="aiox-labs";
        }
        System.out.println(regions.toString()+" "+nb_cas_confirme);
       String[] regions_name= {

               "Tanger-Tétouan-Al Hoceïma",
      "Oriental" ,
 "Fès-Meknès" ,
  "Rabat-Salé-Kénitra" ,
     "Béni Mellal-Khénifra" ,
 "Casablanca-Settat" ,
 "Marrakech-Safi" ,
    "Drâa-Tafilalet" ,
      "Souss-Massa" ,
     "Guelmim-Oued Noun" ,
       "Laâyoune-Sakia El Hamra" ,
        "Dakhla-Oued Ed-Dahab" ,
        "ALL"


    };


        String args = nb_cas_confirme+" "+regions.getInt("Tanger-Tétouan-Al Hoceïma")+" "+regions.getInt("Oriental")+" "+regions.getInt("Fès-Meknès")+" "+regions.getInt("Rabat-Salé-Kénitra")+" "+regions.getInt("Béni Mellal-Khénifra")+" "+regions.getInt("Casablanca-Settat")+" "+regions.getInt("Marrakech-Safi")+" "+regions.getInt("Drâa-Tafilalet")+" "+regions.getInt("Souss-Massa")+" "+regions.getInt("Guelmim-Oued Noun")+" "+regions.getInt("Laâyoune-Sakia El Hamra")+" "+regions.getInt("Dakhla-Oued Ed-Dahab");
        try {
            Process p;
            if(isLocal)
            {
                p = Runtime.getRuntime().exec("python ./python/FINAAL.py "+args );
            }
            else
            {
                p = Runtime.getRuntime().exec("python3 /home/aioxlabscom/python/FINAAL.py "+args );
            }
            //local
            //Process p = Runtime.getRuntime().exec("python ./python/FINAAL.py "+args );

            //sur google cloud
           //Process p = Runtime.getRuntime().exec("python3 /home/aioxlabscom/python/FINAAL.py "+args );
            while(p.isAlive())
            {
                BufferedReader stdInput = new BufferedReader(new
                        InputStreamReader(p.getInputStream()));

                BufferedReader stdError = new BufferedReader(new
                        InputStreamReader(p.getErrorStream()));
                System.out.println("Here is the standard output of the command:\n");
                String s = null;
                while ((s = stdInput.readLine()) != null) {
                    System.out.println(s);
                }

                System.out.println("Here is the standard error of the command (if any):\n");
                while ((s = stdError.readLine()) != null) {
                    System.out.println(s);
                }
            }
            p.destroy();
            for(int k=0;k<regions_name.length;k++)
            {
                System.out.println(regions_name[k]);
                File file;
                if(regions_name[k].equals("ALL"))

                {
                        file = new File("base_donnees"+".json");
                }
                else
                {
                    file = new File(""+regions_name[k]+".json");
                }

                BufferedReader br = new BufferedReader(new FileReader(file));

                String st="";
                String jsonString="";
                while ((st = br.readLine()) != null)
                {
                    jsonString+=st;
                }
                br.close();
                JSONArray estimation = new JSONArray(jsonString);
                for(int i =0;i<estimation.length();i++)
                {
                    String region=regions_name[k];
                    if(region.equals("base_donnees"))
                    {
                        region = "ALL";
                    }
                    String date = estimation.getJSONObject(i).getString("date");
                    int nb_cas_confirme_ = (int) estimation.getJSONObject(i).getDouble("nb_cas_confirme");
                    double increase_rate = estimation.getJSONObject(i).getDouble("increase_rate");
                    int nb_cas_estime = (int) estimation.getJSONObject(i).getDouble("nb_cas_estime");


                    try{
                        Class.forName("com.mysql.cj.jdbc.Driver");
                        Connection con=DriverManager.getConnection(
                                "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
                        Statement stmt2=con.createStatement();
                        //continue from here with geo...
                        ResultSet rs2=stmt2.executeQuery("select * from db_covid19.fact where date='"+date+"' and region='"+region+"';");
                        if(rs2.next()) {//update
                            //print("update");
                            Statement stmt3=con.createStatement();
                            stmt3.executeUpdate("update db_covid19.fact set nb_cas_confirme="+nb_cas_confirme_+",  nb_cas_estime="+nb_cas_estime+",increase_rate="+increase_rate+" where date='"+date+"' and region='"+region+"';");
                        }
                        else//insert
                        {
                            //print("insert");
                            Statement stmt3=con.createStatement();
                            //continue from here with geo...
                            //ResultSet rs3=stmt3.executeQuery("insert into db_covid19.fact (region) values('"+region+"',);");
                            stmt3.executeUpdate("insert into db_covid19.fact(date,nb_cas_estime,nb_cas_confirme,region,increase_rate) values('"+date+"',"+nb_cas_estime+","+nb_cas_confirme_+",'"+region+"',"+increase_rate+");");
                        }
                        con.close();
                    }
                    catch(Exception e){ System.err.println(e);}
                }
            }


        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
    //upload and convert excel to json
    @PostMapping("/exceltojson")
    public String uploadAndConvert(@ModelAttribute UploadForm form) throws Exception  {
        String ret="";
        System.out.println("Description:" + form.getDescription());

        String result = null;
        try {
            System.out.println(">>+"+form.getFiles());
            result = this.saveUploadedFiles(form.getFiles());

        }
        // Here Catch IOException only.
        // Other Exceptions catch by RestGlobalExceptionHandler class.
        catch (IOException e) {
            e.printStackTrace();
            return "problem!";
        }

        String path="";
        if(result!=null)
        {
            path = result.replace("<br/>","");
            System.out.println(";"+path+";");

            try {
                Process p = Runtime.getRuntime().exec("python3 /home/aioxlabscom/python/excel2json/excel2json.py \""+path+"\"");
                while(p.isAlive())
                {
                    BufferedReader stdInput = new BufferedReader(new
                            InputStreamReader(p.getInputStream()));

                    BufferedReader stdError = new BufferedReader(new
                            InputStreamReader(p.getErrorStream()));

// Read the output from the command
                    System.out.println("Here is the standard output of the command:\n");
                    String s = null;
                    while ((s = stdInput.readLine()) != null) {
                        //System.out.println(s);
                    }

// Read any errors from the attempted command
                    System.out.println("Here is the standard error of the command (if any):\n");
                    while ((s = stdError.readLine()) != null) {
                        System.out.println(s);
                    }
                }
                p.destroy();


            }
            catch (IOException e) {
                e.printStackTrace();
            }

        }
        File file = new File(path+"_result.json");

        BufferedReader br = new BufferedReader(new FileReader(file));

        String st;
        while ((st = br.readLine()) != null)
        {
            System.out.println(st);
            ret+=st;
        }
        br.close();
        try
        {

            if(file.delete())                      //returns Boolean value
            {
                System.out.println(file.getName() + " deleted");   //getting and printing the file name
            }
            else
            {
                System.out.println("failed");
            }
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        //SAVE DATA TP DB REGIONS
        int[][] vals=new int[75][5];
        JSONArray data = new JSONObject(ret).getJSONObject("page1").getJSONArray("data");
        for(int i=0;i<data.length();i++)
        {
            JSONArray row = data.getJSONArray(i);
            for(int j=0;j<row.length();j++)
            {
                //2->6
                int nb_cas_confirme=Integer.parseInt(row.getString(2));
                int nb_hospitalises=Integer.parseInt(row.getString(3));
                int nb_lits=Integer.parseInt(row.getString(4));
                int nb_cas_mort=Integer.parseInt(row.getString(5));
                int nb_retablis=Integer.parseInt(row.getString(6));
                //update record id=i+1


                if(isLocal)
                {
                    db_adress="localhost";
                    db_pass="aiox-labs";
                }

                try{
                    Class.forName("com.mysql.cj.jdbc.Driver");
                    Connection con=DriverManager.getConnection(
                            "jdbc:mysql://"+db_adress+":"+db_port+"?serverTimezone=UTC",db_user,db_pass);
                    Statement stmt2=con.createStatement();
                    //continue from here with geo...
                    Statement stmt3=con.createStatement();
                    stmt3.executeUpdate("update db_covid19.province set  nb_cas_confirme="+nb_cas_confirme+",nb_cas_mort="+nb_cas_mort+",nb_lits="+nb_lits+",nb_retablis="+nb_lits+",nb_hospitalises="+nb_lits+",nb_hospitalises="+nb_hospitalises+", nb_retablis="+nb_retablis+" where id_province="+(i+1)+" ;");

                    con.close();
                }
                catch(Exception e){ System.err.println(e);}
            }
        }

        return ret;

    }
    // Save Files
    private String saveUploadedFiles(MultipartFile[] files) throws IOException {

        // Make sure directory exists!
        File uploadDir = new File(UPLOAD_DIR);
        uploadDir.mkdirs();

        StringBuilder sb = new StringBuilder();

        for (MultipartFile file : files) {

            if (file.isEmpty()) {
                continue;
            }
            //support for IE11 and Edge
            String fileName = "";
            if(file.getOriginalFilename().contains("/"))
            {
                String[] tableString = file.getOriginalFilename().split("/");
                fileName = tableString[tableString.length-1];
            }
            else if(file.getOriginalFilename().contains("\\"))
            {
                String[] tableString = file.getOriginalFilename().split("\\\\");
                fileName = tableString[tableString.length-1];
            }
            else
            {
                fileName=file.getOriginalFilename();
            }

            String uploadFilePath = UPLOAD_DIR + "/" + fileName;//file.getOriginalFilename();

            byte[] bytes = file.getBytes();
            Path path = Paths.get(uploadFilePath);
            Files.write(path, bytes);

            sb.append(uploadFilePath).append("<br/>");
        }
        return sb.toString();
    }
}