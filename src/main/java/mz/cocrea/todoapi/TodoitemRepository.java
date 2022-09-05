package mz.cocrea.todoapi;

// import mz.cocrea.todoapi.Todoitem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoitemRepository extends JpaRepository<Todoitem, Long> {}
