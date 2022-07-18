import React, { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getProperTransactionAmountDisplay } from '../../lib/utils';
import { deleteTransactionAsync, TransactionModel } from '../../reducers/transactions';

type ComponentProps = {
  transaction: TransactionModel;
};

export const Transaction: FC<ComponentProps> = ({ transaction }) => {
  const dispatch = useAppDispatch();

  const className = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={className}>
      {transaction.text} <span>{getProperTransactionAmountDisplay(transaction.amount)}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTransactionAsync(transaction.id))}
      >
        x
      </button>
    </li>
  );
};
