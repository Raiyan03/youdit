import {app} from "@/firebase/firebaseConfig";
import { getStorage} from "firebase/storage"

export const firebaseStorage = getStorage(app);