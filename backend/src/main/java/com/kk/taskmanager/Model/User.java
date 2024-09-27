package com.kk.taskmanager.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    private int id;

    private String name;
    private int age;
}
