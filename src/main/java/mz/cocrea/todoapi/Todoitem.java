package mz.cocrea.todoapi;

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

  private String summary;
  private Boolean done = false;

  public Todoitem() {}
}
