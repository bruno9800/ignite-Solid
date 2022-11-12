import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  admin: boolean;

  constructor() {
    if (!this.id) {
      this.admin = false;
      this.id = uuidV4();
    }
  }

  setAdmin(): void {
    this.admin = true;
  }
}

export { User };
