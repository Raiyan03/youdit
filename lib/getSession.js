import { auth } from "@/auth";
import { cache } from "react";

const userSession = cache(auth);

export default userSession;