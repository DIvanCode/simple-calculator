export type ButtonVariant = 'default' | 'primary' | 'accent';


export type CalcResultType = {
    res: string;
}

export type HistoryItemType = {
    expr: string;
    res: string;
}

export type ResponseType<T> = { data: T };

export type HistoryResponse = ResponseType<HistoryItemType[]>;
export type CalculateResponse = ResponseType<CalcResultType>;