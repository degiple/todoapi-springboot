package mz.cocrea.todoapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import mz.cocrea.todoapi.models.Todoitem;

public interface TodoitemRepository extends JpaRepository<Todoitem, Long> {}
