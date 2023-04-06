package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Admin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import com.xfactor.openlibrary.repositories.AdminRepository;

@RestController
@RequestMapping("AdminController")
public class AdminController {
    private AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }


    @PutMapping("/saveAdmin")
    public Admin saveAdmin(@RequestBody Admin admin) {
        if (admin.getId() != null) {
         Admin admin2 = adminRepository.save(admin);
            return admin2;
        }
       return null;

    }
    /*PostMapping("/saveAdmin")
    public Admin saveAdmin(@RequestBody Admin admin)
    {
        lAdmin.add(admin);
        return admin;
    }   */

    @GetMapping("/getAll")
    public List<Admin> getAllAdmin() {
        return adminRepository.findAll();
    }
}