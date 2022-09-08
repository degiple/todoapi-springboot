package mz.cocrea.todoapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Todoitem {

  @Id
  @GeneratedValue
  private Long id;

  private String name;
  private Boolean isComplete = false;

  public Todoitem() {
  }
}
