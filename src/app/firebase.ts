import { FirebaseApp, initializeApp } from 'firebase/app';
import { collection, doc, FirestoreDataConverter, getFirestore } from 'firebase/firestore';
import { TransactionModel } from '../reducers/transactions';
import { getConfig } from './config';
import { Nullable } from './types';

let app: Nullable<FirebaseApp> = null;
export const transactionsCollectionName = 'transactions';

export const getFirebaseApp = (): FirebaseApp => {
  if (!app) {
    app = initializeApp(getConfig().firebaseConfig);
  }
  return app;
};

export const firestore = getFirestore(getFirebaseApp());

export const transactionsConverter: FirestoreDataConverter<TransactionModel> = {
  toFirestore: (transaction) => {
    return { text: transaction.text, amount: transaction.amount };
  },
  fromFirestore: (snapshot, options?) => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      text: data.text,
      amount: data.amount,
    };
  },
};

export const transactionsRef = collection(firestore, transactionsCollectionName).withConverter(
  transactionsConverter
);

export const getDocumentRefById = (id: string) => doc(firestore, transactionsCollectionName, id);
