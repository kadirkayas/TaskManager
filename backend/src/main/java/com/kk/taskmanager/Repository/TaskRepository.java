package com.kk.taskmanager.Repository;

import com.kk.taskmanager.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface TaskRepository extends JpaRepository <Task, Long>{

}
