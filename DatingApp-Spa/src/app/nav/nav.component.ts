import { AlertifyService } from "./../services/alertify.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe((photo) => {
      this.photoUrl = photo;
    });
  }

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success("Login Successful");
      },
      (error) => {
        this.alertify.error("Login Failed");
      },
      () => {
        this.router.navigateByUrl("/members");
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message("logged out");
    this.router.navigateByUrl("/home");
  }
}
