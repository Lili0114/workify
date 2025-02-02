import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

export async function names() {
    const list = [];
    const tests = collection(db, 'test');
    const testsSnapshot = await getDocs(tests);
    testsSnapshot.forEach((doc) => {
        list.push(doc.data().name);
    });
    return list;
}
