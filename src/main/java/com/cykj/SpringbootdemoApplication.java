package com.cykj;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.cykj.mapper")
@ComponentScan({"com.cykj.controller","com.cykj.service"})
public class SpringbootdemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(SpringbootdemoApplication.class, args);
    }

}
