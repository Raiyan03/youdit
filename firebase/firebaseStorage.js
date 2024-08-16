import {app} from "@/firebase/firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"

export const firebaseStorage = getStorage(app);