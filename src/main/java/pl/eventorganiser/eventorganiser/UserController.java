package pl.eventorganiser.eventorganiser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userRepository.getUserById(id);
    }

    @PostMapping("")
    public String addUser(@RequestBody User user) {
        return userRepository.addUser(user);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        return userRepository.deleteUser(id);
    }
}
