package pl.eventorganiser.eventorganiser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String Name;
    private String Surname;
    private String Description;

    public String getName() {
        return Name;
    }

    public String getSurname() {
        return Surname;
    }

    public String getDescription() {
        return Description;
    }
}
