import axios from "axios";


type HistoryItem = {
  expr: string;
  res: string;
};

export default class CalculateService {
  static async calculate(expr: string): Promise<{ data: { res: string } }> {
    return await axios.post(`${process.env.BACKEND_URL}/api/calculate`, { expr });
  }

  static async getHistory(): Promise<{ data: { history: HistoryItem[] } }> {
    return await axios.get(`${process.env.BACKEND_URL}/api/history`);
  }
}
