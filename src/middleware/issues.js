import { db } from "../config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const createIssue = async (title, description, userId, status) => {
    try {
      const docRef = await addDoc(collection(db, 'issues'), {
        title,
        description,
        user_id: userId,
        status,
        created_at: new Date()
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
};

export const getIssues = async () => {
    try {
      const issues = [];
      const querySnapshot = await getDocs(collection(db, 'issues'));
      querySnapshot.forEach((doc) => {
        issues.push({ id: doc.id, ...doc.data() });
      });
      return issues;
    } catch (e) {
      console.error("Error fetching issues: ", e);
      throw e;
    }
};