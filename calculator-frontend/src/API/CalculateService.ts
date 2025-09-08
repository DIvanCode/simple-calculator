import { CalculateResponse, HistoryResponse } from "@/types";
import axios from "axios";


export default class CalculateService {
  static async calculate(expr: string): Promise<CalculateResponse> {
    return await axios.post(`${process.env.BACKEND_URL}/api/calculate`, { expr });
  }

  static async getHistory(): Promise<HistoryResponse> {
    return await axios.get(`${process.env.BACKEND_URL}/api/history`);
  }
}
