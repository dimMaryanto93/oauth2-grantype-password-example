package com.maryanto.dimas.resource.mits.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserAPI {

    @GetMapping("/user")
    public Map<String, Object> userInfo(Principal principal) {
        Map<String, Object> params = new HashMap<>();
        params.put("username", principal.getName());
        params.put("access", new Date());
        return params;
    }
}
