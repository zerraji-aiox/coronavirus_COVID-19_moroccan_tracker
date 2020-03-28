package com.example.demo.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
    @GetMapping("/simulation")
    public String upload() {
        return "simulation";
    }


}