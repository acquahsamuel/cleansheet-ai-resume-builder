import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  notify(
    message: string,
    type: "success-toast" | "error-toast" | "neutral-toast",
    duration?: number
  ) {
    this.snackBar.open(message, "X", {
      duration: duration || 3000,
      verticalPosition: "top",
      panelClass: [type]
    });
  }
}
