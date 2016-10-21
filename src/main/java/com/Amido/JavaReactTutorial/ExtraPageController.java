package com.Amido.JavaReactTutorial;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ExtraPageController {
    @RequestMapping(value = "/extra-page")
    public String index() {
        return "extra-page";
    }
}