package pl.eventorganiser.eventorganiser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> getAllUsers() {
        return jdbcTemplate.query("select * from \"User\"",
                BeanPropertyRowMapper.newInstance(User.class));
    }

    public String addUser(User user) {
        jdbcTemplate.update("insert into \"User\" (\"ID\", \"Name\", \"Surname\", \"Email\",\"Password\", \"Description\") values (user_sequence.nextval, ?, ?, ?, ?, ?)",
                user.getName(), user.getSurname(), user.getEmail(), user.getPassword(), user.getDescription());

        return "Udało się dodać użytkownika";
    }

    public User getUserById(int id) {
        return jdbcTemplate.queryForObject("select * from \"User\" where id = ?",
                BeanPropertyRowMapper.newInstance(User.class), id);
    }

    public String deleteUser(int id) {
        jdbcTemplate.update("delete from \"User\" where id = ?", id);

        return "Udało się usunąć użytkownika";
    }
}
